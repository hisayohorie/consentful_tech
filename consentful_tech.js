document.addEventListener('DOMContentLoaded',function(){

	var humburger = document.getElementById('humburger');
	var nav = document.querySelector('nav');
	var navClose = document.getElementById('humburger_close');

	var modalEvents = ['click', 'touchstart'];

	var about_this_form = document.getElementById('about_this_form');
	var form_modal = document.getElementById('form_modal');
	var form_close = document.querySelector('.form_modal_close');

  	$('nav a[href*="#"]:not([href="#"])').click(function(e) {
  		e.preventDefault();
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				target.focus(); // Setting focus
				if (target.is(":focus")){ // Checking if the target was focused
					return false;
				} else {
					target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
					target.focus(); // Setting focus
				};
				var baseLoc = location.pathname.split('#')[0];
				location = baseLoc + '#' + target.attr('id');
			}
		}
 	});

	for (var i = modalEvents.length - 1; i >= 0; i--) {
		var modalEvent = modalEvents[i];

		humburger.addEventListener(modalEvent, function(event){
 			toggleModal(event, nav, navClose, humburger);
		});

		navClose.addEventListener(modalEvent, function(event){
			toggleModal(event, nav, humburger, navClose);
		});


		about_this_form.addEventListener(modalEvent, function(event){
			// open form modal
			form_modal.style.display="block";
		})

		form_close.addEventListener(modalEvent, function(event){
			// close form modal
			form_modal.style.display="none";
		})

		}

	function toggleModal(event, modalContainer, iconToShow, iconToHide){
		if(event.handled === false) {
			return
		}
	    event.stopPropagation();
	    event.preventDefault();
	    event.handled = true;

		modalContainer.classList.toggle('modal_close');
		modalContainer.classList.toggle('modal_open');
		iconToHide.style.display="none";
		iconToShow.style.display="block";
	}
});