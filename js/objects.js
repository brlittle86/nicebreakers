'use strict';

// Object ScenarioCreator Created by Luay
var scenariosArray = [];
function ScenarioCreator (name, scenario) {
  this.name = name;
  this.scenario = scenario;
  this.answerArray = [];
  this.feedbackArray = [];
};

// function initializeScenarioObjects written by Brandon
function initializeScenarioObjects () {
  return [
    new ScenarioCreator('Classroom', 'Today is the first day of a new class and you are not sure if you are in the right room. There is another person in the room, waiting for the instructor to arrive. Choose an action below that is closest to how you might approach that student.'),
    new ScenarioCreator('Office party', 'Your company is hosting a holiday party and you notice that a coworker is standing by themselves, watching other people talk. Choose how you might engage with that person from the options below.'),
    new ScenarioCreator('New Acquaintance', 'You are talking with someone you have just met, and the conversation seems to be losing steam. You would like to keep the conversation going, so choose below how you might attempt to keep your new friend talking.'),
    new ScenarioCreator('Body Language', 'You and some mutual friends are talking with a group of other people you have not met before. You tell a joke and one person folds their arms and turns to their friend. How might you react to that action?'),
    new ScenarioCreator('Flirtation', 'You are speaking with an attractive and interesting person at a social event and they may be flirting with you, but you can not be absolutely certain. Assuming you are single, how might you react?'),
    new ScenarioCreator('Closing the Interaction', 'At a job interview, you are wrapping up and things have gone well. You and the interviewer are making small talk about the work environment and laughing about absurdities in your line of work. How would you go about ending the conversation?')
  ];
};