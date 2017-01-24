'use strict';

//Stephanie created nameSubmissionEvent
function nameSubmissionEvent(event) {
  event.preventDefault();
  event.stopPropagation();
  storedUserName = event.target.username.value; // added username to local storage/global variable by Brandon
  localStorage.storedUserName = JSON.stringify(storedUserName);
  if (location.href !== 'quiz.html') { //this was a fun test by all of us. it redirects to the quiz page if they are not already there.
    location.href = 'quiz.html';
  };
  removeNameSubmissionForm();
  renderScenario(i);
}

// Stephanie created scenarioSubmissionEvent
// needs to be tested with feedback
function scenarioSubmissionEvent(event) {
  event.preventDefault();
  event.stopPropagation();
  renderFeedback(i);
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
