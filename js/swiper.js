const swiper = new Swiper('.mySwiper', {
	spaceBetween: 30,
	// effect: 'fade',
	slidesPerView: 1,
	centeredSlides: true,
	loop: false,
	loopedSlides: 1,
	keyboard: {
		enabled: true,
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
