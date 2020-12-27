'use strict'

function loadItems() {
  return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}


// main
loadItems()
  .then(items => {
    console.log(items);
    // displayItems(items);
    // setEventListener(items);
  })
  .catch(console.log);
