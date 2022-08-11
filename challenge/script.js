
let resultado = document.querySelector('textarea');
let text = document.getElementById("text");
let btn = document.getElementById("btn");
let resolve = document.getElementById("resolve");
let copia = document.getElementById('copy');
let doll = document.getElementById('doll');
let h3 = document.getElementById('h3');
let p = document.getElementById('p');


function containsSpecialChars(str) {
  const specialChars = `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`;

  const result = specialChars.split("").some((specialChar) => {
    if (str.includes(specialChar)) {
      return true;
    }

    return false;
  });

  return result;
}
function upperCase(str) {
  let texto = str.split("");
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === texto[i].toUpperCase()) {
      return true;
    } else {
      return false;
    }
  }
}

btn.addEventListener("click", () => {
  let texto = text.value;
  text.placeholder = "Ingrese su texto aqui";
  if (containsSpecialChars(texto) !== false || upperCase(texto) !== false) {
    alert("Rember no Uppercase or special characters");
  } else {
    let final = texto
      .replace(/e/g, "enter")
      .replace(/o/g, "ober")
      .replace(/i/g, "imes")
      .replace(/u/g, "utaf")
      .replace(/a/g, "ai");
    h3.style.display = 'none';
    p.style.display = 'none';
    doll.style.opacity = 0;
    copia.style.display = 'block';
    resultado.style.display = "block";
    resultado.value = final;
  }
  
});

function copy() {
  let copyDiv = resultado;
  copyDiv.select();
  copyDiv.setSelectionRange(0, 9999);
  document.execCommand("copy");
};


copia.addEventListener('click', copy);


resolve.addEventListener("click", () => {
  let textiar = text.value;
  if (containsSpecialChars(textiar) !== false || upperCase(textiar) !== false) {
    alert("Rember no Uppercase or special characters");
  } else{
  let desencriptado = textiar
    .replace(/enter/g, "e")
    .replace(/ober/g, "o")
    .replace(/imes/g, "i")
    .replace(/utaf/g, "u")
    .replace(/ai/g, "a");
   resultado.value = desencriptado;
  }
});
