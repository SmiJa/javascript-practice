// const url = 'https://api.github.com/users/';

// const input = document.createElement('input');
// const button = document.createElement('button');
// const div = document.createElement('div');

// button.innerHTML = "Get Github User";

// document.body.appendChild(input);
// document.body.appendChild(button);
// document.body.appendChild(div);

// button.addEventListener("click", getUserData);

// function getUserData() {
//     const login = input.value;
//     fetch(url + login)
//     .then(res => res.json())
//     .then(data => buildUserData(data));
// }


// function buildUserData(data, followers) {
//     console.log(data);
    
//     let html = `<div>
//                     <img src="${data.avatar_url}">
//                     <p>Followers: ${data.followers}</p>
//                     <img src="${data.followers_url[0].avatar_url}">
//                     <img src="${followers[1].avatar_url}">
//                 </div>`;
//     document.body.innerHTML += html;
// }

const promise2 = fetch('https://api.chucknorris.io/jokes/random')
promise2.then((res) => res.json())
    .then((data) => {
        console.log(data);
        const li = document.createElement('li')
        document.body.appendChild(li);
        li.innerText = data.value;
});

// const promise2 = fetch('https://api.chucknorris.io/jokes/random')
// promise2.then((res) => res.json())
//     .then((data) => {
//         console.log(data);
// });