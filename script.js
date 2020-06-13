const date = new Date();
const username = window.location.search.split('=')
const url = `https://api.github.com/users/${username}`;

const getDate = new Promise((resolve, reject) => {
	setTimeout (() => date ? resolve(date) : reject('no date'), 3000 );
});

const getUrl = new Promise((resolve, reject) => {
	setTimeout (() => url ? resolve(url) : reject('no url'), 5000 );
});

const preloader = document.querySelector('.circ');

Promise.all([getDate, getUrl])
 .then(([date, url]) => fetch(url))
	.then(res => res.json())
	.then(json => {
		console.log(json.avatar_url);
		console.log(json.name);
		console.log(json.bio);
		console.log(json.url);

		const avatar = json.avatar_url;
		const name = json.name;
		const bio = json.bio;
		const link = json.url;

		const body = document.body;

		const newPhoto = new Image();
		newPhoto.src = avatar;
		body.appendChild(newPhoto);

		const newName = document.createElement('a');
		newName.innerHTML = name;
		newName.setAttribute('href', link);
		body.appendChild(newName);

		const profileDescription = document.createElement('p');
		profileDescription.innerHTML = bio;
		body.appendChild(profileDescription);
	})
	.catch(err => console.log("Информация о пользователе не доступна"))