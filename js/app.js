document.addEventListener("DOMContentLoaded", function(){
  showOnLoad();
  menuToggle();
  classActive();
});
function classActive(){
  let link = document.querySelectorAll(".link");
  for(var i=0; i < link.length; i++){
    link[i].addEventListener("click", function(){
      let current = document.querySelector(".active");
      current.className = current.className.replace(" active", "");
      this.className += " active";
    });
  }
}
function showOnLoad(){
  let home = document.getElementById("profile");
  let skills = document.getElementById("skills");
  window.addEventListener("load", () => {
    if(home && skills){
      home.classList.add("home-expand");
      skills.classList.add("skills-expand");
    }
  })
}
function menuToggle(){
  const menuIcon = document.getElementById("bars");
  if(menuIcon){
    const header = document.getElementById("header");
    const menu = document.getElementById("menu");
    var menuList = menu.classList;
    var icons = document.querySelectorAll(".icon");
    var nav = document.querySelector("#header > #nav");    
    menuIcon.addEventListener("click", () => {
      menuList.toggle("show-menu");
      nav.classList.toggle("nav-height");
      header.classList.add("overflow-visible");
      for (var i = 0; i < icons.length; i++){
        icons[i].classList.toggle("icons-together");
      }
    });
    const projects = document.getElementById("projects");
    const projectsTop = projects.offsetTop;
    window.addEventListener("scroll", () => {
      var scrollHeight = window.scrollY;
      if(scrollHeight > 0){
        header.classList.add("no-header");
        if(scrollHeight >= projectsTop){
          header.classList.remove("no-header");
        }else{
          menuIcon.style.top = "20px";
        }
      }else{
        header.classList.remove("no-header");
      }
    });
  }
}
