var makeFadingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this,top, left, timeBetweenSteps);
};

makeFadingDancer.prototype = Object.create(makeDancer.prototype);
makeFadingDancer.prototype.constructor = makeFadingDancer;

// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function
makeFadingDancer.prototype.oldStep = makeDancer.prototype.step;

makeFadingDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.animate({height: "20px"}, 500);
};

