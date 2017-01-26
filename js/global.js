'use strict';

//Brandon created if/else for global i
//userIndex pulled from local storage if exists, else set index to 0
var i = localStorage.getItem('globalIndex');
if (i !== null) {
  JSON.parse(i);
} else {
  i = 0;
  console.log(i);
}

var storedUserName;
