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
