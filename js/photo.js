const firstImg = document.querySelector(".photo_img:first-child"),
  lastImg = document.querySelector(".photo_img:last-child");
const SHOWING = "showing";

function nextClick() {
  const currentImg = document.querySelector(`.${SHOWING}`);
  if (currentImg) {
    currentImg.classList.remove(SHOWING);
    const nextImg = currentImg.nextElementSibling;
    if (nextImg) {
      nextImg.classList.add(SHOWING);
    } else {
      alert("마지막 이미지입니다.");
      lastImg.classList.add(SHOWING);
    }
  }
}

function prevClick() {
  const currentImg = document.querySelector(`.${SHOWING}`);
  if (currentImg) {
    currentImg.classList.remove(SHOWING);
    const prevImg = currentImg.previousElementSibling;
    if (prevImg) {
      prevImg.classList.add(SHOWING);
    } else {
      alert("첫번째 이미지입니다.");
      firstImg.classList.add(SHOWING);
    }
  }
}
