const lightBtn = document.querySelector(".light_btn"),
  container = document.querySelector(".container"),
  photoContainer = document.querySelector(".photo_container"),
  navBtn = document.querySelectorAll(".about_nav_btn")[0],
  navBtn2 = document.querySelectorAll(".about_nav_btn")[1],
  navBtn3 = document.querySelectorAll(".about_nav_btn")[2],
  navBtn4 = document.querySelectorAll(".about_nav_btn")[3],
  navBtn5 = document.querySelectorAll(".about_nav_btn")[4],
  active = document.querySelector(".active"),
  aboutSection = document.querySelector(".about_section"),
  aboutSectionHeader = document.querySelector(".about_section_header_box");

function init() {
  container.style.background = "rgb(236, 236, 236)";
}

init();

function light() {
  if (container.style.backgroundColor == "rgb(236, 236, 236)") {
    container.style.background = "#222";
    navBtn.style.color = "yellow";
    navBtn2.style.color = "white";
    navBtn3.style.color = "white";
    navBtn4.style.color = "white";
    navBtn5.style.color = "white";
    active.style.color = "yellow";
    aboutSection.style.background = "black";
    aboutSectionHeader.style.color = "white";
    document.querySelector(".about_main_title_git").style.color = "white";
  } else {
    window.location.reload();
    /*container.style.background = "#ececec";
    navBtn.style.color = "black";
    navBtn2.style.color = "black";
    navBtn3.style.color = "black";
    navBtn4.style.color = "black";
    navBtn5.style.color = "black";
    active.style.color = "tomato";
    aboutSection.style.background = "white";
    aboutSectionHeader.style.color = "black";
    document.querySelector(".about_main_title_git").style.color = "black";
    */
  }
}

function photoLight() {
  photoContainer.style.background = "#222";
  navBtn.style.color = "white";
  navBtn2.style.color = "white";
  navBtn3.style.color = "white";
  navBtn4.style.color = "white";
  navBtn5.style.color = "white";
  active.style.color = "yellow";
}
