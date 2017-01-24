'use strict';
// Stephanie Typed render Name submission and remove it function
function renderNameSubmissionForm(){
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
}

function removeNameSubmissionForm(){
  var sectionEl = document.getElementById('content');
  var formEl = document.getElementById('form');
  sectionEl.removeChild(formEl);
}

// Luay Typed render Scenario function; Stephanie placed render answers section inside this function and added DOM for button
function renderScenario(i) {
  var scenarioEl = document.getElementById('scenario');
  scenarioEl.textContent = scenariosArray[i].scenario;
  var answerEl = document.getElementById('answers');
  for (var j = 0; j < 4;j++) {
    var renderP = document.getElementById('render-answer-' + j);
    answerEl.textContent = scenariosArray[i].answerArray[j];
  }
  var submitEl = document.createElement('button');
  submitEl.setAttribute('id', 'submit');
  submitEl.setAttribute('type', 'submit');
  submitEl.textContent = 'Submit Answer';
  scenarioEl.appendChild(submitEl);
}

//Stephanie created nameSubmissionFunc
function nameSubmissionFunc(event) {
  event.preventDefault();
  event.stopPropagation();
  removeNameSubmissionForm();
  renderScenario(i);
}
