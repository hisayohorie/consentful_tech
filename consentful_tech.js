document.addEventListener('DOMContentLoaded',function(){
	const humburger = document.getElementById('humburger');
	const nav = document.querySelector('.nav');
	const close = document.getElementById('humburger_close');

	const humburgerEvents = ['click', 'touchstart'];
	for (let i = humburgerEvents.length - 1; i >= 0; i--) {
		const humburgerEvent = humburgerEvents[i];
		humburger.addEventListener(humburgerEvent, function(){
			nav.classList.toggle('modal_close');
			nav.classList.toggle('modal_open');
			humburger.style.display="none";
			close.style.display="block";
		});
		close.addEventListener(humburgerEvent, function(){
			nav.classList.toggle('modal_close');
			nav.classList.toggle('modal_open');
			close.style.display= "none";
			humburger.style.display = "block";
			humburger.style.display = "grid";
		});
	}

});