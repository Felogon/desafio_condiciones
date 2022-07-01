var main = document.getElementById("main");
var form = document.getElementById("form");
var allNumber = changeSelect();

numberOne.addEventListener("change", changeSelect);
numberTwo.addEventListener("change", changeSelect);
numberThree.addEventListener("change", changeSelect);

unlock.onclick = function () {
  if (allNumber == "911") {
    unlock.value = "Password 1 correcto";
    form.style.backgroundColor = "green";
  } else if (allNumber == "714") {
    unlock.value = "Password 2 correcto";
    form.style.backgroundColor = "green";
  } else {
    unlock.value = "Password incorrecto";
    form.style.backgroundColor = "red ";
  }
};

function changeSelect() {
  numberOne.value = numberOne.value.toUpperCase();
  numberTwo.value = numberTwo.value.toUpperCase();
  numberThree.value = numberThree.value.toUpperCase();
  allNumber = numberOne.value + numberTwo.value + numberThree.value;
  return allNumber.toString;
}
