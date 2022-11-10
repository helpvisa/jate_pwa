import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log("PUT text data to the database");

  // create connection and specify version
  const db = await openDB('jate', 1);

  // create new transaction and specify its priveleges
  const tx = db.transaction('jate', 'readwrite');

  // open store
  const store = tx.objectStore('jate');

  // use .put() to update data in the store
  const request = store.put({ id: 1, content: content });

  // confirm request
  const result = await request;
  console.log('database updated', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log("GET text data from the database");

  // create connection
  const db = await openDB('jate', 1);

  // create new tx and specify privileges
  const tx = db.transaction('jate', 'readonly');

  // open store
  const store = tx.objectStore('jate');

  // use .get() to get data
  const request = store.getAll();

  // get confirmation
  const result = await request;
  console.log('result', result);
  return result; // return our retrieved data
};

initdb();
