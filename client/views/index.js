Template.hello.helpers({
  signals: function() {
    return Signals.find();
  },
  signalsExist: function() {
    return Signals.direct.find().count() > 0 ? true : false;
  }
});

Template.hello.rendered = function() {
  Meteor.Swiper = new Swiper('.swiper-container', {
    hashnav: true,
    observer: true,
    pagination: '.swiper-pagination',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true
    }
  });
}
