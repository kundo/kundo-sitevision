/* Needed to get access to i18n() in index.html template */
(function() {
   const router = require('router');
   router.get('/', (req, res) => {
      res.render({});
   });
})();
