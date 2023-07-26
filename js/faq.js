const faq = document.querySelector('.FAQ');
const btns = faq.querySelectorAll('.btn li');
const boxs = faq.querySelectorAll('.box li');

btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		for (const el of btns) el.classList.remove('on');
		btns[idx].classList.add('on');

		for (const el of boxs) el.classList.remove('on');
		boxs[idx].classList.add('on');
	});
});
