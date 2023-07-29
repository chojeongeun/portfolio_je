const swiper = new Swiper('.mySwiper', {
	spaceBetween: 30,
	slidesPerView: 1,
	centeredSlides: true,
	loop: true,
	// autoplay: {
	// 	delay: 2500,
	// 	disableOnInteraction: false,
	// },
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
