const slider = document.querySelector('#slider');
const panel = slider.querySelector('.panel');
const btns = slider.querySelectorAll('.btn li');

btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		for (const el of btns) el.classList.remove('on');
		btns[idx].classList.add('on');

		new Anime(panel, {
			prop: 'margin-left',
			value: -100 * idx + '%',
			duration: 500,
		});
	});
});
