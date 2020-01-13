const fs = require('fs');

function readFile(name) {
  return new Promise((resolve, reject) => {
    fs.readFile(name, (err, content) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(content);
    });
  })
}

function readFileObservable(name) {
  return new Observable(subscriber => {
    fs.readFile(name, (err, content) => {
      if (err) {
        subscriber.error(err);
        subscriber.complete();
        return;
      }
      subscriber.next(content);
      subscriber.complete();
    });
  })
}

function click() {
  return new Observable(subscriber => {
    document.addEventListener('click', (e) => {
      subscriber.next(e);
    });
  })
}

function eztPromisszal(ez) {
  return new Promsie((resolve, reject) => {
    resolve(ez);
  })
}
