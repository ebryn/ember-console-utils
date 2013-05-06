# ember-console-utils

These are some super handy utilities for quickly getting the view, controller, or model for an inspected element in modern browsers. Has only been tested in Chrome/Safari currently.

There is a little known (from my experience) feature that when you right-click an element in your browser and choose "Inspect Element" that a reference to that element is injected into the console's scope. You can access the inspected element as `$0`. There is also a history kept, so `$1`, `$2`, etc. also can be used.

When you include ember-console-utils in your app (which should probably only be done during development), you can quickly inspect any element and call `$0.view()` to walk up the DOM tree and find the nearest Ember view. There are also `$0.controller()`, `$0.template()`, and `$0.model()` methods.

# Have more ideas?

Get in touch! :)

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/ebryn/ember-console-utils/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
