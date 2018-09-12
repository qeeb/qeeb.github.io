document.addEventListener("DOMContentLoaded", function () {
  showOnLoad();
  classActive();
  onScrollHeaderChange();
  menu();
});
function menu() {
  var menubar = document.getElementById("menu-bars");
  var navbar = "";
  menubar.addEventListener("click", function(){
    this.classList.toggle("change");
    navbar = document.getElementById("navbar");
    navbar.classList.toggle("nav-display");
  });
}
function classActive() {
  let link = document.querySelectorAll(".link");
  for (var i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function () {
      let current = document.querySelector(".active");
      current.className = current.className.replace(" active", "");
      this.className += " active";

      document.getElementById("navbar").classList.remove("nav-display");
      document.getElementById("menu-bars").classList.remove("change");
    });
    link[i].onclick = scroll;
  }
}
function scroll(e) {
  e.preventDefault();
  var id = this.getAttribute('href').replace('#', '');
  var target = document.getElementById(id);
  var targetTop = target.getBoundingClientRect().top;
  if (target.id === "home") {
    var home = document.getElementById(id).getBoundingClientRect().top;
    if (scrollY === 0) {
      animateScroll(targetTop - home);
    } else {
      animateScroll(targetTop + home);
    }
  } else {
    animateScroll(targetTop);
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
function onScrollHeaderChange() {
  let projects = document.getElementById("projects");
  let projectsTop = projects.offsetTop;
  let header = document.getElementById("header-wrapper");
  let home = document.getElementById("home");
  var currentScrollY = 0;
  document.getElementById("menu-bars").addEventListener("click", function(){
    currentScrollY = scrollY;
  }) 
  window.onscroll = function () {
    if(currentScrollY != scrollY){
      document.getElementById("navbar").classList.remove("nav-display");
      document.getElementById("menu-bars").classList.remove("change");
    }
    // if scroll come at the middle of home section 
    if (scrollY >= projectsTop - (home.offsetHeight / 2)) {
      // add no-height class to header so i can add later header-fixed and animation 
      header.classList.add("no-height");
      // if scroll is in the position of home section height
      if (scrollY >= home.offsetHeight - 20) {
        // add header fixed and animation
        header.classList.add("header-fixed");
        header.classList.add("header-animation");
      } else {
        // remove animation
        header.classList.remove("header-animation");
      }
    } else {
      // remove fixed header and no height
      header.classList.remove("header-fixed");
      header.classList.remove("no-height");
    }
  }
}
$(document).ready(function(){
  var offset  = $(window).height() / 2 + 30;
  $(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();
		// Assign active class to nav links while scolling
		$('.section').each(function(i) {
      if ($(this).position().top - offset <= scrollDistance) {
        $('#nav-links a.active').removeClass('active');
        $('#nav-links a').eq(i).addClass('active');
      }
		});
  }).scroll();
});
function showOnLoad() {
  let home = document.getElementById("profile");
  // let skills = document.getElementById("skills");
  window.addEventListener("load", () => {
    if (home) {
      home.classList.add("home-expand");
      // skills.classList.add("skills-expand");
    }
  })
}

