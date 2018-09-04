document.addEventListener("DOMContentLoaded", function(){
  showOnLoad();
  classActive();
  onScrollHeaderChange();
});
function classActive(){
  let link = document.querySelectorAll(".link");
  for(var i=0; i < link.length; i++){
    link[i].addEventListener("click", function(){
      let current = document.querySelector(".active");
      current.className = current.className.replace(" active", "");
      this.className += " active";
    });
    link[i].onclick = scroll;
    link[i].addEventListener("scroll", onScrollActive);
  }
}
function scroll(e) {
  e.preventDefault();
  var id = this.getAttribute('href').replace('#', '');
  var target = document.getElementById(id).getBoundingClientRect().top;
  animateScroll(target);
}
function onScrollActive(e){
  e.preventDefault();
  var id = this.getAttribute('href').replace('#', '');
  var projects = document.getElementById(id).offsetTop;
  if(scrollY >= projects){
    let current = document.querySelector(".active");
      current.className = current.className.replace(" active", "");
      nextElementSibling.className += " active";
  }
}
function animateScroll(targetHeight) {
  var initialPosition = window.scrollY;
  var SCROLL_DURATION = 100;
  var step_x = Math.PI / SCROLL_DURATION;
  var step_count = 0;
  requestAnimationFrame(step);
  function step() {
      if (step_count < SCROLL_DURATION) {
          requestAnimationFrame(step);
          step_count++;
          window.scrollTo(0, initialPosition + targetHeight * 0.25 * Math.pow((1 - Math.cos(step_x * ++step_count)), 2));
      }
  }
}
function onScrollHeaderChange(){
  let projects = document.getElementById("projects");
  let projectsTop = document.getElementById("projects").offsetTop;
  let header = document.getElementById("header-wrapper");
  let home = document.getElementById("home");
  let headerHeight = header.offsetHeight;
  window.onscroll = function(){
    // if scroll come at the middle of home section 
    if(scrollY >= projectsTop - (home.offsetHeight/2)){
      // add no-height class to header so i can add later header-fixed and animation 
      header.classList.add("no-height");
      // if scroll is in the position of home section height
      if(scrollY >= home.offsetHeight - 20){
        // add header fixed and animation
        header.classList.add("header-fixed");
        header.classList.add("header-animation");
      }else{
        // remove animation
        header.classList.remove("header-animation");
      }
    }else{
      // remove fixed header and no height
      header.classList.remove("header-fixed");
      header.classList.remove("no-height");
    }
  }
}
function showOnLoad(){
  let home = document.getElementById("profile");
  // let skills = document.getElementById("skills");
  window.addEventListener("load", () => {
    if(home){
      home.classList.add("home-expand");
      // skills.classList.add("skills-expand");
    }
  })
}


