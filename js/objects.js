'use strict';

// Object ScenarioCreator Created by Luay
var scenariosArray = initializeScenarioObjects();
function ScenarioCreator (name, scenario, answerArray, feedbackArray) {
  this.name = name;
  this.scenario = scenario;
  this.answerArray = answerArray;
  this.feedbackArray = feedbackArray;
};

// function initializeScenarioObjects, as well as the scenarios themselves, written by Brandon
function initializeScenarioObjects () {
  return [
    new ScenarioCreator('Classroom', 'Today is the first day of a new class and you are not sure if you are in the right room. There is another person in the room, waiting for the instructor to arrive. Choose an action below that is closest to how you might approach that student.', [
      'Approach, say hello, and ask if this is the room for your class.'
    ], [
      'That is a great option! It is polite and personable, without being invasive.'
    ]),
    new ScenarioCreator('Office party', 'Your company is hosting a holiday party and you notice that a coworker is standing by themselves, watching other people talk. Choose how you might engage with that person from the options below.', [
      'Approach, put your arm around their shoulder and ask if they are having a good time.'
    ], [
      'That is not a good option, as you are invading their personal space and giving probably unwanted physical contact.'
    ]),
    new ScenarioCreator('New Acquaintance', 'You are talking with someone you have just met, and the conversation seems to be losing steam. You would like to keep the conversation going, so choose below how you might attempt to keep your new friend talking.', [
      'Inquire about one of their hobbies or interests.'
    ], [
      'That is a good way to get someone talking; Engaging with topics they are interested in.'
    ]),
    new ScenarioCreator('Body Language', 'You and some mutual friends are talking with a group of other people you have not met before. You tell a joke and one person folds their arms and turns to their friend. How might you react to that action?', [
      'Get defensive, say they do not have a sense of humor.'
    ], [
      'That is a poor option, as it alienates the person and faults them for feeling strongly about something.'
    ]),
    new ScenarioCreator('Flirtation', 'You are speaking with an attractive and interesting person at a social event and they may be flirting with you, but you can not be absolutely certain. Assuming you are single, how might you react?', [
      'Ask if they are single.'
    ], [
      'This option is neutral. There are perhaps better ways to clarify the situation, but this method is just circuitous enough to avoid an awkward conversation.'
    ]),
    new ScenarioCreator('Closing the Interaction', 'At a job interview, you are wrapping up and things have gone well. You and the interviewer are making small talk about the work environment and laughing about absurdities in your line of work. How would you go about ending the conversation?', [
      'Tell the interviewer that you are thankful for their time and do not wish to take up any more of it.'
    ], [
      'By telling the interviewer this, you are indicating that you are ready to leave while being polite and open. They may offer more conversation, so be prepared to accept or decline.'
    ])
  ];
};
