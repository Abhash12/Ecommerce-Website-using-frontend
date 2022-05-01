var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementsById("navbar").style.top = "0";
    } else {
        document.getElementsById("navbar").style.top = "-100px";  
    }
    prevScrollpos = currentScrollPos;
}