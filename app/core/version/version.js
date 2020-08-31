'use strict';

angular.module('tamere.version', [
  'tamere.version.interpolate-filter',
  'tamere.version.version-directive'
])

.value('version', '0.1');
