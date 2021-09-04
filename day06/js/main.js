// // fetch('https://jsonplaceholder.typicode.com/photos')
// //     .then(response => response.json())
// //     .then(json => console.log(json));

// async function getPosts() {
//     let url = "https://jsonplaceholder.typicode.com/posts/";
//     try {
//         let res = await fetch(url);
//         return await res.json();
//     } catch (error) {
//         console.log(error);
//     }
// }

// async function renderPosts() {
//     let posts = await getPosts();
//     let html = "";
//     posts.forEach(post => {
//         let htmlSegment = `<div class="post">
//                             <h3 class="post-title">${post.title}</h3>
//                             <p>${post.body}</p>
//                         </div>`;

//         html += htmlSegment;
//     });
//     // let htmlSegment = `<div class="post">
//     //                         <h3 class="post-title">${posts.title}</h3>
//     //                         <p>${posts.body}</p>
//     //                         <p>${posts.id}</p>
//     //                     </div>`;

//     // for (let i = 0; posts.length; i++) {
//     //     console.log(posts[i].id);
//     //     if (posts[i].id % 3 === 0) {
//     //         html += htmlSegment;
//     //     } else {
//     //         continue;
//     //     }
        
//     // }

//     let container = document.querySelector('.container');
//     return container.innerHTML = html;
// }

// renderPosts();



// const baseUrl = 'https://api.github.com/users/';

// const input = document.createElement('input');
// const button = document.createElement('button');
// const ul = document.createElement('ul');

// // add text
// button.innerHTML = 'Get Github User';

// button.addEventListener("click", function(){
//     const login = input.value;
//     getUser(login);
// });

// // place elements on page.
// document.body.appendChild(input);
// document.body.appendChild(button);
// document.body.appendChild(ul);

// function getUser(login) {
//     fetch(baseUrl + login) // Base url + input value
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         buildUserData(data);
//     });
// }

// function buildUserData(data) {
//     const html = `<div class="user-wrap">
//                     <div class="avatar">
//                         <img src="${data.avatar_url}">
//                     </div></div>`;
//     document.body.innerHTML += html;
// }

const baseUrl = "https://dog.ceo/api/breeds/image/random";


const btn = document.createElement('button');
const input = document.createElement('input');


document.body.appendChild(input);
document.body.appendChild(btn);

const button = document.querySelector("button");

btn.innerHTML = "Get a cat fact!";


btn.addEventListener("click", () => {
    // let name = input.value;
    getFact();
});

function getFact() {
    // console.log("TEST");
    fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
        const img = document.createElement('p');
        img.src = data.message;
        console.log(data);
        // alert("Age guess: " + data.age + "?");
        // img.innerHTML = data.message;
        document.body.appendChild(img);
    })
    .catch((err) => {
        console.error(err);
    });
}

// let displayFact = document.getElementsByClassName("cat");
// let url = "https://catfact.ninja/fact";
// //https://cat-fact.herokuapp.com/facts
// //https://apipheny.io/free-api/#apis-without-key


// const button = document.querySelector("button");

// button.addEventListener("click", function(){
//     fetch(url) 
// .then(response =>{
//   return response.json()
// })
// .then(responseData => {
//     // alert(responseData.fact)
//     const li = document.createElement("li");
//     document.body.appendChild(li);
    
//     console.log("response", responseData)
//     li.innerHTML = responseData.fact;
// })
// })
