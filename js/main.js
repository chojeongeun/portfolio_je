const secs = document.querySelectorAll('section');
//secs이라는 변수를 만들어서 문서에서 'section'을 불러옴.
const btns = document.querySelectorAll('.scrollBtn li');
//secs이라는 변수를 만들어서 문서에서 'section'을 불러옴.
const baseline = -window.innerHeight / 3;

window.addEventListener('scroll', () => {
	//윈도우에 스크롤 이벤트를 추가함.
	const scroll = window.scrollY;
	//스크롤이라는 변수를 만들어 윈도우에 스크롤기능을 넣음.
	if (scroll >= secs[0].offsetTop + baseline) {
		for (const el of btns) el.classList.remove('on');
		btns[0].classList.add('on');
		for (const el of secs) el.classList.remove('on');
		secs[0].classList.add('on');
	}
	//만약 스크롤이 섹션의 첫번째 태그의 offsetTOP값과 baseline의 합보다 크거나 같으면
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
});

btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		window.scrollTo({ top: secs[idx].offsetTop, behavior: 'smooth' });
	});
});
