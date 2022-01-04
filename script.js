'use strict';

let xhr = new XMLHttpRequest();
xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({user: 'Vlad', age: 33, role: 'developer'}));

xhr.onload = function() {
    console.log(`Загружено: ${xhr.status} ${xhr.response}`);
  };
  
  xhr.onerror = function() {
    console.log(`Ошибка соединения`);
  };
  
  xhr.onprogress = function(event) { 
    console.log(`Загружено ${event.loaded} из ${event.total}`);
  };