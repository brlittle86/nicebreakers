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
} else {
  renderNameSubmissionForm();
};

//nameSubmission event listener written by Stephanie
var nameSubmission = document.getElementById('form');

nameSubmission.addEventListener('submit', nameSubmissionEvent, false);

//Stephanie created event listener for scenarioSubmissionEvent
var scenarioSubmission = document.getElementById('submit');
scenarioSubmission.addEventListener('submit', scenarioSubmissionEvent, false);

var nextButton = document.getElementById('next');
nextButton.addEventListener('click', nextButtonListener, false);
