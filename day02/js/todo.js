const taskInput = document.querySelector("#task-input");
const btn = document.querySelector("button");
const list = document.querySelector("#list");

// function buildItem(text) {
//     let listItem = 
//     `<li>
//         <div class="item">
//             <p class="item-text">${text}</p>
//         </div>
//     </li>`;

//     return listItem;
// }

function addItem() {
    let newItem = taskInput.value;
    let listItem = 
    `<li>
        <div class="item">
            <p class="item-text">${newItem}</p>
        </div>
    </li>`;

    if (newItem === "") {
        alert("You didn't enter anything.");
    } else {
        list.innerHTML += listItem;
    }
    
    taskInput.value = "";
}

btn.addEventListener("click", addItem);