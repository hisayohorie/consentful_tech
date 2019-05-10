document.addEventListener('DOMContentLoaded',function(){
	const humburger = document.getElementById('humburger');
	const nav = document.querySelector('.nav');
	const close = document.getElementById('humburger_close');
	const h1 = document.querySelector('h1');

	const humburgerEvents = ['click', 'touchstart'];

	for (let i = humburgerEvents.length - 1; i >= 0; i--) {
		const humburgerEvent = humburgerEvents[i];
		humburger.addEventListener(humburgerEvent, function(event){
			if(event.handled === false) {
				return
			} 
	        event.stopPropagation();
	        event.preventDefault();
	        event.handled = true;
			console.log('hi')

			nav.classList.toggle('modal_close');
			nav.classList.toggle('modal_open');
			h1.classList.toggle('title_underline');
			humburger.style.display="none";
			close.style.display="block";
		});
		close.addEventListener(humburgerEvent, function(event){
			if(event.handled === false) {
				return
			}
	        event.stopPropagation();
	        event.preventDefault();
	        event.handled = true;
			nav.classList.toggle('modal_close');
			nav.classList.toggle('modal_open');
			h1.classList.toggle('title_underline');
			close.style.display= "none";
			humburger.style.display = "block";
			humburger.style.display = "grid";
			console.log('hello')

		});
	}

});