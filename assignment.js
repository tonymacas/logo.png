let sections = document.getElementsByTagName("section")
let firstSection = sections[0];
let secondSection = sections[1];
let thirdSection = sections[2]

//run this code on window scroll
window.addEventListener("scroll", event => {

  if(window.scrollY > 50) {
    firstSection.classlist.add("fadeOut");
  }

  if(sections[1].scrollY > 100) {
    secondSection.classList.add("fadeOut");
  }

  if(sections[2].scrollY > 150) {
    thirdSection.classList.add("fadeOut");
 }
})
