let getUsername = () => {
	const username = window.location.search.split('username=')[1];
	if (username == undefined){
        username = 'mszulya';
    }
    return username
}

const userUrl = `https://api.github.com/users/${username}`;
console.log(userUrl);

const getDate = new Promise((resolve, reject) => {
	const date = new Date();
	setTimeout (() => date ? resolve(date) : reject('no date'), 3000 );
});

const getUserUrl = new Promise((resolve, reject) => {
	setTimeout (() => userUrl ? resolve(userUrl) : reject('no url'), 5000 );
});

const preloader = document.querySelector('.circ');
setTimeout(() => {
  preloader.style.display = 'none';
}, 4999);

Promise.all([getDate, getUserUrl])
  .then(([date, url]) => fetch(userUrl))
	.then(res => res.json())
	.then(json => {
		const avatar = json.avatar_url;
		const name = json.name;
		const bio = json.bio;
		const link = json.url;

		const body = document.body;

		const nowDate = document.createElement('p');
		nowDate.innerHTML = date;
		body.appendChild(nowDate);

		console.log(nowDate);
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