const btn = document.querySelector('button');
const spans = document.querySelectorAll('.one');
btn.addEventListener("mouseover", () => {
  console.log("hello");
  spans.forEach((span,index) => {
    span.classList.add("active");
    console.log(span);
  })
});

btn.addEventListener("mouseout", () => {
  console.log("hello");
  spans.forEach((span,index) => {
    span.classList.remove("active");
    console.log(span);
  })
});