(function() {
   'use strict';

   var 
      router  = require('router'),
      appData = require('appData'),
      properties = require('Properties');

   router.get('/', function(req, res) {
      res.render('/', {
         orgId: appData.get('orgId'),
         startText: appData.get('startText'),
         loadingText: appData.get('loadingText'),
         textColor: properties.get(appData.get('textColor'), 'htmlHexValue'),
         iconColor: properties.get(appData.get('iconColor'), 'htmlHexValue'),
         backgroundColor: properties.get(appData.get('backgroundColor'), 'htmlHexValue'),
         placement: appData.get('placement'),
         offset: appData.get('offset'),
      });
   });
}());