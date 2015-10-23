Meteor.startup(function() {
  var signalsBlank = Signals.find().count() === 0;

  if (signalsBlank) {
    Signals.insert({title: 'Sweet'});
    Signals.insert({title: 'blip'});
    Signals.insert({title: 'It is 4am'});
  }
});
