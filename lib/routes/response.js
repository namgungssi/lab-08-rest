'use strict';


module.exports = (res) => {};


res.sendStatus = function (res, status, text) {
  res.writeHead (status);
  res.write (text);
  rest.end ();
  return;
};


res.sendJSON = function (res, status, data) {
  res.writeHead (status);
  res.write (JSON.stringify (data));
  res.end ();
  return;
};
