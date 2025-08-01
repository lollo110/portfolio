let quotes = [
  "L'habit ne fait pas le moine",
  "Qui vole un oeuf vole un boeuf",
  "Pierre qui roule n'amasse pas mousse",
  "On ne chie pas là où on mange",
  "Philippe je sais où tu te caches",
  "Tu es un sorcier Harry !",
  "C'est pas faux",
  "Il ne faut pas vendre la peau de l'ours avant de l'avoir tué",
  "C'est une bonne situation ça scribe ?",
  "T'as pas la lumiéres à tous les étages",
  "E=Mc²",
  "T'es une fille t'as pas de shampooing",
  "L'année va passer vite",
];

let input = document.querySelector("#add-quote-input");

let addQuote = document.querySelector("#add-quote-btn");

let copy = document.querySelector("#copy-quote");

let newQuote = document.querySelector("#new-quote");

let parag = document.querySelector("#quote");

let bg = document.querySelector("#change-bg");

let count = 0;

let container = document.querySelector("div");

container.style.position = "relative";

let span = document.createElement("span");

function getNewQuotes() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

function getRandomColor() {
  return [
    Math.round(Math.random() * 255),
    Math.round(Math.random() * 255),
    Math.round(Math.random() * 255),
  ];
}

function addQuotes(citation, array1) {
  array1.push(citation);
}

function verifQuotes(citation, array1) {
    if (!citation){
        alert('Vous ne passerez pas !');
        return;
    }
    addQuotes(citation, array1);
}

newQuote.addEventListener("click", function () {

    let citationActuelle = parag.textContent;
    let nouvelleCitation = parag.textContent = getNewQuotes();

    while(citationActuelle == nouvelleCitation){
        nouvelleCitation = parag.textContent = getNewQuotes();
    }

  parag.textContent = getNewQuotes();



  parag.style.animation = "blink 2s";

  setTimeout(() => {
    parag.style.animation = "";
  }, 2000);

  count++;

  span.textContent = count;
  container.appendChild(span);

  span.style.position = "absolute";
  span.style.fontSize = "40px";
  span.style.top = "15px";
  span.style.left = "20px";
});

bg.addEventListener("click", function () {
  document.body.style.background = `rgb(${getRandomColor()})`;
});

copy.addEventListener("click", function () {
  navigator.clipboard.writeText(parag.textContent);
  let originText = parag.textContent;
  parag.textContent = "Citation copiée !";

  setTimeout(() => {
    parag.textContent = originText;
  }, 2000);
});

addQuote.addEventListener("click", function () {
  verifQuotes(input.value, quotes);
  input.value = "";
});
