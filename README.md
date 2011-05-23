# Knockout.namespaces
      
  Multiple [KnockoutJS](http://knockoutjs.com) ViewModels (separated by namespaces).
  Compatible with the global namespace as well (standard global 'data-bind' ViewModel).
  
# Download

  - [knockout.namespaces-latest.js](https://github.com/hunterloftis/knockout.namespaces/blob/master/build/output/knockout.namespaces-latest.js)
  - [knockout.namespaces-latest.debug](https://github.com/hunterloftis/knockout.namespaces/blob/master/build/output/knockout.namespaces-latest.debug.js)

# Try

    $ git clone git://github.com/hunterloftis/knockout.namespaces.git
    $ cd knockout.namespaces/examples
    $ open simple.html

# Code

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

# Templates

  Namespaced templates are a work-in-progress. Check out /examples/templates.html.
  They work for common use cases, but such actions as nesting multiple templates
  of different namespaces together may have unpredictable results. I would love
  some help coming up with a solution.
  
# Related

  - [Initial pull request](https://github.com/SteveSanderson/knockout/pull/74)
  - [Google groups discussion](http://groups.google.com/group/knockoutjs/browse_thread/thread/a2a5489c1e4c40de)
  - [Initial groups RFC](http://groups.google.com/group/knockoutjs/browse_thread/thread/5f3802217f896d74/96b37601840a23be?lnk=gst&q=namespaces#96b37601840a23be)