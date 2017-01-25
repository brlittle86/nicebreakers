'use strict';

//Stephanie created nameSubmissionEvent
function nameSubmissionEvent(event) {
  event.preventDefault();
  event.stopPropagation();
  storedUserName = event.target.username.value; // added username to local storage/global variable by Brandon
  localStorage.storedUserName = JSON.stringify(storedUserName);
  removeNameSubmissionForm();
  renderScenario(i);
}

//nameSubmission event listener written by Stephanie
var nameSubmission = document.getElementById('form');
if (nameSubmission !== null){
  nameSubmission.addEventListener('submit', nameSubmissionEvent, false);
}

// Stephanie Typed render Name submission and remove it function
function renderNameSubmissionForm(){
  if (document.getElementById('content') !== null) {
    var sectionEl = document.getElementById('content');
    var formEl = document.createElement('form');
    formEl.setAttribute('id', 'form');
    var labelEl = document.createElement('label');
    labelEl.setAttribute('name', 'username');
    labelEl.textContent = 'Enter your name to get started:';
    console.log('label content' + labelEl.textContent);
    var inputEl = document.createElement('input');
    inputEl.setAttribute('name', 'username');
    inputEl.setAttribute('class', 'input');
    inputEl.setAttribute('type', 'text');
    inputEl.setAttribute('required', 'required');
    console.log('input content ran');
    var submitEl = document.createElement('button');
    submitEl.setAttribute('type', 'submit');
    submitEl.textContent = 'Go!';
    console.log('submit content ran' + submitEl.textContent);
    formEl.appendChild(labelEl);
    formEl.appendChild(inputEl);
    formEl.appendChild(submitEl);
    sectionEl.appendChild(formEl);
  } else {
    console.log('Not this page.');
  }

}

function removeNameSubmissionForm(){
  var sectionEl = document.getElementById('content');
  var formEl = document.getElementById('form');
  sectionEl.removeChild(formEl);
}
