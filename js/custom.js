(function($){

	jQuery(document).ready(function(){

		$('.main-slide-active').owlCarousel({
		    loop:true,
		    dots: true,
		    nav:true,
		    navText: ['<i class="far fa-angle-left">', '<i class="far fa-angle-right">'],
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        1000:{
		            items:1
		        }
		    }
		});


		$('.project-active').owlCarousel({
		    loop:true,
		    dots: false,
		    nav:true,
		    navText: ['<i class="far fa-angle-left">', '<i class="far fa-angle-right">'],
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:4
		        }
		    }
		});



		$('.image-popup-vertical-fit').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			mainClass: 'mfp-img-mobile',
			image: {
				verticalFit: true
			}
			
		});

		$('.image-popup-fit-width').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			image: {
				verticalFit: false
			}
		});

		$('.image-popup-no-margins').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			closeBtnInside: false,
			fixedContentPos: true,
			mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
			image: {
				verticalFit: true
			},
			zoom: {
				enabled: true,
				duration: 300 // don't foget to change the duration also in CSS
			}
		});


		$('.popup-video').magnificPopup({type:'iframe'});

		// latest blog
		$('.blog-active').owlCarousel({
		    loop:true,
		    dots: false,
		    nav: true,
		    navText: ['<i class="far fa-angle-left">', '<i class="far fa-angle-right">'],
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        1000:{
		            items:1
		        }
		    }
		});
		
		// testimonial-active
		$('.testimonial-active').owlCarousel({
		    loop:true,
		    dots: false,
		    nav: true,
		    navText: ['<i class="far fa-angle-left">', '<i class="far fa-angle-right">'],
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        800:{
		            items:1
		        },
		        1000:{
		            items:1
		        }
		    }
		});

		// brand logo
		$('.brand-active').owlCarousel({
		    loop:true,
		    dots: false,
		    nav: false,
		    navText: ['<i class="far fa-angle-left">', '<i class="far fa-angle-right">'],
		    margin: 50,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        992:{
		            items:5
		        },
		        1201:{
		            items:6
		        }
		    }
		});






		

	});


}(jQuery));