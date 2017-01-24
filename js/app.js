'use strict';

var i = 0;

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
