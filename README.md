# Knockout.namespaces
      
  Structure for your [KnockoutJS](http://knockoutjs.com) bindings.
  
# Use cases

  - Multiple ViewModels
  - Ajaxed ViewModels
  - Loosely coupled architecture
  - Dynamic binding
  - Data-bound controls and modules
  
# How to use

  - Include knockout
  - Include knockout.namespaces
  - Create namespaced bindings in your html view:
  
    <span data-bind-user="text: name">
    <span data-bind="text: title"> <!-- works alongside non-namespaced bindings -->
  
  - Call ko.applyBindings with a namepace:
  
    ko.applyBindings(userViewModel, 'user');