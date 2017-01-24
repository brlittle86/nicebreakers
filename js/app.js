'use strict';

var i = 0;

renderNameSubmissionForm();

var nameSubmission = document.getElementById('form');
nameSubmission.addEventListener('submit', nameSubmissionEvent, false);

//Stephanie created event listener for scenarioSubmissionEvent
//Leave commented until scenarioSubmissionEvent function created
// var scenarioSubmission = document.getElementById('submit');
// scenarioSubmission.addEventListener('submit', scenarioSubmissionEvent, false);
