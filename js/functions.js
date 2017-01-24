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

//Stephanie created nameSubmissionEvent
function nameSubmissionEvent(event) {
  event.preventDefault();
  event.stopPropagation();
  storedUserName = event.target.username.value; // added username to local storage/global variable by Brandon
  localStorage.storedUserName = JSON.stringify(storedUserName);
  removeNameSubmissionForm();
  renderScenario(i);
}

//Luay created the Final Thank you note
function thankYou() {
  var thanks = document.getElementById('thank-you');
  thanks.textContent = 'Thank you for completing our little training exercise. If you would like more information, please click this button to take you to our resources page. ';
  var button = document.createElement('button');
  button.setAttribute('type', 'click');
  button.textContent = 'Resources!';
  thanks.appendChild(button);
  console.log('thank you note is running');
}

//Stephanie created renderFeedback
//NEEDS TO BE TESTED WITH ANSWERS
function renderFeedback(i) {
  if (event.target.id === 'render-answer-0'){
    var renderP = document.getElementById('render-feedback-0');
    answerEl.textContent = scenariosArray[i].answerArray[0];
  } else if (event.target.id === 'render-answer-1'){
    var renderP = document.getElementById('render-feedback-1');
    answerEl.textContent = scenariosArray[i].answerArray[1];
  } else if (event.target.id === 'render-answer-2'){
    var renderP = document.getElementById('render-feedback-2');
    answerEl.textContent = scenariosArray[i].answerArray[2];
  } else if (event.target.id === 'render-answer-3'){
    var renderP = document.getElementById('render-feedback-3');
    answerEl.textContent = scenariosArray[i].answerArray[3];
  }
  var submitEl = document.createElement('button');
  submitEl.setAttribute('id', 'next');
  submitEl.setAttribute('type', 'click');
  submitEl.textContent = 'Next';
  scenarioEl.appendChild(submitEl);
}
