let slideIndex = 0;

let carousel = () => {
  let x = document.getElementsByClassName("hero-img-slide");
  console.log(x);

  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) slideIndex = 1;
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 5000);
};

carousel();
