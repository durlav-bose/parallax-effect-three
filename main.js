let text = document.querySelector(".para-main")
let card = document.querySelector(".card")
window.addEventListener("scroll", () => {
  let y = text.getBoundingClientRect().top;
  let c = card.getBoundingClientRect().top;
  let height = window.innerHeight
  console.log('y :>> ', y);
  console.log('height :>> ', height);
  // console.log('c :>> ', c);
  let x = (y-height)/100;
  let z = (c-height)/100;
  // console.log('value :>> ', x);
  text.style.transform = `translateX(${x+10}%) scale(1.1)`
  text.style.transition = `transform .4s ease-in-out`
  card.style.transform = `translateX(${z*5-2}%)`
  card.style.transition = `transform .4s ease-in-out`
})