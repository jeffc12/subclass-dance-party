$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    
    window.dancers.push(dancer);
    var $dancerNode = dancer.$node.addClass(dancerMakerFunctionName);
    $('body').append($dancerNode);

    $('.dancer').hover(
      (function() {$(this).css('transform', 'rotate(180deg)');}),
      (function() {$(this).css('transform', 'rotate(360deg)');})
    );
  });

  $('.LineUpDancers').on('click',function(event) {
    window.dancers.forEach(function(index,i) {
      index.lineUp();
    });
  });

  $('.goBack').on('click',function(event) {
    window.dancers.forEach(function(index) {
      index.setPosition();
    });
  });
});


// Interact 
//     $('.interact').on(function() {

//     window.dancers.forEach(function(index,i) {
      
//       console.log(window.dancers[])
//       var c1 = (index.left*window.dancers[i+1].left) +(index.top*window.dancers[i+1]);

//       c1 = Math.sqrt(c1);
//       storage.push([index,window.dancers[i+1],c1]);

//       index.setPosition();
//       console.log('after',index.$node.left);
//     });


//     storage.sort(function(a,b) {

//       return a[1] - b[1];
//     })

//     var char1 =storage[0][0];
//     var char2 = storage[1][0];


//   });




