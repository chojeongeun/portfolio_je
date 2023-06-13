/*  
  1.submit버튼에 폼전송 이벤트 연결
  2.각 폼 항목마다의 인증함수 정의
  3.각 함수마다 인증여부에따라 true, false값 리턴
  4.전송 버튼 클릭시 각 함수에서 하나라도 false값을 리턴시 기본전송기능 막음
*/

console.log(document.querySelector('select[name=edu]'));

const form = document.querySelector('#member');
const btnSubmit = form.querySelector('input[type=submit]');

btnSubmit.addEventListener('click', (e) => {
	if (!isTxt('userid', 5)) e.preventDefault();
	if (!isTxt('comments', 10)) e.preventDefault();
	if (!isPwd('pwd1', 'pwd2', 4)) e.preventDefault();
	if (!isEmail('email', 6)) e.preventDefault();
	if (!isCheck('gender')) e.preventDefault();
	if (!isCheck('hobby')) e.preventDefault();
	if (!isSelect('edu')) e.preventDefault();
});

//텍스트항목 입력받아 인증
function isTxt(name, len) {
	const input = form.querySelector(`[name=${name}]`);
	const text = input.value.trim();

	if (text.length < len) {
		alert(`입력한 텍스트 항목을 ${len}글자 이상 입력하세요.`);
		return false;
	} else {
		return true;
	}
}

//비밀번호 입력받아 인증
function isPwd(pwd1, pwd2, len) {
	const pwd1_val = form.querySelector(`[name=${pwd1}]`).value;
	const pwd2_val = form.querySelector(`[name=${pwd2}]`).value;

	if (pwd1_val !== pwd2_val || pwd1_val.length < len) {
		alert(`비밀번호 항목 2개를 동일하고 입력하고 ${len}글자 이상 입력하세요`);
		return false;
	} else {
		return true;
	}
}

//이메일 형식 입력받아 인증
//조건 - 입력한 문자가 6글자 이상이고 @포함
function isEmail(name, len) {
	const email = form.querySelector(`[name=${name}]`).value;
	if (email.indexOf('@') < 0 || email.length < len) {
		alert('이메일주소에 @를 포함시키고 6글자 이상 입력하세요.');
		return false;
	} else {
		return true;
	}
}

//체크요소 형식 입력받아 인증
function isCheck(name) {
	const inputs = document.querySelectorAll(`[name=${name}]`);
	let isChecked = false;
	//현재 반복도는 체크폼요소에 하나라도 체크되어 있는게 있다면
	//지역변수 isCheckded를 true로 변경
	for (const input of inputs) input.checked && (isChecked = true);
	if (!isChecked) {
		alert('해당 선택사항을 하나이상 체크하세요.');
		return false;
	} else return true;
}

//select요소 입력받아 인증
function isSelect(name) {
	const input = form.querySelector(`[name=${name}]`);
	const selected_index = input.options.selectedIndex;
	const value = input.options[selected_index].value;

	if (value === '') {
		alert('해당 요소중에 하나를 선택해주세요.');
		return false;
	} else {
		return true;
	}
}
