
var text = 'We Sell LifeStyle';
var curr = 0;

var Write = function write(){
    var elem = document.getElementById('heading1');

    elem.textContent = elem.textContent + text.charAt(curr);
    curr++;

    if (curr < text.length)
    window.setTimeout(write, 200);
};

Write();