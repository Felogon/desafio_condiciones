function myFunction() {
  console.log("vamos bien");
  let bordeImg = document.getElementsByClassName("img");
  img = bordeImg[0];

  if (img.style.border == "2px solid red") {
    img.style.border = "none";
  } else {
    img.style.border = "2px solid red";
  }
}
