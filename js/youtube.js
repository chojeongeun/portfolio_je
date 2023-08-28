const wrap = document.querySelector('.youtube .wrap');

fetchData();

document.body.addEventListener('click', (e) => {
	if (e.target.className === 'thumb') createPop(e.target.getAttribute('alt'));
	if (e.target.className === 'close') removePop();
});

//데이터 fetching함수
async function fetchData() {
	const key = 'AIzaSyAzkLv4Fcv1UNbOrmEVhonD6YXHhLjwsC8';
	const list = 'PLWvS8-RhJ_PKwK6LI-fBPArE2muxoT1Qc';
	const num = 9;
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${list}&key=${key}&maxResults=${num}`;
	const data = await fetch(url);
	const json = await data.json();
	createList(json.items);
}

//동적으로 목록 생성함수
function createList(arr) {
	let tags = '';

	arr.forEach((item) => {
		let tit = item.snippet.title;
		let desc = item.snippet.description;
		let date = item.snippet.publishedAt;

		tags += `
		<article>
			<div class='box'>
				<div class='pic'>
					<img class='thumb' src=${item.snippet.thumbnails.standard.url} alt=${item.snippet.resourceId.videoId} />
					</div>
				<div class='txt'>
					<h2>${tit.length > 50 ? tit.substr(0, 50) + '...' : tit}</h2>
					<p>${desc.length > 70 ? desc.substr(0, 70) + '...' : desc}</p>
					<span>${date.split('T')[0].split('-').join('.')}</span>
					<a href="#" class="btn"><i class="fa-solid fa-arrow-right"></i></i></a>
				</div>  
			</div>
			</article>
		`;
	});
	wrap.innerHTML = tags;
}
//동적으로 팝업 생성함수
function createPop(id) {
	console.log(id);
	const tags = `	
	<div class='con'>
		<iframe src='https://www.youtube.com/embed/${id}'></iframe>
	</div>
	<span class='close'>close</span>
	`;
	const pop = document.createElement('aside');
	pop.className = 'pop';
	pop.innerHTML = tags;
	document.body.append(pop);

	setTimeout(() => document.querySelector('.pop').classList.add('on'), 0);
	document.body.style.overflow = 'hidden';
}
//팝업제거 함수
function removePop() {
	document.querySelector('.pop').classList.remove('on');
	setTimeout(() => document.querySelector('.pop').remove(), 1000);
	document.body.style.overflow = 'auto';
}
