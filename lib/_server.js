'use strict';


const http = require ('http');
const url = require ('url');


const router = require ('./lib/router');

router.get ('/', function (req, res) {
  res.writeHead (200, {'Content-Type' : 'text / plain'});
  res.write ('test get');
  res.end ();
});
//const note = require ('./routes/note.js');


router.post ('/', function (req, res) {
  res.writeHead (200, {'Content-Type' : 'text / plain'});
  res.write ('test post');
  res.end ();
});



router.patch ('/', function (req, res) {
  res.writeHead (200, {'Content-Type' : 'text / plain'});
  res.write ('test patch');
  res.end ();
});



const server = http.createServer (function (req, res) {
  req.url = url.parse (req.url);

  router.routes [ req.method ][ req.url.pathname ] || router.fourOhFour)
    (req, res);
});
//passing into req.method then url.pathname

server.listen (3000;);




/*let isRunning = false;

const app = http.createServer (router.route);


module.exports = {
  start : () => {

    return new Promise ((resolve, reject) => {
      if (! isRunning) {
        app.listen (process.env.PORT, (err) => {
          if (err)
            reject (err);

          } else {

            isRunning = true;
            resolve (`server is up and running on port : ${process.env.PORT}`));
          }
        });
      } else {
        reject ('server is running'));
      }
    });
  }
}
