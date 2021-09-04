/*
    Functions for the TODO app.
*/

// The newElement function is used to create an HTML element
function newElement(element) {
    return document.createElement(element);
}

// buildUI is what builds the main UI of the TODO app.
function buildUI() {
    // Creating the elements needed for the main UI.
    const mainWrap = newElement("div");
    const header = newElement("header");
    const headerH1 = newElement("h1");
    const headerDiv = newElement("div");
    const headerInput = newElement("input");
    const headerButton = newElement("button");
    const listWrap = newElement("section");
    const newList = newElement("ul");
    
    // Using the id method to apply id's to the elements that need them.
    mainWrap.id = "main-wrap";
    headerDiv.id = "new-item-wrap";
    headerInput.id = "task-input";
    listWrap.id = "list-wrap";
    newList.id = "list";

    // Using the type method to make the input a text input
    headerInput.type = "text";

    // Inserting text into the button and the h1 elements
    headerButton.innerHTML = "Add Item";
    headerH1.innerHTML = "Todo";

    // Using appendChild to insert the input and button elements into a wrapper div
    headerDiv.appendChild(headerInput);
    headerDiv.appendChild(headerButton);

    // Adding the h1 and the div that wraps the input and button to the header
    header.appendChild(headerH1);
    header.appendChild(headerDiv);

    // Adding the ul element to the wrap for the list
    listWrap.appendChild(newList);

    // Adding the header and the list wrapper div to the main wrapper div
    mainWrap.appendChild(header);
    mainWrap.appendChild(listWrap);

    // Adding everything to the body
    document.body.appendChild(mainWrap);
}


// The newListener function takes three arguments.
// obj - This is what you want to apply the listener to.
// listener - This is the type of event you want to listen for.
// func - This is the function you want to run.
function newListener(obj, listener, func) {
    obj.addEventListener(listener, func);
}


// addItem is the function that runs when the Add Item button is clicked.
// In this function it checks to make sure the input field isn't empty.
//  - If it's empty, it alerts the user that the field is empty
// If the field isn't empty, the function adds the listItem by calling the newListItem function.
// It then clears the input field.
function addItem() {
    const taskInput = document.querySelector("#task-input");
    const newItem = taskInput.value;
    const list = document.querySelector("#list");

    let listItem = newListItem(newItem);

    if (newItem === "") {
        alert("You didn't enter anything.");
    } else {
        list.appendChild(listItem);
    }
    
    taskInput.value = "";
}

// newListItem builds the li to add to the list.
// It creates an li, div, and p element.
// It then applies classes to the div and the p elements.
// Then inserts the value of the item field to the p element.
// Finally it builds the li by appending the p to the div and the div to the li before returning the object.
function newListItem(value) {
    const newLi = newElement("li");
    const newDiv = newElement("div");
    const newP = newElement("p");

    newDiv.classList.add("item");
    newP.classList.add("item-text");

    newP.innerHTML = value;

    newDiv.appendChild(newP);

    newLi.appendChild(newDiv);

    addItemToList(value);

    newListener(newDiv, "click", removeItem(this));

    return newLi;
}

// 
function addItemToList(item) {
    itemsList.push(item);
    console.log(item);
    console.log(itemsList);
}

function removeItem(obj) {
    obj.parentNode.parentNode.removeChild(li);
}