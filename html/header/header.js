	$(document).ready(function(){
			  $('.slide-container').slick({
				  draggable: true,
				  autoplay: true, /* this is the new line */
				  autoplaySpeed: 2000,
				  infinite: true,
				  slidesToShow: 1,
				  slidesToScroll: 1,
				  touchThreshold: 1000,
			  });
			});