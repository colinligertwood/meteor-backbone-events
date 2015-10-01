Package.describe({
  name: 'colin:backbone-events',
  version: '1.2.3',
  summary: 'Backbone.Events: A module that can be mixed in to *any object* in order to provide it with a custom event channel.',
  git: 'https://github.com/colinligertwood/meteor-backbone-events.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.0');
  api.addFiles('backbone.events.js');
  api.export('Events', ['server','client']);
});

