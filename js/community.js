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
			panel2.prepend(panel2.lastElementChild);
			panel2.style.marginLeft = '-100%';
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
const titles = list.querySelectorAll('#list article h3');
const boxs = list.querySelectorAll('#list article p');

titles.forEach((title, idx) => {
	title.addEventListener('click', () => {
		for (const el of titles) el.classList.remove('on');
		titles[idx].classList.add('on');
		for (const el of boxs) el.classList.remove('on');
		boxs[idx].classList.add('on');
	});
});
