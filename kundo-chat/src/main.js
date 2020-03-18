define(function(require) {
   'use strict';

   var
      _          = require('underscore'),
      Component  = require('Component'),
      template   = require('/template/main');

   return Component.extend({

      template: template,

      filterState: function(state) {
         return _.extend({}, {
            orgId: state.orgId, 
            startText: state.startText,
            loadingText: state.loadingText,
            textColor: state.textColor,
            iconColor: state.iconColor,
            backgroundColor: state.backgroundColor,
            placement: state.placement,
            offset: state.offset
         });
      }
   });
});