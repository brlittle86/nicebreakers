'use strict';

//Stephanie created nameSubmissionEvent
function nameSubmissionEvent(event) {
  event.preventDefault();
  event.stopPropagation();
  storedUserName = event.target.username.value; // added username to local storage/global variable by Brandon
  localStorage.storedUserName = JSON.stringify(storedUserName);
  removeNameSubmissionForm();
  renderScenario(i);
}
