// Knockout Namespaces plugin v0.1
// (c) 2011 Hunter Loftis, Chris Gomez - http://github.com/hunterloftis/knockout.ns
// License: Ms-Pl (http://www.opensource.org/licenses/ms-pl.html)

(function (ko) {

  var bindingAttributeName = 'data-bind';
  
  ko.currentlyBindingNamespace = '';
  
  /*  ko.applyBindings
   *
   *  4 method signatures:
   *  applyBindings(viewModel)                      <-- best practice, simple global ViewModels
   *  applyBindings(viewModel, rootNode)            <-- legacy support
   *  applyBindings(viewModel, namespace)           <-- best practice, complex multi-ViewModel pages
   *  applyBindings(viewModel, namespace, rootNode) <-- if you really must
   */
     
  ko.applyBindings = function (viewModel, namespace, rootNode) {
      if (namespace && (namespace.nodeType !== undefined)) {
        // supplied vm & rootNode
        rootNode = namespace;
        namespace = '';
      }
      else {
        // supplied vm & namespace & maybe rootNode
        namespace = namespace || '';
        rootNode = rootNode || window.document.body;                              // Make "rootNode" parameter optional
      }
      ko.currentlyBindingNamespace = namespace;
      var postfix = (namespace.length > 0) ? '-' + namespace : '';
      var bindingAttributeNameNs = bindingAttributeName + postfix,
          elemsWithBindingAttribute = ko.utils.getElementsHavingAttribute(rootNode, bindingAttributeNameNs);
      ko.utils.arrayForEach(elemsWithBindingAttribute, function (element) {
          ko.applyBindingsToNode(element, null, viewModel, bindingAttributeNameNs);
      });
      ko.currentlyBindingNamespace = '';
  };
  
  ko.templateRewriting = (function () {
    var memoizeBindingAttributeSyntaxRegex = /(<[a-z]+\d*(\s+(?!data-bind(-[a-z0-9\-]*)?=)[a-z0-9\-]+(=(\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind(-[a-z0-9\-]*)?=(["'])([\s\S]*?)\7/gi;

    return {
        ensureTemplateIsRewritten: function (template, templateEngine) {
            if (!templateEngine['isTemplateRewritten'](template))
                templateEngine['rewriteTemplate'](template, function (htmlString) {
                    return ko.templateRewriting.memoizeBindingAttributeSyntax(htmlString, templateEngine);
                });
        },

        memoizeBindingAttributeSyntax: function (htmlString, templateEngine) {
            return htmlString.replace(memoizeBindingAttributeSyntaxRegex, function (match) {
                var tagToRetain = arguments[1];
                // Non-namespaced KO uses group 6, but we add 2 groups for optional namespaces after data-bind
                var dataBindAttributeValue = arguments[8];
                // We need to detect whether or not we're binding to a namespace so we know whether to inject the 'applyBindingsToNextSiblingScript'
                var namespace = arguments[6] ? arguments[6].slice(1) : '';
                
                // Only bind if we're binding to the global namespace or to the current namespace
                if (namespace === '' || namespace === ko.currentlyBindingNamespace) {
                    // This namespace has been bound and should be activated within the template
                    dataBindAttributeValue = ko.jsonExpressionRewriting.insertPropertyAccessorsIntoJson(dataBindAttributeValue);
    
                    // For no obvious reason, Opera fails to evaluate dataBindAttributeValue unless it's wrapped in an additional anonymous function,
                    // even though Opera's built-in debugger can evaluate it anyway. No other browser requires this extra indirection.
                    var applyBindingsToNextSiblingScript = "ko.templateRewriting.applyMemoizedBindingsToNextSibling(function() { \
                        return (function() { return { " + dataBindAttributeValue + " } })() \
                    })";
                    return templateEngine['createJavaScriptEvaluatorBlock'](applyBindingsToNextSiblingScript) + tagToRetain;
                }
                else {
                    // This namespace has not been bound and the htmlString shouldn't be modified
                    return match;
                }
            });
        },

        applyMemoizedBindingsToNextSibling: function (bindings) {
            return ko.memoization.memoize(function (domNode, viewModel) {
                if (domNode.nextSibling)
                    ko.applyBindingsToNode(domNode.nextSibling, bindings, viewModel);
            });
        }
    }
  })();
	
})(ko);