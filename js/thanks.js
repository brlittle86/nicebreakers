'use strict';

//Luay created listener for next button
var nextButton = document.getElementById('next-form');
nextButton.addEventListener('click', nextButtonListener, false);
var resourcesButton = document.getElementById('thank-you');
resourcesButton.addEventListener('click', resourcesButtonListener, false);

//Luay created the Final Thank you note, Brandon added removal of scenario content
function thankYou() {
  var quizBlock = document.getElementById('quiz-block');
  quizBlock.parentElement.removeChild(quizBlock);
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

//Brandon created event handler for clicking the resources button
function resourcesButtonListener (event) {
  event.preventDefault();
  event.stopPropagation();
  location.href = '../html/resources.html';
}