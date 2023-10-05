const secs = document.querySelectorAll('.myscroll');
const btns = document.querySelectorAll('.scrollBtn li');
const baseline = -window.innerHeight / 3;

window.addEventListener('scroll', () => {
	const scroll = window.scrollY;
	if (scroll >= secs[0].offsetTop + baseline) {
		for (const el of btns) el.classList.remove('on');
		btns[0].classList.add('on');
		for (const el of secs) el.classList.remove('on');
		secs[0].classList.add('on');
	}
	if (scroll >= secs[1].offsetTop + baseline) {
		for (const el of btns) el.classList.remove('on');
		btns[1].classList.add('on');
		for (const el of secs) el.classList.remove('on');
		secs[1].classList.add('on');
	}
	if (scroll >= secs[2].offsetTop + baseline) {
		for (const el of btns) el.classList.remove('on');
		btns[2].classList.add('on');
		for (const el of secs) el.classList.remove('on');
		secs[2].classList.add('on');
	}
	if (scroll >= secs[3].offsetTop + baseline) {
		for (const el of btns) el.classList.remove('on');
		btns[3].classList.add('on');
		for (const el of secs) el.classList.remove('on');
		secs[3].classList.add('on');
	}
	if (scroll >= secs[4].offsetTop + baseline) {
		for (const el of btns) el.classList.remove('on');
		btns[4].classList.add('on');
		for (const el of secs) el.classList.remove('on');
		secs[4].classList.add('on');
	}
	if (scroll >= secs[5].offsetTop + baseline) {
		for (const el of btns) el.classList.remove('on');
		btns[5].classList.add('on');
		for (const el of secs) el.classList.remove('on');
		secs[5].classList.add('on');
	}
});

btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		window.scrollTo({ top: secs[idx].offsetTop, behavior: 'smooth' });
	});
});
