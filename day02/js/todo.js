const taskInput = document.querySelector("#task-input");
const btn = document.querySelector("button");
const list = document.querySelector("#list");

function buildItem(text) {
    let listItem = 
    `<li>
        <div class="item">
            <p class="item-text">${text}</p>
        </div>
    </li>`;

    return listItem;
}

function addItem() {
    let newItem = taskInput.value;
    console.log(newItem);
    return list.innerHTML = buildItem(newItem);
}


btn.addEventListener("click", addItem);