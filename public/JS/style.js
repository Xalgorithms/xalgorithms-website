// virtues hover calls
showinfo("#smart", "#smartedge");
showinfo("#uncupled", "#uncouplednet");
showinfo("#freedom", "#freedomnet");
showinfo("#construction", "#opensourcenetnet");
squiwtchb();
squiwtcha();
squiwtchc();

/*
showpos(".positionframe", "#smallnum", #smallnum);
*/
// scroll function

var element_position = $('#trig').offset().top;
var screen_height = $(window).height();
var activation_offset = 0.5;//determines how far up the the page the element needs to be before triggering the function
var activation_point = element_position - (screen_height * activation_offset);
var max_scroll_height = $('body').height() - screen_height - 5;//-5 for a little bit of buffer

//Does something when user scrolls to it OR
//Does it when user has reached the bottom of the page and hasn't triggered the function yet
$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;

    var element_in_view = y_scroll_pos > activation_point;
    var has_reached_bottom_of_page = max_scroll_height <= y_scroll_pos && !element_in_view;

    if(element_in_view || has_reached_bottom_of_page) {
      $("#smallnum").addClass("showposit");
      $("#activenet").addClass("showposita");
    }
});


// hover function

function showinfo(parent, info) {
  var dop = $( info );
  var car = $( info ).find(".carrottop");
  $( parent ).click(function() {
      if(dop.hasClass("hover")) {
        dop.removeClass("hover");
      } else {
        dop.addClass("hover");
        car.addClass("twist");
      }
    })
  };

/*

function showpos(parent, info, infomo) {
  $( parent )
    .mouseenter(function() {
      $( info ).addClass("showposit");
      $( infomo ).addClass("showposita");
    })
    .mouseleave(function() {
      $( info ).removeClass("showposit");
      $( infomo ).removeClass("showposita");
    });
}
*/
// perspective functiona

!(function ($doc, $win) {
	var screenWidth = $win.screen.width / 2,
		screenHeight = $win.screen.height / 2,
		$elems = $doc.getElementsByClassName("elem"),
		validPropertyPrefix = '',
		otherProperty = 'perspective(1000px)',
		elemStyle = $elems[0].style;

	if(typeof elemStyle.webkitTransform == 'string') {
		validPropertyPrefix = 'webkitTransform';
	} else if (typeof elemStyle.MozTransform == 'string') {
		validPropertyPrefix = 'MozTransform';
	}

	$doc.addEventListener('mousemove', function (e) {
		var centroX = e.clientX - screenWidth,
			centroY = screenHeight - (e.clientY + 13),
			degX = centroX * 0.04,
			degY = centroY * 0.02,
			$elem

		for (var i = 0; i < $elems.length; i++) {
   			$elem = $elems[i];
			$elem.style[validPropertyPrefix] = otherProperty + 'rotateY('+ degX +'deg)  rotateX('+ degY +'deg)';
		};
	});
})(document, window);

// carousel functiona

/*
$(function squiwtcha() {
    $(".heroa").attr('id', '#activate');
});
*/


function squiwtchb() {
  $(".component").click(function() {
    console.log("hello");
    $(".herob").attr("id", "activate");
    $(".heroa").removeAttr("id");
    $(".heroc").removeAttr("id");
  });
}

function squiwtcha() {
  $(".operate").click(function() {
    console.log("hello");
    $(".heroa").attr("id", "activate");
    $(".herob").removeAttr("id");
    $(".heroc").removeAttr("id");
  });
}

function squiwtchc() {
  $(".software").click(function() {
    console.log("hello");
    $(".heroc").attr("id", "activate");
    $(".herob").removeAttr("id");
    $(".heroa").removeAttr("id");
  });
}
