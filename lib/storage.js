'use strict';


const fs = require ('fs-extra');


class Storage {
  constructor (db) {
    this.dbFile = db;
    fs.pathExists (this.dbFile)
    .then (exists => ! exists && fs.outputJSON (this.dbFile, {}));
  }


  getNoteID (id) {
    return new Promise ((resolve, reject) => {
      if (!id) {
        return reject ('error id required');
      }

      this.getAllNotes ()
      .then (notes => resolve (notes [id]))
      .catch (err => reject (err));
    });
  }


  saveNote (note) {
    return new Promise ((resolve, reject) => {
      .then (data => {
        data [note.id] = note;
        fs.outputFile (this.dbFile, JSON.stringify (data))
        .then (resolve (note))
        .catch (err => reject (err));
      });
    });
  }


  deleNote (id) {
    return new Promise ((resolve, reject) => {
      if (!id) {reject ('error missing id'); }
      .then (note => {
        if (note [id] => {
          if (note [id]) {
            delete note [id];
            fs.outputFile (this.dbFile, JSON.stringify (data))
            .then (resolve ())
            .catch (err => reject (err));
          }
        });
      });
    })
  }
};

module.exports (db) => {return new Storage (db); };
