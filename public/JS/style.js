squiwtchb();
squiwtcha();
squiwtchc();


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
