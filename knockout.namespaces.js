// Knockout Namespaces plugin v0.1
// (c) 2011 Hunter Loftis, Chris Gomez - http://github.com/hunterloftis/knockout.ns
// License: Ms-Pl (http://www.opensource.org/licenses/ms-pl.html)

(function (ko) {

  var bindingAttributeName = 'data-bind';
  
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
        rootNode = namespace;
        namespace = '';
      }
      else {
        namespace = (namespace && namespace.length > 0) ? ('-' + namespace) : '';  // Prefix -namespace
        rootNode = rootNode || window.document.body;                              // Make "rootNode" parameter optional
      }
      var bindingAttributeNameNs = bindingAttributeName + namespace,
          elemsWithBindingAttribute = ko.utils.getElementsHavingAttribute(rootNode, bindingAttributeNameNs);
      ko.utils.arrayForEach(elemsWithBindingAttribute, function (element) {
          ko.applyBindingsToNode(element, null, viewModel, bindingAttributeNameNs);
      });
  };
	
})(ko);