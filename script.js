let getUsername = () => {
	let username = window.location.search.split('username=')[1];
	if (username == undefined){
        username = 'mszulya';
    }
    return username;
}

const login = getUsername();
const userUrl = `https://api.github.com/users/${login}`;
console.log(userUrl);

const getDate = new Promise((resolve, reject) => {
	const date = new Date();
	setTimeout (() => date ? resolve(date) : reject('no date'), 3000 );
});
console.log(getDate);

/*const preloader = document.querySelector('.circ');
setTimeout(() => {
  preloader.style.display = 'none';
}, 4999);*/

const getUserInfo = fetch(userUrl);
console.log(getUserInfo);

Promise.all([getDate, getUserInfo])
	.then(([date, userInfo]) => {
		date();
		console.log(userInfo);
		return userInfo.json();
	})
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

		const nowDate = document.createElement('p');
		nowDate.innerHTML = date;
		body.appendChild(nowDate);

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