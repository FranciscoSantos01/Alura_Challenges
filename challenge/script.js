
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

btn.addEventListener("click", () => {
  doll.style.opacity = 0 ;
  h3.style.opacity = 0;
  p.style.opacity = 0;
  copia.style.opacity = 1;
  resultado.style.display = 'block'
  let texto = text.value;
  let array = texto;
  let now = array.split("");
  console.log(now);
  let join = [];
  text.value = " ";
  for (let i = 0; i < now.length; i++) {
    if (
      now[i] === now[i].toUpperCase() ||
      containsSpecialChars(now[i]) === true
    ) {
      if (now[i] !== " ") {
        alert("Remeber no Uppercase and special characters");
        break;
      }
      
    }
    if (now[i] === "e") {
      now[i] = "enter";
    }
    if (now[i] === "i") {
      now[i] = "imes";
    }
    if (now[i] === "a") {
      now[i] = "ai";
    }
    if (now[i] === "o") {
      now[i] = "ober";
    }
    if (now[i] === "u") {
      now[i] = "ufat";
    }
    join.push(now[i]);
  }
  let encriptado = join.join("");
  resultado.value = encriptado;
  join.length = 0;
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
  let desencriptado = textiar
    .replace(/enter/g, "e")
    .replace(/ober/g, "o")
    .replace(/imes/g, "i")
    .replace(/utaf/g, "u")
    .replace(/ai/g, "a");

   resultado.value = desencriptado;
});
