const wrap = document.querySelector('.about .wrap');

let tags = '';

fetch('DB/department.json')
	.then((res) => {
		return res.json();
	})
	.then((data) => {
		const memberData = data.members;

		memberData.map((data) => {
			tags += `
    <article>
      <div class='pic'>
        <img/src='img/${data.pic}' />
      </div>
			<div class='txt'>
      	<h2>${data.name}</h2>
      	<p>${data.position}</p>
			</div>
			<div class='sns'>
				<a href="#" class="btn"><i class="fa-brands fa-facebook-f" ></i></i></a>
				<a href="#" class="btn"><i class="fa-brands fa-twitter" ></i></i></a>
				<a href="#" class="btn"><i class="fa-solid fa-phone"></i></a>
				<a href="#" class="btn"><i class="fa-solid fa-envelope" ></i></i></a>
				

			</div>
    </article>
    `;
		});
		console.log(tags);
		wrap.innerHTML = tags;
	});
