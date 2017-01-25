'use strict';

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

//Stephanie created renderFeedback
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
