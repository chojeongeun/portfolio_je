const newsTitle = document.querySelector('#news h1');
const newsWrap = document.querySelector('#news .inner .wrap');
const commuTitle = document.querySelector('#mainCommunity h1');
const commuWrap = document.querySelector('#mainCommunity .inner .wrap');
const bannerTxt = document.querySelector('#banner .inner .txtBN');
const scienceTitle = document.querySelector('#science h1');
const scienceWrap = document.querySelector('#science .inner .wrap');
const goodsTitle = document.querySelector('#goods .inner h1');
const goodsContent = document.querySelectorAll('#goods .inner ul li');

const newsTl = gsap.timeline({
	scrollTrigger: {
		trigger: newsTitle,
		start: 'top center',
		end: 'bottom 0%',
		markers: true,
		toggleActions: 'restart reverse restart reverse',
	},
});

newsTl.from(newsTitle, { x: 500, scale: 2 });
newsTl.from(newsWrap, { x: 500, opacity: 0 });

const commuTl = gsap.timeline({
	scrollTrigger: {
		trigger: commuTitle,
		start: 'top center',
		end: 'bottom 0%',
		markers: false,
		toggleActions: 'restart reverse restart reverse',
	},
});

commuTl.from(commuTitle, { x: 500, scale: 2 });
commuTl.from(commuWrap, { x: -500, opacity: 0 });

gsap.from(bannerTxt, {
	scale: 1.5,
	duration: 1,
	scrollTrigger: {
		trigger: bannerTxt,
		start: 'top 60%',
		end: 'bottom 20%',
		scrub: true,
		markers: false,
	},
});

const scienceTl = gsap.timeline({
	scrollTrigger: {
		trigger: scienceTitle,
		start: 'top center',
		end: 'bottom 0%',
		markers: false,
		toggleActions: 'restart reverse restart reverse',
	},
});

scienceTl.from(scienceTitle, { x: 500, scale: 2 });
scienceTl.from(scienceWrap, { x: -500, opacity: 0 });

const goodsTl = gsap.timeline({
	scrollTrigger: {
		trigger: goodsTitle,
		start: 'top center',
		end: 'bottom 0%',
		markers: false,
		toggleActions: 'restart reverse restart reverse',
	},
});

goodsTl.from(goodsTitle, { x: 500, scale: 2 });
goodsTl.from(goodsContent, { x: -500, opacity: 0 });
