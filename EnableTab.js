// credit: https://natclark.com/tutorials/javascript-allow-tab-in-textarea/
document.querySelectorAll(`textarea`).forEach((textArea) => {
    textArea.addEventListener(`keydown`, (e) => {
        if (e.key === "Tab") {
            e.preventDefault();
            let newLoc = textArea.selectionStart + 1;
            textArea.selectionEnd = textArea.selectionStart;
            textArea.selectionStart = textArea.selectionEnd;
            textArea.value = `${textArea.value.substring(0, textArea.selectionStart)}\t${textArea.value.substring(textArea.selectionEnd)}`;
            textArea.selectionEnd = newLoc;
        }
    }, false);
});
