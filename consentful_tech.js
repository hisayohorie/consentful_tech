document.addEventListener('DOMContentLoaded',function(){
	const humburger = document.getElementById('humburger');
	const nav = document.querySelector('.nav');
	const close = document.getElementById('humburger_close');
	humburger.addEventListener('click', function(){
		nav.classList.toggle('modal_close');
		nav.classList.toggle('modal_open');
		humburger.style.display="none";
		close.style.display="block";
		
		

	});
	close.addEventListener('click', function(){
		nav.classList.toggle('modal_close');
		nav.classList.toggle('modal_open');
		close.style.display= "none"
		humburger.style.display = "block"
		humburger.style.display = "grid"	
		
	})
});