(function() {
    buildUI();
    newListener(document.querySelector('button'), "click", addItem);
})();