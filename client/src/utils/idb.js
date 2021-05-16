let db;

const request = indexedDB.open('mind-decks', 1);

request.onupgradeneeded = e => {
  const db = e.target.result;

  console.log('onupgradeneeded');
  db.createObjectStore('decks_db', { autoIncrement: true });
};

request.onsuccess = e => {
  console.log('onsuccess');
  db = e.target.result;

  if (navigator.online) {
    // upload data
  }
};

request.onerror = e => console.log(e.target.errorCode);

function uploadTransactions() {
  // open transaction
  const transaction = db.transaction(["decks_db"], 'readwrite');

  const budgetObjectStore = transaction.objectStore("decks_db");

  const getAll = budgetObjectStore.getAll();

  getAll.onsuccess = function() {
    if (getAll.result.length > 0) {
      // upload the data and then clear the data from idb

      // open more transaction
      const transaction = db.transaction(["decks_db"], 'readwrite');
      const budgetObjectStore = transaction.objectStore('decks_db');
      budgetObjectStore.clear();

      alert('all transactions have been submitted!');
      window.location.reload();
    }
  }
}
