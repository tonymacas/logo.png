// "for loop" function
var slideIndex = 1;//starts with first image
showDivs(); //calling to display the first image


//plusDivs is a function that adds another image to the slideIndex
//this is the button
function plusDivs(n) {
  showDivs(slideIndex += n);
}

//this to show the  .div slider-products
function showDivs(n) {
  var i;


  //put my images under class name = mySlides
  //starts images at index 1 (img/tissue2)
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

//got from https://www.w3schools.com/w3css/w3css_slideshow.asp
//thank you for it.
