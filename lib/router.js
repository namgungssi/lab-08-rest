'use strict';


const parserRequest = require ('./parse-request');


const routes = {
  GET : {};
  PUT : {};
  POST : {};
  PATCH : {};
  DELETE : {};
};


module.exports = {
  get : (uri, callback) => {
    routeHandler.GET [uri] = callback;
  },

  post : (uri, callback) => {
    routeHandler.POST [uri] = callback;
  },

  put : (uri, callback) => {
    routeHandler.PUT [uri] = callback;
  },

  patch : (uri, callback) => {
    routeHandler.PATCH [uri] = callback;
  },

  delete : (uri, callback) => {
    routeHandler.DELETE [uri] = callback;
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
