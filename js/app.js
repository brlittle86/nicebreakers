'use strict';

var i = 0;

renderNameSubmissionForm();

var nameSubmission = document.getElementById('form');
nameSubmission.addEventListener('submit', nameSubmissionFunc, false);
