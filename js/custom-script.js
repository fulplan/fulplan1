
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    // document.getElementById("navbar").style.marginRight = "50px";
    document.getElementById("logo").style.fontSize = "25px";
    document.getElementById("nav-font").style.fontSize = "16px";
    document.getElementById("navbar").style.boxShadow = "0 2px 2px -2px #a4b1cd";
    document.getElementById("navbar").style.backgroundColor = " #0a192f2b";
    // document.getElementById("navbar").style. = " #0a192f90";
  } else {
    document.getElementById("navbar").style.backgroundColor = " #0a192f";
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
    document.getElementById("nav-font").style.fontSize = "20px";
  }

}
