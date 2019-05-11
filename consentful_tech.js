document.addEventListener('DOMContentLoaded',function(){
	const humburger = document.getElementById('humburger');
	const nav = document.querySelector('nav');
	const navClose = document.getElementById('humburger_close');

	const modalEvents = ['click', 'touchstart'];

	const about_this_form = document.getElementById('about_this_form');
	const form_modal = document.getElementById('form_modal');
	const form_close = document.querySelector('.form_modal_close');


	for (let i = modalEvents.length - 1; i >= 0; i--) {
		const modalEvent = modalEvents[i];

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