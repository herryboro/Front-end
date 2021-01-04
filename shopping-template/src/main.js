'use strict'

function loadItems() {
  return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}

// main
loadItems()
  .then(items => {
    displayItems(items);
    // setEventListener(items);
  })
  .catch(console.log);


function displayItems(items) {
  let li = document.querySelector('.items');
  li.innerHTML = items.map((item) => createHTMLString(item)).join('');
}

function createHTMLString(item) {
  return `
    <li class="item">
      <img src="${item.image}" alt="${item.type}" class="img_thumbnail">
      <span class="img_description">${item.gender}, ${item.size}</span>
    </li>
    `;
}

