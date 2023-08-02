const btncall = document.querySelector('.btncall');
const panel = document.querySelector('#mobilePanel');
const close = document.querySelector('#mobilePanel .close');

btncall.addEventListener('click', () => {
	panel.classList.toggle('on');
});

close.addEventListener('click', () => {
	panel.classList.toggle('on');
});
