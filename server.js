'use strict';


require ('dotenv').config ();
require ('./lib/_server.js').start(process.env.PORT || 3000);

//server.start (process.env.PORT)
//.then (console.log);
//.catch (console.log);
