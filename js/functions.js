'use strict';

function renderNameSubmissionForm(){
  var sectionEl = document.getElementById('content');
  var formEl = document.createElement('form');
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
}
