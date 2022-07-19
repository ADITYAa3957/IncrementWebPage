const counterArr = document.querySelectorAll(".counter");
const iconArr = document.querySelectorAll(".icon");
const updateValue = () => {
  for (let elem of counterArr) {
    let step = Math.ceil(+elem.getAttribute("data-tg") / 500); //we got the attribute
    //ceil values as it will encourage always increment as ceil of 0.0000000000....1 is also 1
    //while floor or round will give 0 here
    if (+elem.textContent < +elem.getAttribute("data-tg"))
    {
      elem.textContent = +elem.textContent + step;

    }
    else {
      elem.textContent = elem.getAttribute("data-tg");
      if (!elem.previousElementSibling.classList.contains("icon-final")) {
        elem.previousElementSibling.classList.add("icon-final");
      }
    }
  }
};
let cnt = 501; //number of steps to do the task
const update = () => {
  if (cnt === 0)
  cnt--;
  updateValue();
  setTimeout(update, 12);
}
update();