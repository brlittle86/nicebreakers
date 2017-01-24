'use strict';
var answerZero;
var answerOne;
var answerTwo;
var answerThree;
var answerChosenZero = [];
var answerChosenOne = [];
var answerChosenTwo = [];
var answerChosenThree = [];

//userIndex pulled from local storage if exists, else set index to 0
var i = localStorage.getItem('globalIndex');
if (i !== null) {
  JSON.parse(i);
} else {
  var i = 0;
  console.log(i);
}

//userName pulled from local storage if exists, else write form for userName entry written by Brandon
var storedUserName = localStorage.getItem('storedUserName');
if (storedUserName !== null) {
  JSON.parse(storedUserName);
  // renderScenario(i);
} else {
  renderNameSubmissionForm();
};

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

// Luay Typed render Scenario function; Stephanie placed render answers section inside this function and added DOM for button
function renderScenario(i) {
  var scenarioEl = document.getElementById('scenario');
  scenarioEl.textContent = scenariosArray[i].scenario;
  var answerEl = document.getElementById('answers');
  for (var j = 0; j < scenariosArray[i].answerArray.length; j++){
    var labelEl = document.getElementById('label-' + j);
    labelEl.textContent = scenariosArray[i].answerArray[j];
    console.log(labelEl.textContent);
    answerEl.appendChild(labelEl);

  }
  scenarioEl.appendChild(answerEl);
}

var answerZero = document.getElementById('input-0');
var answerOne = document.getElementById('input-1');
var answerTwo = document.getElementById('input-2');
var answerThree = document.getElementById('input-3');

function changeZeroInput (event){
  answerChosenZero.push(document.getElementById('input-0'));
}

function changeOneInput (event){
  answerChosenOne.push(document.getElementById('input-1'));
}

function changeTwoInput (event){
  answerChosenTwo.push(document.getElementById('input-2'));
}

function changeThreeInput (event){
  answerChosenThree.push(document.getElementById('input-3'));
}

answerZero.addEventListener('change', changeZeroInput, false);

answerOne.addEventListener('change', changeOneInput, false);

answerTwo.addEventListener('change', changeTwoInput, false);

answerThree.addEventListener('change', changeThreeInput, false);

//Stephanie created event listener for scenarioSubmissionEvent
function scenarioSubmissionEvent(event) {
  event.preventDefault();
  event.stopPropagation();
  console.log('scenario submission is running');
  renderFeedback();
}

var scenarioSubmission = document.getElementById('scenario-form');
scenarioSubmission.addEventListener('submit', scenarioSubmissionEvent, false);
console.log(typeof(scenarioSubmission));

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
// LUAY re-write the scenario one we click on the Next button

function nextButtonListener (event) {
  event.preventDefault();
  event.stopPropagation();
  if (i === scenariosArray.length) {
    thankYou();
    localStorage.removeItem('globalIndex');
  } else {
    i++;
    localStorage.globalIndex = JSON.stringify(i);
    removeFeedback();
    renderScenario(i);
  }
}

var nextButton = document.getElementById('next-form');
nextButton.addEventListener('click', nextButtonListener, false);

//Stephanie created renderFeedback
//NEEDS TO BE TESTED WITH ANSWERS
function renderFeedback() {
  console.log('render feedback is running');
  if (answerChosenZero.length === 1){
    var renderP = document.getElementById('render-feedback-0');
    renderP.textContent = scenariosArray[i].feedbackArray[0];
    answerChosenZero = [];
  } else if (answerChosenOne.length === 1){
    var renderP = document.getElementById('render-feedback-1');
    renderP.textContent = scenariosArray[i].answerArray[1];
    answerChosenOne = [];
  } else if (answerChosenTwo.length === 1){
    var renderP = document.getElementById('render-feedback-2');
    renderP.textContent = scenariosArray[i].answerArray[2];
    answerChosenTwo = [];
  } else if (answerChosenThree.length === 1){
    var renderP = document.getElementById('render-feedback-3');
    renderP.textContent = scenariosArray[i].answerArray[3];
    answerChosenThree = [];
  }
}

//Stephanie created removeFeedback
function removeFeedback(){
  var pEl = document.getElementsByClassName('feedback');
  pEl.textContent = '';
}
