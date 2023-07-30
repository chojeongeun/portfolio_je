const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
	//e.preventDefault();

	//userid 인증
	const userid = form.querySelector('[name=userid]');

	if (userid.value.length < 5) {
		userid.closest('td').querySelector('.err').style.display = 'block';
		e.preventDefault();
	} else {
		userid.closest('td').querySelector('.err').style.display = 'none';
	}

	//pwd1 인증
	const pwd1 = form.querySelector('[name=pwd1]');
	const eng = /[a-zA-Z]/;
	const num = /[0-9]/;
	const spc = /[!@#$%^&*()]/;

	if (pwd1.value.length < 5 || !eng.test(pwd1.value) || !num.test(pwd1.value) || !spc.test(pwd1.value)) {
		pwd1.closest('td').querySelector('.err').style.display = 'block';
		e.preventDefault();
	} else {
		pwd1.closest('td').querySelector('.err').style.display = 'none';
	}

	//pwd2 인증
	const pwd2 = form.querySelector('[name=pwd2]');
	if (!pwd2.value || pwd1.value !== pwd2.value) {
		pwd2.closest('td').querySelector('.err').style.display = 'block';
		e.preventDefault();
	} else {
		pwd2.closest('td').querySelector('.err').style.display = 'none';
	}

	//gender 인증
	const gender = form.querySelectorAll('[name=gender]');
	let isGenderChecked = false;
	gender.forEach((el) => {
		if (el.checked) isGenderChecked = true;
	});
	if (!isGenderChecked) {
		gender[0].closest('td').querySelector('.err').style.display = 'block';
		e.preventDefault();
	} else {
		gender[0].closest('td').querySelector('.err').style.display = 'none';
	}

	//interests인증
	const interests = form.querySelectorAll('[name=interests]');
	let isInterestsChecked = false;
	interests.forEach((el) => {
		if (el.checked) isInterestsChecked = true;
	});
	if (!isInterestsChecked) {
		interests[0].closest('td').querySelector('.err').style.display = 'block';
		e.preventDefault();
	} else {
		interests[0].closest('td').querySelector('.err').style.display = 'none';
	}

	//select 인증
	const select = form.querySelector('[name=edu]');
	if (!select.value) {
		select.closest('td').querySelector('.err').style.display = 'block';
		e.preventDefault();
	} else {
		select.closest('td').querySelector('.err').style.display = 'none';
	}

	//comments 인증
	const comments = form.querySelector('[name=comments]');
	if (comments.value.length < 10) {
		comments.closest('td').querySelector('.err').style.display = 'block';
		e.preventDefault();
	} else {
		comments.closest('td').querySelector('.err').style.display = 'none';
	}
});
