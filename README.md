## Synopsis

The excellent Backbone.Events event aggregation system packaged for Meteor.js.

## Code Example

```
  obj = {};
  _.extend(obj, Events);
  obj.on('customEvent', function(){
      console.log('customEvent fired!');
  })
  obj.trigger('customEvent');
```
## Motivation

After migrating from Backbone.js to Meteor.js, the one thing I missed most about Backbone was the ability to define custom events. This package solves that problem by bringing Backbone.js's own event aggregator into Meteor.js.

## Installation

```
meteor add colinligertwood:backbone-events
```

## API Reference

http://backbonejs.org/#Events

## License

This package may be redistributed under the MIT license.
