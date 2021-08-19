function newElement(element) {
    return document.createElement(element);
}

function buildUI() {
    let mainWrap = newElement("div");
    let header = newElement("header");
    let headerH1 = newElement("h1");
    let headerDiv = newElement("div");
    let headerInput = newElement("input");
    let headerButton = newElement("button");
    let listWrap = newElement("section");
    let newList = newElement("ul");
    
    mainWrap.id = "main-wrap";
    headerDiv.id = "new-item-wrap";
    headerInput.id = "task-input";
    listWrap.id = "list-wrap";
    newList.id = "list";

    headerInput.type = "text";

    headerButton.innerHTML = "Add Item";
    headerH1.innerHTML = "Todo";

    headerDiv.appendChild(headerInput);
    headerDiv.appendChild(headerButton);

    header.appendChild(headerH1);
    header.appendChild(headerDiv);

    listWrap.appendChild(newList);

    mainWrap.appendChild(header);
    mainWrap.appendChild(listWrap);

    document.body.appendChild(mainWrap);
}

function newListener(obj, listener, func) {
    obj.addEventListener(listener, func);
}

function addItem() {
    let taskInput = document.querySelector("#task-input")
    let newItem = taskInput.value;
    const list = document.querySelector("#list");
    // let listItem = 
    // `<li>
    //     <div class="item">
    //         <p class="item-text">${newItem}</p>
    //     </div>
    // </li>`;

    let listItem = newListItem(newItem);

    if (newItem === "") {
        alert("You didn't enter anything.");
    } else {
        list.appendChild(listItem);
    }
    
    taskInput.value = "";
}

function newListItem(value) {
    const newLi = newElement("li");
    const newDiv = newElement("div");
    const newP = newElement("p");

    newDiv.classList.add("item");
    newP.classList.add("item-text");

    newP.innerHTML = value;

    newDiv.appendChild(newP);

    newLi.appendChild(newDiv);

    return newLi;
}