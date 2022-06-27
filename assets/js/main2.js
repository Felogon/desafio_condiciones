let botonVerificacion = document.getElementById("botonVerificacion");

botonVerificacion.onclick = function () {
  let inputSticker1 = document.getElementById("inputSticker1");
  let inputSticker2 = document.getElementById("inputSticker2");
  let inputSticker3 = document.getElementById("inputSticker3");
  let texto = "";
  console.log("vamo");
  let total =
    Number(inputSticker1.value) +
    Number(inputSticker2.value) +
    Number(inputSticker3.value);
  if (total == 0) {
    texto =
      "¡Aún no has seleccionado tus Stickers! Recuerda que puedes elegir hasta 10 :D";
  } else if (total > 10) {
    texto = "¡Te pasaste! Recuerda que el límite de stickers es de 10 :(";
  } else if (total === 10) {
    texto = "¡Disfruta tus stickers!";
  } else {
    texto = "¡Aún te quedan stickers!";
  }

  document.getElementById("texto").innerHTML = texto;
};
