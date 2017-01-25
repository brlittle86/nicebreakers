'use strict';

// Object ScenarioCreator Created by Luay
var scenariosArray = initializeScenarioObjects();
function ScenarioCreator (name, scenario, answerArray, feedbackArray, filepath) {
  this.name = name;
  this.scenario = scenario;
  this.answerArray = answerArray;
  this.feedbackArray = feedbackArray;
  this.filepath = filepath;
};

// function initializeScenarioObjects, as well as the scenarios themselves, written by Brandon
function initializeScenarioObjects () {
  return [
    new ScenarioCreator('Classroom', 'Today is the first day of a new class and you are not sure if you are in the right room. There is another person in the room, waiting for the instructor to arrive. Choose an action below that is closest to how you might approach that student.', [
      'Approach, say hello, and ask if this is the room for your class.',
      'Say aloud that you hope this class is a good one.',
      'Casually mention how confusing the building layout is.',
      'Tap them on the shoulder and ask if they belong here.'
    ], [
      'That is a great option! It is polite and personable, without being invasive.',
      'This might get their attention, but will not really ellicit a response.',
      'The person may begin talking to you, but they may not think you are actually talking to them.',
      'It is generally bad to touch someone you do not personally know. It is an invasion of their space and can easily get you into trouble.'
    ], '../references/classroom.jpg'),
    new ScenarioCreator('Office party', 'Your company is hosting a holiday party and you notice that a coworker is standing by themselves, watching other people talk. Choose how you might engage with that person from the options below.', [
      'Approach, put your arm around their shoulder and ask if they are having a good time.',
      'Call out to them and invite them to join you.',
      'Invite them to do a keg-stand.',
      'Smile and ask if you can join them.'
    ], [
      'That is not a good option, as you are invading their personal space and giving probably unwanted physical contact.',
      'If you are somewhat familiar with the person this may work, but be cautious: if they are not at all familiar with you, it may isolate them further.',
      'Even at a company holiday party, this is probably inappropriate. Putting the spotlight on them that way may turn the person off from talking to you, as well.',
      'This is a great way to engage with a person. It gives a shy person a chance to decline, does not invade personal space, and is totally appropriate.'
    ], '../references/officeparty.jpg'),
    new ScenarioCreator('New Acquaintance', 'You are talking with someone you have just met, and the conversation seems to be losing steam. You would like to keep the conversation going, so choose below how you might attempt to keep your new friend talking.', [
      'Inquire about one of their hobbies or interests.',
      'Try to tickle them. It works in The Sims, right?',
      'Tease them about their appearance.',
      'Talk about your political views.'
    ], [
      'That is a good way to get someone talking; Engaging with topics they are interested in.',
      'It is highly suggested that you never model any of your social interactions on The Sims.',
      'This is more likely to upset someone than result in a positive conversation. Until you are sure they will appreciate that kind of humor, assume they will not enjoy it.',
      'You can safely assume that nobody wishes to share their political views with someone they just met. Even long-time friends do not discuss politics, because of how divisive it can be.'
    ], '../references/newacquaintance.jpg'),
    new ScenarioCreator('Body Language', 'You and some mutual friends are talking with a group of other people you have not met before. You tell a joke and one person folds their arms and turns to their friend. How might you react to that action?', [
      'Get defensive, say they do not have a sense of humor.',
      'Apologize to the person and ask what about the joke was offensive, so that you can avoid that topic in the future.',
      'Carry on with the conversation as though nothing were different.',
      'Step away from the group, yelling about how you tell the best jokes. Your jokes are of the finest quality.'
    ], [
      'That is a poor option, as it alienates the person and faults them for feeling strongly about something.',
      'A good recovery; this option gives the person a genuine sense that you do not wish to be abrasive on purpose.',
      'The person may wish to never spend time around you in the future. You have unapologetically hurt them.',
      'That is a really quick way to make yourself look like a terrible human being.'
    ], '../references/bodylanguage.jpg'),
    new ScenarioCreator('Flirtation', 'You are speaking with an attractive and interesting person at a social event and they may be flirting with you, but you can not be absolutely certain. Assuming you are single, how might you react?', [
      'Ask if they are single.',
      'Try getting physically closer to them, or touch their arm or shoulder while speaking.',
      'Go in for the kiss.',
      'Ask if they are interested in spending time with you again in the near future.'
    ], [
      'This option is neutral. There are perhaps better ways to clarify the situation, but this method is just circuitous enough to avoid an awkward conversation.',
      'Risky move. You could ruin the mood and make friendly conversation awkward, or it may confirm the flirting, but this literally corners the person into reacting.',
      'Definitely the wrong action. Whether flirting or not, this is way too forward for someone you are not even on a date with.',
      'Good option. This gives the person a chance to clarify their intentions with you while keeping things friendly. They could suggest catching a movie, or they could suggest another social event.'
    ], '../references/flirtation.jpg'),
    new ScenarioCreator('Closing the Interaction', 'At a job interview, you are wrapping up and things have gone well. You and the interviewer are making small talk about the work environment and laughing about absurdities in your line of work. How would you go about ending the conversation?', [
      'Tell the interviewer that you are thankful for their time and do not wish to take up any more of it.',
      'Excuse yourself to the bathroom and then never come back.',
      'Suggest getting lunch with the interviewer.',
      'Stand and shuffle out of the room without saying anthing.'
    ], [
      'By telling the interviewer this, you are indicating that you are ready to leave while being polite and open. They may offer more conversation, so be prepared to accept or decline.',
      'Do not do that. That will ruin your chance at getting the job.',
      'That would be ill-advised and very unprofessional. This person is still only looking to hire you, not be your friend.',
      'This will give your interviewer a negative impression of your social skills. At least vocalize that you are ready to leave.'
    ], '../references/closinginteraction.jpg')
  ];
};
