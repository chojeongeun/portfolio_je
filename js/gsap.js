const newsTitle = document.querySelector('#news h1');
const newsWrap = document.querySelector('#news .inner .wrap');
const commuTitle = document.querySelector('#mainCommunity h1');
const commuWrap = document.querySelector('#mainCommunity .inner .wrap');
const bannerTxt = document.querySelector('#banner .inner .txtBN');
const scienceTitle = document.querySelector('#science h1');
const scienceWrap = document.querySelector('#science .inner .wrap');
const goodsTitle = document.querySelector('#goods .inner h1');
const goodsContent = document.querySelectorAll('#goods .inner ul li');
const banner2Title = document.querySelector('#banner2 .inner h1');
const banner2Txt = document.querySelector('#banner2 .inner .right');

console.log(goodsContent);

const newsTl = gsap.timeline({
	scrollTrigger: {
		trigger: '#news .inner',
		start: 'top center',
		end: 'bottom 40%',
		markers: false,
		toggleActions: 'restart reverse restart reverse',
	},
});

newsTl
	.from(newsTitle, { x: 500, scale: 2, opacity: 0, duration: 0.5 })
	.from('.news-content1', { x: 500, opacity: 0, duration: 0.5 })
	.from('.news-content2', { x: 500, opacity: 0, duration: 0.5 })
	.from('.news-content3', { x: 500, opacity: 0, duration: 0.5 })
	.from('.news-content4', { x: 500, opacity: 0, duration: 0.5 });

const commuTl = gsap.timeline({
	scrollTrigger: {
		trigger: '#mainCommunity .inner',
		start: 'top center',
		end: 'bottom 40%',
		markers: false,
		toggleActions: 'restart reverse restart reverse',
	},
});

commuTl.from(commuTitle, { x: 500, scale: 2, opacity: 0 });
commuTl.from(commuWrap, { x: -500, opacity: 0 });

gsap.from(bannerTxt, {
	scale: 1.5,
	duration: 1,
	scrollTrigger: {
		trigger: '#banner .inner',
		start: 'top 60%',
		end: 'bottom 20%',
		scrub: true,
		markers: false,
	},
});

const scienceTl = gsap.timeline({
	scrollTrigger: {
		trigger: '#science .inner',
		start: 'top center',
		end: 'bottom 40%',
		markers: false,
		toggleActions: 'restart reverse restart reverse',
	},
});

scienceTl
	.from(scienceTitle, { x: 500, scale: 2, opacity: 0, duration: 0.5 })
	.from('.science-content1', { x: -500, opacity: 0, duration: 0.5 })
	.from('.science-content2', { x: -500, opacity: 0, duration: 0.5 })
	.from('.science-content3', { x: -500, opacity: 0, duration: 0.5 });

const goodsTl = gsap.timeline({
	scrollTrigger: {
		trigger: '#goods .inner',
		start: 'top center',
		end: 'bottom 40%',
		markers: false,
		toggleActions: 'restart reverse restart reverse',
	},
});

goodsTl
	.from(goodsTitle, { x: 500, scale: 2, opacity: 0 })
	.from('.goods-content1', { y: -70, opacity: 0 })
	.from('.goods-content2', { y: -70, opacity: 0 })
	.from('.goods-content3', { y: -70, opacity: 0 });

const banner2Tl = gsap.timeline({
	scrollTrigger: {
		trigger: '#banner2 .inner',
		start: 'top center',
		end: 'bottom 0%',
		markers: false,
		toggleActions: 'restart reverse restart reverse',
	},
});

banner2Tl.from(banner2Title, { x: 500, opacity: 0, duration: 0.5 }).from(banner2Txt, { x: 500, opacity: 0, duration: 0.5 });
