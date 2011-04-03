# Knockout.namespaces
      
  Structure for your [KnockoutJS](http://knockoutjs.com) bindings.
  
# Use cases

  - Multiple ViewModels
  - Ajaxed ViewModels
  - Loosely coupled architecture
  - Dynamic binding
  - Data-bound controls and modules

# Use

    <script src="knockout-latest.js"></script>
    <script src="knockout.namespaces-latest.js"></script>
    ...
    <span data-bind-user="text: name">
    <span data-bind="text: title"> <!-- works with regular bindings -->
    ...
    <script>
      ko.applyBindings(globalViewModel);
      ko.applyBindings(userViewModel, 'user');
    </script>