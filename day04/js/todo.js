//Setting up an anonymous self executing function.
(function() {
    // Calling the buildUI function to layout the main UI elements for the TODO app.
    buildUI();

    // Calling a function to set up event listeners for elements
    // This one is adding an event listener to the button element.
    newListener(document.querySelector('button'), "click", addItem);
})();