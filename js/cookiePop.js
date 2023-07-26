const pop = document.querySelector('#pop');
const ck = pop.querySelector('#ck');
const btnClose = pop.querySelector('.btnClose');
const [btnShowCookie, btnDelCookie] = document.querySelectorAll('button');

if (document.cookie.indexOf('today=done') < 0) {
	pop.style.display = 'block';
} else {
	pop.style.display = 'none';
}

//쿠키 생성 함수
function setCookie(name, value, days) {
	let today = new Date();
	let duedate = today.getDate() + days;
	today.setDate(duedate);

	document.cookie = `${name}=${value}; path=/; expires=${today.toUTCString()}`;
}

//쿠키생성확인
btnShowCookie.addEventListener('click', () => {
	console.log(document.cookie);
});

//쿠키삭제
btnDelCookie.addEventListener('click', () => {
	setCookie('today', 'done', 0);
	alert('쿠키가 삭제되었습니다.');
});

//쿠키삭제버튼
btnClose.addEventListener('click', () => {
	if (ck.checked) setCookie('today', 'done', 1);
	pop.style.display = 'none';
});
