'use strict';



const http = require ('http');
const router = require ('./router');
const note = require ('./routes/note.js');


let isRunning = false;

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
