const btns = document.querySelectorAll(".acc__item-title");
const text = document.querySelectorAll(".acc__item-text");


for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("mousedown", mouseDown);
  btns[i].addEventListener("mouseup", mouseUp);
  btns[i].addEventListener("click", slideDown);
  
}

function slideDown(e) {

  
  let btn = e.target;
  let textElem = btn.nextElementSibling;
  if (textElem.classList.length < 2) {
    for (let i = 0; i < text.length; i++) {
      text[i].classList.remove("acc__item-text--active");
    }
    textElem.classList.add("acc__item-text--active");
  } else {
    textElem.classList.remove("acc__item-text--active");
  }

  for (let i = 0; i < text.length; i++) {
    if (text[i].classList.contains("acc__item-text--active")) {
//==========================================================================================================
// Благодаря scrollHeight.
// height будет в пикселях, а не в значении auto, что позволяет анимировать высоту.
//==========================================================================================================
      text[i].style.height = text[i].scrollHeight + 50 + "px"
    } else {
      text[i].style.height = "0";
    }
  }

}

function mouseDown(e) {
  let btn = e.target;
  btn.style.background = "#02240c";
}

function mouseUp(e) {
  let btn = e.target;
  btn.style.background = "#19572a";
}
