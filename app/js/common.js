$(function() {

	$('#my-menu').mmenu({
		extensions: ['widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black', 'position-right'],
		navbar: {
			title: '<img src="img/2.logo.svg" alt="Салон красоты Смитлер">'
		},
		offCanvas: {
			position: 'right'
		}
	});


	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function(){
		$('.hamburger').addClass('is-active');
	}).bind('close:finish', function(){
		$('.hamburger').removeClass('is-active');
	});


	$('.carousel-services').on('initialized.owl.carousel', function(){
		setTimeout(function(){carouselService()
		},100);
	
	});

	$('.carousel-services').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-double-left" aria-hidden="true"></i>', '<i class="fa fa-angle-double-right" aria-hidden="true"></i>'],
		responsiveClass:true,
		dots: false,
		responsive: 
		{
			0:{
				items: 1
			},
			800:{
				items: 2
			},
			1100:{
				items: 3
			},
		}
	});


	$('.owl-carousel').find('.owl-nav').removeClass('disabled');
	$('.owl-carousel').on('changed.owl.carousel', function(event) {
	$(this).find('.owl-nav').removeClass('disabled');
	});
	function carouselService(){
		$('.carousel-services-item').each(function(){
			var ths= $(this),
			thsh = ths.find('.carousel-services-content').outerHeight();
			ths.find('.carousel-services-image').css('min-height',thsh)
		});
	}carouselService();
	$('.carousel-services-composition .h3').each(function(){
		var ths = $(this);
		ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'))
	});
	$('section .h2').each(function(){
		var ths = $(this);
		ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'))
	});

	function onResize(){
		$('.carousel-services-content').equalHeights();
	}onResize();
	window.onresize = function(){onResize()};
	$('select').selectize();

	//E-mail Ajax Send
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", 
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				// Done Functions
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

	$('.reviews').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		autoHeight: true
	});

	$('.partners').owlCarousel({
		loop: true,
		smartSpeed: 700,
		dots: false,
		nav: true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		responsiveClass:true,
		responsive: 
		{
			0:{
				items: 1
			},
			800:{
				items: 2
			},
			1000:{
				items: 3
			},
			1200:{
				items: 4
			},
		}
	});	

	$(window).scroll(function(){
		if($(this).scrollTop() > $(this).height()){
			$('.top').addClass('active');
		}else{
			$('.top').removeClass('active');	
		}
	});

	$('.top').click(function(){
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});
});

$(window).on('load', function(){
	$('.preloader').delay(1000).fadeOut('slow');
})
