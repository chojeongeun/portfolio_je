const prev = document.querySelector('.sliderPrev');
const next = document.querySelector('.sliderNext');
const panel = document.querySelector('.panel');

panel.prepend(panel.lastElementChild);

next.addEventListener('click', () => {
	new Anime(panel, {
		prop: 'margin-left',
		value: '-200%',
		duration: 500,
		callback: () => {
			panel.append(panel.firstElementChild);
			panel.style.marginLeft = '-100%';
		},
	});
});

prev.addEventListener('click', () => {
	new Anime(panel, {
		prop: 'margin-left',
		value: '0%',
		duration: 500,
		callback: () => {
			panel.prepend(panel.lastElementChild);
			panel.style.marginLeft = '-100%';
		},
	});
});
