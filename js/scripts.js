jQuery(document).ready(function($) {

//////////////////////////////////////////////////
// GLOBAL VARIABLES


//////////////////////////////////////////////////
// FUNCTIONS

function changeFocusImage1 () {
  $('#contentFocusImage').hover(function() {
    $(this).attr('src', 'images/google-calendar.png');
  });

  $('#contentFocusImage').on('mouseleave', function() {
    $(this).attr('src', 'images/openskej-overlay.png');
  });
}

function changeFocusImage2 () {
  $('#contentFocusImage').hover(function() {
    $(this).attr('src', 'images/openskej-overlay.png');
  });

  $('#contentFocusImage').on('mouseleave', function() {
    $(this).attr('src', 'images/google-calendar.png');
  });
}

function changeImage1 () {
  $('#contentFocusImage').attr('src', 'images/openskej-overlay.png');
}

function changeImage2 () {
  $('#contentFocusImage').attr('src', 'images/google-calendar.png');
}

function changeImageOnTimer () {
  setTimeout(changeImage1, 8000);
  setTimeout(changeImage2, 16000);
}



//////////////////////////////////////////////////
// EXECUTION CODE

// changeFocusImage1(); 
// changeFocusImage2();
// changeImageOnTimer();
setInterval(changeImageOnTimer, 20000)

//////////////////////////////////////////////////

});  //end doc.onready function
