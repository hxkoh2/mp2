// Write any custom javascript functions here
$(document).ready(function(){
	$('#navbar').addClass('resize-bigger');

	$('.carousel').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		dots: true,
		arrows: true,
	});

	$('#nav').slicknav({
		label: "",
	});

	$(window).on('scroll',
		function() {			
			var height = $(window).height() * 0.1;
			var nheight = $('#navbar').height();
			var story = $('#story')[0].getBoundingClientRect();
			var aboutus = $('#about-us')[0].getBoundingClientRect();
			var products = $('#products')[0].getBoundingClientRect();
			var projects = $('#projects')[0].getBoundingClientRect();
			var cause = $('#our-cause')[0].getBoundingClientRect();
			var contact = $('#contact-us')[0].getBoundingClientRect();
			if(story.top<=height && story.bottom >=height){
				$('#nav-story').css({'background-color':'rgba(43, 56, 86, 0.5)'});
				$('.slicknav_nav a[href=#story]').css({'background-color':'rgba(43, 56, 86, 0.5)'});
			}
			else {
				$('#nav-story').css({'background-color':''});
				$('.slicknav_nav a[href=#story]').css({'background-color':''});
			}
			if(aboutus.top<=height && aboutus.bottom >=height){
				$('#nav-about').css({'background-color':'rgba(43, 56, 86, 0.5)'});
				$('.slicknav_nav a[href=#about-us]').css({'background-color':'rgba(43, 56, 86, 0.5)'});
			}
			else {
				$('#nav-about').css({'background-color':''});
				$('.slicknav_nav a[href=#about-us]').css({'background-color':''});
			}
			if(products.top<=height && products.bottom >=height){
				$('#nav-products').css({'background-color':'rgba(43, 56, 86, 0.5)'});
				$('.slicknav_nav a[href=#products]').css({'background-color':'rgba(43, 56, 86, 0.5)'});
			}
			else {
				$('#nav-products').css({'background-color':''});
				$('.slicknav_nav a[href=#products]').css({'background-color':''});
			}
			if(projects.top<=height && projects.bottom >=height){
				$('#nav-projects').css({'background-color':'rgba(43, 56, 86, 0.5)'});
				$('.slicknav_nav a[href=#projects]').css({'background-color':'rgba(43, 56, 86, 0.5)'});
			}
			else {
				$('#nav-projects').css({'background-color':''});
				$('.slicknav_nav a[href=#projects]').css({'background-color':''});
			}
			if(cause.top<=height && cause.bottom >=height){
				$('#nav-cause').css({'background-color':'rgba(43, 56, 86, 0.5)'});
				$('.slicknav_nav a[href=#our-cause]').css({'background-color':'rgba(43, 56, 86, 0.5)'});
			}
			else {
				$('#nav-cause').css({'background-color':''});
				$('.slicknav_nav a[href=#our-cause]').css({'background-color':''});
			}
			if(story.top<=nheight+story.height/2){
				$('#navbar').addClass('resize-smaller').removeClass('resize-bigger');
				$('#navbar li').css({'font-size': '14pt'});
				$('#logo').css({'font-size': '20px'});
			}
			else {
				$('#navbar').addClass('resize-bigger').removeClass('resize-smaller');
				$('#navbar li').css({'font-size': '18pt'});
				$('#logo').css({'font-size': '30px'});
			}
		}
	);

	$('#nav-story').on('click',
		function () {
			$('html, body').animate({scrollTop:$('#story').offset().top}, 1000);
			return false;
		} 
	);

	$('#nav-about').on('click',
		function () {
			$('html, body').animate({scrollTop:$('#about-us').offset().top}, 1000);
			return false;
		} 
	);

	$('#nav-products').on('click',
		function () {
			$('html, body').animate({scrollTop:$('#products').offset().top}, 1000);
			return false;
		} 
	);

	$('#nav-projects').on('click',
		function () {
			$('html, body').animate({scrollTop:$('#projects').offset().top}, 1000);
			return false;
		} 
	);

	$('#nav-cause').on('click',
		function () {
			$('html, body').animate({scrollTop:$('#our-cause').offset().top}, 1000);
			return false;
		} 
	);

	$('#logo').on('click',
		function () {
			$('html, body').animate({scrollTop:$('#homepage').offset().top-70}, 1000);
			return false;
		} 
	);

	$('.slicknav_nav a').on('click',
		function () {
			var page = $(this).attr('href');
			$('html, body').animate({scrollTop:$(page).offset().top}, 1000);
			return false;
		}
	);
});