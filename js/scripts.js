jQuery(document).ready(function($) {

//////////////////////////////////////////////////
// GLOBAL VARIABLES


//////////////////////////////////////////////////
// FUNCTIONS

////////////////////////////////////////////
/////     FACEBOOK COMMENTS FOR POSTS
///////////////////////////////////////////////

(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=85034356421&version=v2.0";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// END FACEBOOK COMMENTS FOR POSTS

function checkIfActiveClass (thisEntry) {
  // $activeList = $('a.filter').value();
  // // $.each($activeList, function(index, val) {
  // //   if (val='active') {
  // //     $this.
  // //   }
  // // });
  // $this.addClass('active');
  $('ul.filtering-nav li a.filter').each(function(index, el) {
    if (thisEntry.is('.active')) {
      thisEntry.removeClass('active');
    };
  });
}

// Use return false to break out of each() loops early
// $('button.ex4').click(function(event) {
//   $('div.ex4').each(function(index, el) {
//     // element == this
//     $(this).css('backgroundColor', 'yellow');

//     if ($(this).is('#stop')) {
//       $('span').text("Stopped at div index #" + index);
//       return false; // this breaks the loop once we find the correct span
//     };
//   });
// });

//////////////////////////////////////////////////
// EXECUTION CODE

////////////////////////////////////////////
/////     IMAGE SLIDER FOR HOME WITH CAROUSEL
///////////////////////////////////////////////

$('.bxslider').bxSlider({
	controls: true,
	auto: true,
	autoControls: true,
	slideWidth: 702
});

// END IMAGE SLIDER FOR HOME WITH CAROUSEL

////////////////////////////////////////////
/////     LATEST WORKS IMAGE SLIDER
///////////////////////////////////////////////

$('.bxsliderLW').bxSlider({
  minSlides: 3,
  maxSlides: 4,
  slideWidth: 161,
  slideMargin: 10,
  auto: true,
  autoControls: true
  // nextSelector: '.prev',
  // prevSelector: '.next'
  // nextText: 'Onward →',
  // prevText: '← Go back'
});

// END LATEST WORKS IMAGE SLIDER

////////////////////////////////////////////
/////     PORTFOLIO FILTER
///////////////////////////////////////////////

// so far haven't gotten the fancybox method to work

// // fancybox
// $(".fancybox").fancybox({
//     modal: true, // disable regular nav and close buttons
//     // add buttons helper (requires buttons helper js and css files)
//     helpers: {
//         buttons: {}
//     } 
// });

// // filter selector
// $(".filter").on("click", function () {
//     var $this = $(this);
//     // if we click the active tab, do nothing
//     if ( !$this.hasClass("active") ) {
//         $(".filter").removeClass("active");
//         $this.addClass("active"); // set the active tab
//         // get the data-rel value from selected tab and set as filter
//         var $filter = $this.data("rel"); 
//         // if we select view all, return to initial settings and show all
//         $filter == 'all' ? 
//             $(".fancybox")
//             .attr("data-fancybox-group", "gallery")
//             .not(":visible")
//             .fadeIn() 
//         : // otherwise
//             $(".fancybox")
//             .fadeOut(0)
//             .filter(function () {
//                 // set data-filter value as the data-rel value of selected tab
//                 return $(this).data("filter") == $filter; 
//             })
//             // set data-fancybox-group and show filtered elements
//             .attr("data-fancybox-group", $filter)
//             .fadeIn(1000); 
//     } // if
// }); // on

$("a.all").on('click', function() {
  // if (!$(this).hasClass('active')) {
  //   // $('a.filter').removeClass('active');
  //   $(this).addClass('active');
  // }
  // checkIfActiveClass($(this));
  $(this).toggleClass('active');
  $('.portWeb').show("fast");
  $('.portPhoto').show("fast");
  $('.portGraphic').show("fast");
  $('.portVideo').show("fast");
});

$("a.web").on('click', function() {
  // if (!$this.hasClass('active')) {
  //   $('.filter').removeClass('active');
  //   $this.addClass('active');
  // }
  // checkIfActiveClass($(this));
  $(this).toggleClass('.active');
  $('.portWeb').show("fast");
  $('.portPhoto').hide("fast");
  $('.portGraphic').hide("fast");
  $('.portVideo').hide("fast");
});

$("a.photo").on('click', function() {
  // if (!$this.hasClass('active')) {
  //   $('.filter').removeClass('active');
  //   $this.addClass('active');
  // }
  // checkIfActiveClass($(this));
  $(this).toggleClass('active');
  $('.portWeb').hide("fast");
  $('.portPhoto').show("fast");
  $('.portGraphic').hide("fast");
  $('.portVideo').hide("fast");
});

$("a.graphic").on('click', function() {
  // if (!$this.hasClass('active')) {
  //   $('.filter').removeClass('active');
  //   $this.addClass('active');
  // }
  // checkIfActiveClass($(this));
  $(this).toggleClass('active');
  $('.portWeb').hide("fast");
  $('.portPhoto').hide("fast");
  $('.portGraphic').show("fast");
  $('.portVideo').hide("fast");
});

$("a.video").on('click', function() {
  // if (!$this.hasClass('active')) {
  //   $('.filter').removeClass('active');
  //   $this.addClass('active');
  // }
  // checkIfActiveClass($(this));
  $(this).toggleClass('active');
  $('.portWeb').hide("fast");
  $('.portPhoto').hide("fast");
  $('.portGraphic').hide("fast");
  $('.portVideo').show("fast");
});


// END PORTFOLIO FILTER

// $('a.filter').each(function(index, val) {
//   console.log(index,val);
// });

//////////////////////////////////////////////////

});  //end doc.onready function
