// const slider = document.querySelector('#slider');
// const panel = slider.querySelector('.panel');
// const btns = slider.querySelectorAll('.btn li');

// btns.forEach((btn, idx) => {
// 	btn.addEventListener('click', () => {
// 		for (const el of btns) el.classList.remove('on');
// 		btns[idx].classList.add('on');

// 		new Anime(panel, {
// 			prop: 'margin-left',
// 			value: -100 * idx + '%',
// 			duration: 500,
// 		});
// 	});
// });

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const panel2 = document.querySelector('.panel2');

panel2.prepend(panel2.lastElementChild);

next.addEventListener('click', () => {
	new Anime(panel2, {
		prop: 'margin-left',
		value: '-200%',
		duration: 500,
		callback: () => {
			panel2.append(panel2.firstElementChild);
			panel2.style.marginLeft = '-100%';
		},
	});
});

prev.addEventListener('click', () => {
	new Anime(panel2, {
		prop: 'margin-left',
		value: '0%',
		duration: 500,
		callback: () => {
			panel.prepend(panel.lastElementChild);
			panel.style.marginLeft = '-100%';
		},
	});
});

const btns = document.querySelectorAll('.bottomNum li');
btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		for (const el of btns) el.classList.remove('on');
		btns[idx].classList.add('on');
	});
});

const list = document.querySelector('#list');
const article = list.querySelector('article');
const titles = list.querySelectorAll('h3');
const boxs = list.querySelectorAll('p');

titles.forEach((title, idx) => {
	title.addEventListener('click', () => {
		for (const el of titles) el.classList.remove('on');
		titles[idx].classList.add('on');
		for (const el of boxs) el.classList.remove('on');
		boxs[idx].classList.add('on');
	});
});
