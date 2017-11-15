'use strict';


const parserRequest = require ('./parse-request');
//let router = module.exports = exports {};
//router.routes = {};
let methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];


methods.forEach ((method) => {
  router.routes [ method.toUpperCase () ] = {};
  router [ method.toLowerCase () ] = function (pathname, callback) {
    router.routes [method.toUpperCase () ] [ pathname ] = callback;
  };
});


/*router.fourOhFour = function (req, res) {
  res.writeHead (404, {'Content-Type' : 'text / plain'});
  res.write ('error missing page');
  res.end ();
};
*/


module.exports = {
  get : (pathname, callback) => {
    route.GET [pathname] = callback;
  },

  post : (pathname, callback) => {
    route.POST [pathname] = callback;
  },

  put : (pathname, callback) => {
    route.PUT [pathname] = callback;
  },

  patch : (pathname, callback) => {
    route.PATCH [pathname] = callback;
  },

  delete : (pathname, callback) => {
    route.DELETE [pathname] = callback;
  },

  route : (req, res) => {
    parserRequest (req)
    .then ((req) => {

      let handler = routeHandler [req.method] [req.url.pathname];

      if (handler) {
        return handler (req, res);

      } else {

        console.log ('error', req.url.pathname);
        res.writeHead (404);
        res.end ();
        }
      })

      .catch ((err => {
        console.log ('error invalid request', err);
        res.writeHead (400);
        res.end ();
      });
    });
  };
