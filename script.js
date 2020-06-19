let getUsername = () => {
	let username = window.location.search.split('username=')[1];
	if (username == undefined){
        username = 'mszulya';
    }
    return username;
}

const login = getUsername();
const userUrl = `https://api.github.com/users/${login}`;

const getDate = new Promise((resolve, reject) => {
	const date = new Date();
	setTimeout (() => date ? resolve(date) : reject('no date'), 3000 );
});

const preloader = document.querySelector('.circ');
const cleanLoader = () => {
	preloader.style.display = 'none';
}

const getUserInfo = fetch(userUrl);

Promise.all([getDate, getUserInfo])
	.then(([date, userInfo]) => {
		const nowDate = document.createElement('p');
		nowDate.innerHTML = date;
		document.body.appendChild(nowDate);
		document.body.style.color = '#fff';
		return userInfo.json();
	})
	.then(json => {
		console.log(json.avatar_url);
		console.log(json.name);
		console.log(json.bio);
		console.log(json.html_url);

		const avatar = json.avatar_url;
		const name = json.name;
		const bio = json.bio;
		const link = json.html_url;

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

		cleanLoader();
	})
	.catch(err => console.log("Информация о пользователе не доступна"))
