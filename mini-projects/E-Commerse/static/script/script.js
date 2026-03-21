let slideIndex = 0;

let carousel = () => {
  let x = document.getElementsByClassName("hero-img-slide");
  const dots = document.querySelectorAll(".dot");

  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) slideIndex = 1;
  x[slideIndex - 1].style.display = "block";
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  dots[slideIndex - 1].classList.add("active");
  setTimeout(carousel, 5000);
};

carousel();
