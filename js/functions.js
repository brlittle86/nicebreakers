'use strict';

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
  renderScenario(i);
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
  for (var j = 0; j < scenariosArray[i].answerArray.length; j++){
    var labelEl = document.getElementById('label-' + j);
    labelEl.textContent = scenariosArray[i].answerArray[j];
    console.log(labelEl.textContent);
  }
}

var answerZero = document.getElementById('input-0');
var answerOne = document.getElementById('input-1');
var answerTwo = document.getElementById('input-2');
var answerThree = document.getElementById('input-3');

function changeZeroInput (event){
  answerZero.checked = true;
  answerOne.checked = false;
  answerTwo.checked = false;
  answerThree.checked = false;
}

function changeOneInput (event){
  answerZero.checked = false;
  answerOne.checked = true;
  answerTwo.checked = false;
  answerThree.checked = false;
}

function changeTwoInput (event){
  answerZero.checked = false;
  answerOne.checked = false;
  answerTwo.checked = true;
  answerThree.checked = false;
}

function changeThreeInput (event){
  answerZero.checked = false;
  answerOne.checked = false;
  answerTwo.checked = false;
  answerThree.checked = true;
}

answerZero.addEventListener('change', changeZeroInput, false);
console.log('answerzero' + answerZero);

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
  var pEl = document.createElement('p');
  pEl.textContent = 'Thank you for completing our little training exercise. If you would like more information, please click this button to take you to our resources page. ';
  thanks.appendChild(pEl);
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
  if (i === (scenariosArray.length - 1)) {
    thankYou();
    localStorage.removeItem('globalIndex');
  } else {
    i++;
    localStorage.globalIndex = JSON.stringify(i);
    document.getElementById('input-0').checked = false;
    document.getElementById('input-1').checked = false;
    document.getElementById('input-2').checked = false;
    document.getElementById('input-3').checked = false;
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
  if (answerZero.checked === true){
    var renderP = document.getElementById('render-feedback');
    renderP.textContent = scenariosArray[i].feedbackArray[0];
    console.log('answerzero' + answerZero);
  } else if (answerOne.checked === true){
    var renderP = document.getElementById('render-feedback');
    renderP.textContent = scenariosArray[i].feedbackArray[1];
  } else if (answerTwo.checked === true){
    var renderP = document.getElementById('render-feedback');
    renderP.textContent = scenariosArray[i].feedbackArray[2];
  } else if (answerThree.checked === true){
    var renderP = document.getElementById('render-feedback');
    renderP.textContent = scenariosArray[i].feedbackArray[3];
  }
}

//Stephanie created removeFeedback
function removeFeedback(){
  console.log('remove feedback is running');
  var pEl = document.getElementById('render-feedback');
  pEl.textContent = '';
  console.log(pEl.textContent);
}
