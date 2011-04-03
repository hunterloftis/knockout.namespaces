# Knockout.namespaces
      
  Structure for your [KnockoutJS](http://knockoutjs.com) bindings.
  
# Download

  - [knockout.namespace-latest.js](https://github.com/hunterloftis/knockout.namespaces/blob/master/build/output/knockout.namespaces-latest.js)
  - [knockout.namespace-latest.debug](https://github.com/hunterloftis/knockout.namespaces/blob/master/build/output/knockout.namespaces-latest.debug.js)
  
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

# Use cases

  - Multiple ViewModels
  - Ajaxed ViewModels
  - Loosely coupled architecture
  - Dynamic binding
  - Data-bound controls and modules
    
# Related

  - [Initial pull request](https://github.com/SteveSanderson/knockout/pull/74)
  - [Google groups discussion](http://groups.google.com/group/knockoutjs/browse_thread/thread/a2a5489c1e4c40de)
  - [Initial groups RFC](http://groups.google.com/group/knockoutjs/browse_thread/thread/5f3802217f896d74/96b37601840a23be?lnk=gst&q=namespaces#96b37601840a23be)