// Knockout Namespaces plugin v0.1.0
// (c) 2011 Hunter Loftis, Chris Gomez - http://github.com/hunterloftis/knockout.ns
// License: Ms-Pl (http://www.opensource.org/licenses/ms-pl.html)
(function(b){b.applyBindings=function(e,a,c){a&&a.nodeType!==void 0?(c=a,a=""):(a=a&&a.length>0?"-"+a:"",c=c||window.document.body);var d="data-bind"+a;a=b.utils.getElementsHavingAttribute(c,d);b.utils.arrayForEach(a,function(a){b.applyBindingsToNode(a,null,e,d)})}})(ko);
