'use strict';


process.env.PORT = 3000;
const superagent = require ('superagent');
const expect = require ('expect');



describe ('api/notes', function () {
  let noteId = ' ';

  before ((done) => {
    require ('../lib/_server').start ();
    done ();
  });

  after ((done) => {
    require ('../lib/_server').stop ();
    done ();
  });



describe ('POST /api/notes', () => {
  test ('should show 200', () => {
    return
    superagent.post ('http://localhost:3000/api/notes')
    .set ('Content-Type', 'application/json')
    .send ({
      title : 'NoteOne',
      content : 'first note',
    })

    .then (res => {
      expect (res.status).toEqual (200);
      expect (res.body.title).toEqual ('NoteOne');
      expect (res.body.content).toEqual ('first note');
      noteId = res.body.id;
    });

    done ();
  });


  it ('should show 200', () => {
    return
    superagent.post ('http://localhost:3000/api/notes')
    .set ('Content-Type', 'application/json')
    .send ({
      title : 'NoteTwo',
      content : 'second note',
    })

    .then (res => {
      expect (res.status).toEqual (200);
      expect (res.body.title).toEqual ('NoteTwo');
      expect (res.body.content).toEqual ('second note');
      noteId = res.body.id;
    });



  it ('should show 400', (done) => {
    return
    superagent.post ('http://localhost:3000/api/notes')
    .set ('Content-Type', 'application/json')
    .send ({
      title : 'lab 08 testing',
    })

    .then (res => {
      expect (res.status).toEqual (400);
      expect (res.body).toEqual ('error content missing');
    });

    done ();
  });


  it ('should return all', (done) => {
    return
    superagent.get ('http://localhost:3000/api/notes')
    .then (res => {
      expect (res.status).toEqual (200);
      expect (res.body).not.toBe (null);
    });

    done ();
  })


  it ('should show 200 if valid', (done) => {
    return
    superagent.get (`http://localhost:3000/api/notes?=${noteId}`)
    .then (res => {
      expect (res.status).toEqual (200);
    });

    done ();
  });



describe ('PUT / api/notes', () => {
  it ('should show 200 and update the note', (done) => {
    return
    superagent.post (`http://localhost:3000/api/notes?id=${noteId}`)
    .set ('Content-Type', 'application/json')
    .send ({
      title : 'NoteThree',
      content : 'third note',
    })

    .then (res => {
      expect (res.status).toEqual (200);
      expect (res.body.title).toEqual ('NoteThree');
      expect (res.body.content).toEqual ('third note');
    });

    done ();
  });



describe ('PATCH / api/notes', () => {
  it ('should show 200 and update note only', (done) => {
    return
    superagent.post (`http://localhost:3000/api/notes$id=${noteId}`)
    .set ('Content-Type', 'application/json')
    .send ({
      content : 'passed',
    })

    .then (res => {
      expect (res.status).toEqual (200);
      expect (res.body.title).toEqual ('NoteThree');
      expect (res.body.content).toEqual ('passed');
    });

    done ();
  });
});



describe ('DELETE / api/notes', () => {
  it ('should show 204 and delete target note', (done) => {
    return
    superagent.post (`http://localhost:3000/api/notes?id=${noteId}`)
    .then (res => {
      expect (res.status).toEqual (204);
      expect (res.message).toEqual ('error missing content');
    });

    done ();
  });
});
});
});
});
});
