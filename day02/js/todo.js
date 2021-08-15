const taskInput = document.querySelector("#task-input");
const btn = document.querySelector("button");
const list = document.querySelector("#list");

function addItem() {
    let newItem = taskInput.value;
    let listItem = 
    `<li>
        <div class="item">
            <p class="item-text">${newItem}</p>
            <p class="remove" onclick="remove()">X</p>
        </div>
    </li>`;

    if (newItem === "") {
        alert("You didn't enter anything.");
    } else {
        list.innerHTML += listItem;
    }
    
    taskInput.value = "";
}

function removeItem() {
    console.log(this);
}

btn.addEventListener("click", addItem);