var wordCounter = document.getElementById("words");
var charCounter = document.getElementById("chars");
document.addEventListener('keydown', function() {
    var text = document.getElementById("textbox").value;
    text = text.replace('\t', ' ');
    text = text.replace('\n', ' ');
    var words = text.split(' ').filter(i => i);
    var wordCount = (text.length > 0) ? words.length : 0;
    var charCount = text.length;
    wordCounter.innerHTML = `Word Count: ${wordCount}`;
    charCounter.innerHTML = `Character Count: ${charCount}`;
});
