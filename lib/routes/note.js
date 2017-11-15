'use strict';


const Note = require ('../model/note.js');
const router = require ('../lib/router.js');


let notes = [];


let sendStatus = (res, status) => {
  res.writeHead (status);
  res.end ();
};


let sendJson = (res, status, data) => {
  res.writeHead (status, {'Content-Type' : 'application/json'});
  res.end (JSON.stringify (data));
};



router.post ('/api/notes', (req, res) => {
  if (! req.body.title) {
    return sendStatus (res, 400, 'error title missing');
  }

  if (! req.body.content) {
    return sendStatus (res, 400, 'error content missing');
  }

  let note = new Note (req.body);
  notes.push (note);

  sendJSON (res, 200, note);
});


router.get ('/api/notes', (req, res) => {
  let id = req.url && req.url.query && req.url.query.id;

  if (id) {
    let note = notes.filter ((note) => {
      return note.id === id;
    });

    if (note) sendJSON (res, 200, note);
    else sendStatus (res, 400, 'error note invalid');

  } else {

    let showAll = {notes : notes};
    sendJSON (res, 200, showAll);
  }};



router.put ('/api/notes', function (req, res) {
    if (! req.body.title) {
      return sendStatus (res, 400, 'error title missing');
      if (! req.body.content) {
        return sendStatus (res, 400, 'error content missing');

        let id = req.url && req.url.query && req.url.query.id;

        if (id) {
          notes = notes.filter ((note => {
            return note.id !== id;

          });

          let updateNote = new Note (req.body);
          notes.push (updatedNote);
          sendJSON (res, 200, 'updatedNote');

        } else {
          sendStatus (res, 400, 'error note invalid');
        })
      };



router.delete ('/api/notes', function (req, res) {
    if (! err) {
      return res.sendStatus (res, 204, 'deleted');
    } else {
      return res.sendStatus (res, 404, 'error user not deleted');
    });
  }};
}};
