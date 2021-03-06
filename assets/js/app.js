function changeSection(sectionName) {
	var name = '#' + sectionName;
		$('html, body').animate({
			scrollTop: $(name).offset().top
		}, 1200);
	window.location.hash = name;
}

$(window).load(function(){
	var env = environment(),
		actual = 1;

	$(".typing .texts").typed({
        strings: env.about,
        contentType: 'html',
        typeSpeed: 20,
        startDelay: 1000,
        backDelay: 1000
      });
	$('.about').on('click', function(event) {
		event.preventDefault();
		changeSection('about');
		return false;
	});

	$('.places').on('click', function(event) {
		event.preventDefault();
		changeSection('places');
		return false;
	});

	$('.talk').on('click', function(event) {
		event.preventDefault();
		changeSection('contact');
		$('#contact-form [name=email]')[0].focus();
		return false;
	});

	$('.jobs').on('click', function(event) {
		event.preventDefault();
		changeSection('jobs');
		return false;
	});

	$('.form').submit(function() {
		var url = 'http://api.staging.onyo.com/v1/web/message',
			email = $('#contact-form [name=email]')[0].value,
			phone = $('#contact-form [name=phone]')[0].value,
			message = $('#contact-form [name=message]')[0].value;

		var formData = {email: email, phone: phone, message: message};
		$.ajax({
			method: 'POST',
			url: url,
			data: formData,
			success: function(response) {
				$('#contact-form [name=email]')[0].value = '';
				$('#contact-form [name=phone]')[0].value = '';
				$('#contact-form [name=message]')[0].value = '';
				$('.errorResponse').hide();
				$('.emailResponse').fadeIn();
			},
			error: function(request, textStatus, error) {
				$('.emailResponse').hide();
				$('.errorResponse').fadeIn();
			}
		});

		return false;
	});

	$('.nav').on('click', function(event) {
		event.preventDefault();
		var toggle = document.querySelector('.nav-toggle');
		toggle.classList.toggle( "active" );

		if ($('.nav-toggle').hasClass('active')) {
			$('.login').fadeOut(300);
			$('#menu').fadeIn(300, function(){
				$('#menu').animate({
					'top': '0px'
				}, 500);
			});
		} else {
			$('#menu').fadeIn(300, function(){
				$('#menu').animate({
					'top': '-80px'
				}, 500, function(){
					$('.login').fadeIn(400);
				});
			});
		}
	});

	$('.flexCity').on('click', function(event) {
		event.preventDefault();
		var paragraphsForm 	= $('#contact p'),
		 	paragraphsBlock = $(this).children('.content').children('p');

		$(this).children('content').fadeIn();
		$(this).children('emailResponse').fadeOut();

		$('#contact h2').text($(this).data('city'));
		$(paragraphsForm[0]).text($(paragraphsBlock[0]).text());
		$(paragraphsForm[1]).text($(paragraphsBlock[1]).text());

		$('html, body').animate({
        	scrollTop: $("#contact").offset().top
    	}, 600);
	});

	/* Slide Function */
	var slide = setInterval(function() {
		var image 		= $('#slide').children('.background').children('img'),
			title 		= $('#slide .content h4'),
			description = $('#slide .content p'),
			controls	= $('#slideCntrl div'),
			texts 		= env.title;

		++actual;

		if (actual <= controls.length) {
			var url = 'assets/images/slide_home_' + actual + '.jpg';

			if (env.lang != 'en') {
				url = '../assets/images/slide_home_' + actual + '.jpg';
			}

			$(image).fadeOut(700, function() {
				$(this).attr('src', url);
				title.text(texts[actual - 1].title);
				description.text(texts[actual - 1].description);
				controls.removeClass('active');
				$(controls[actual - 1]).addClass('active');
			}).fadeIn(600);
		} else {
			actual = 0;
		}
	}, 4000);
});
