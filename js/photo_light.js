const photoContainer = document.querySelector(".photo_container"),
  navBtn = document.querySelectorAll(".about_nav_btn")[0],
  navBtn2 = document.querySelectorAll(".about_nav_btn")[1],
  navBtn3 = document.querySelectorAll(".about_nav_btn")[2],
  navBtn4 = document.querySelectorAll(".about_nav_btn")[3],
  navBtn5 = document.querySelectorAll(".about_nav_btn")[4],
  leftBtn = document.querySelector(".photo_left_btn"),
  rightBtn = document.querySelector(".photo_right_btn"),
  active = document.querySelector(".active");

function init() {
  photoContainer.style.background = "rgb(236, 236, 236)";
}

init();

function photoLight() {
  if (photoContainer.style.backgroundColor == "rgb(236, 236, 236)") {
    photoContainer.style.background = "#222";
    navBtn.style.color = "yellow";
    navBtn2.style.color = "white";
    navBtn3.style.color = "white";
    navBtn4.style.color = "white";
    navBtn5.style.color = "white";
    leftBtn.style.color = "white";
    rightBtn.style.color = "white";
    active.style.color = "yellow";
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
