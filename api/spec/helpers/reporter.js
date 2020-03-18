var myReporter = {

  suiteStarted: function(result) {
    console.log('describe ' + result.fullName);
  },

  specDone: function(result) {
    console.log('Spec: ' + result.description + ' was ' + result.status);

    for(var i = 0; i < result.failedExpectations.length; i++) {
      console.log('Failure: ' + result.failedExpectations[i].message);
      console.log(result.failedExpectations[i].stack);
    }

    console.log('with' , result.passedExpectations.length, 'expectations');
  },

  suiteDone: function(result) {
    console.log('Suite: ' + result.description + ' was ' + result.status);
    for(var i = 0; i < result.failedExpectations.length; i++) {
      console.log('Suite ' + result.failedExpectations[i].message);
      console.log(result.failedExpectations[i].stack);
    }
  }
};
jasmine.getEnv().addReporter(myReporter);
