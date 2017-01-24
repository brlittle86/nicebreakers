// LUAY re-write the scenario one we click on the Next button
function nextButtonListener (event) {
  event.preventDefault();
  event.stopPropagation();
  if (i === scenariosArray.length) {
    thankYou();
  } else {
    i++;
    renderScenario(i);
  }
}
