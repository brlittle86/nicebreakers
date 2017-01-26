'use strict';

mainPageUserStorage();

//Brandon created nameSubmissionEventMain and mainPageUserStorage
function mainPageUserStorage(){
  storedUserName = localStorage.getItem('storedUserName');
  if (storedUserName !== null) {
    var parsedName = JSON.parse(storedUserName);
    var mainForm = document.getElementById('main-form').style.visibility = 'hidden';
    var mainWelcome = document.getElementById('name-section');
    var pEl = document.createElement('p');
    pEl.textContent = 'Welcome ' + parsedName + '!';
    mainWelcome.appendChild(pEl);
  } else {
    var nameSubmissionMain = document.getElementById('main-form');
    nameSubmissionMain.addEventListener('submit', nameSubmissionEventMain, false);
  };
}

function nameSubmissionEventMain(event) {
  event.preventDefault();
  event.stopPropagation();
  storedUserName = event.target.username.value; // added username to local storage/global variable by Brandon
  localStorage.storedUserName = JSON.stringify(storedUserName);
  location.href = 'html/quiz.html';
}
