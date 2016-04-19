var init = function() {
  var box = $('.box'),
      boxContainer = $('.box-container'),
      showPanelButtons = $('ul#options li button'),

      onButtonClick = function( event ){
        var currentState = box.attr('class').split(' ')[1];
        var current;
        box.removeClass( currentState );
        current = $(event.target).attr('class').split(' ')[0];
        box.addClass( current );
      }

      onBoxClick = function( event ){
          var currentState = box.attr('class').split(' ')[1];
          var current;
          box.removeClass( currentState );
          current = nextState(currentState);
          box.addClass( current );
          showPanelButtons.removeClass('current');
          $('ul#options li button.'+current).addClass('current');
      };

  boxContainer.bind( 'click', onBoxClick);
  showPanelButtons.bind( 'click', onButtonClick);


  function nextState(state) {
      var arrOfState = ['show-perspective', 'show-front', 'show-back', 'show-right', 'show-left', 'show-top', 'show-bottom'];
      var current = arrOfState.findIndex(function checkIndex(item) {
          return item == state;
      });
      if(current == arrOfState.length - 1) {
          return arrOfState[0];
      } else {
          return arrOfState[current+1];
      }
  }

};

window.addEventListener( 'DOMContentLoaded', init, false);

// NAVBAR BOX
$('button').click(function(){
  $('ul#options li button').removeClass('current');
  $(this).addClass('current');
});
