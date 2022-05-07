import { openDB } from 'idb';

const DB_NAME = 'resume-builder';
const DB_VERSION = 1;

async function connect() {
  return await openDB(DB_NAME, DB_VERSION);
}

const database = {
  connect,
};

export default database;
