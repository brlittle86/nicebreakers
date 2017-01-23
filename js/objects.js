'use strict';

// Object ScenarioCreator & instanceCreator Created by Luay
var scenarios = [];
function ScenarioCreator (name, scenario) {
  this.name = name;
  this.scenario = scenario;
  this.answerArray = [];
  this.feedbackArray = [];
};

function instanceCreator () {
  for (var i = 0; i < scenarios.length; i++) {
    scenarios[i] = new ScenarioCreator(name, scenario);
  }
}

instanceCreator();
