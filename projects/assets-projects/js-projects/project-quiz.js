let boutons = document.querySelectorAll(".answer");
let p = document.createElement("p");
p.id = "resultat";
let count = 0;

let reponseJusteCourante = "";
let btnSuivantCourant = null;

// Fonction qui premet de vérifier la réponse et de retourner un message ainsi que d'afficher le bouton suivant si la réponse est bonne

function reponseQuiz(str, btn, next) {
  if (btn.textContent == str) {
    p.textContent = "Bonne Réponse !";
    p.style.backgroundColor = "white";
    p.style.color = "#2e8b57";
    boutons.forEach((btn1) => {
      btn1.setAttribute("disabled", "true");
    });
    count++;
    document.querySelector(".quiz-box").appendChild(p);
  } else if (btn.textContent != str) {
    p.textContent = "Mauvaise reponse !";
    p.style.backgroundColor = "black";
    p.style.color = "#c0392b";
    count--;
    document.querySelector(".quiz-box").appendChild(p);
  }
  document.querySelectorAll(".quiz-box").forEach((quizz) => {
    quizz.appendChild(p);
    if (p.textContent == "Bonne Réponse !") {
      if (next === suivant20) {
        next.textContent = "Fin";
      } else {
        next.textContent = "Question suivante";
      }

      quizz.appendChild(next);
    }
  });
}

function questionSuivant(
  question,
  reponse1,
  reponse2,
  reponse3,
  btn7,
  reponseJuste,
  btn3
) {
  p.remove();
  questionAremplir.textContent = question;
  boutons[0].textContent = reponse1;
  boutons[1].textContent = reponse2;
  boutons[2].textContent = reponse3;

  btn7.remove();
  boutons.forEach((btn1) => {
    btn1.removeAttribute("disabled");
  });

  boutons = document.querySelectorAll(".answer");

  reponseJusteCourante = reponseJuste;
  btnSuivantCourant = btn3;
}

boutons.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (reponseJusteCourante && btnSuivantCourant) {
      reponseQuiz(reponseJusteCourante, this, btnSuivantCourant);
    }
  });
});

let questionAremplir = document.querySelector("#question");

let suivant1 = document.createElement("button");
suivant1.classList.add("suivant");

reponseJusteCourante = "Paris";
btnSuivantCourant = suivant1;

questionAremplir.textContent = "Quelle est la capitale de la France ?";
boutons[0].textContent = "Lyon";
boutons[1].textContent = "Paris";
boutons[2].textContent = "Marseille";

// QUESTION 2

let suivant2 = document.createElement("button");
suivant2.classList.add("suivant");

suivant1.addEventListener("click", function () {
  questionSuivant(
    "Quelle est la capitale de l'Italie ?",
    "Milan",
    "Rome",
    "Turin",
    suivant1,
    "Rome",
    suivant2
  );
});

// QUESTION 3

let suivant3 = document.createElement("button");
suivant3.classList.add("suivant");

suivant2.addEventListener("click", function () {
  questionSuivant(
    "Quelle est la capitale de l'Allemagne ?",
    "Munich",
    "Dortmund",
    "Berlin",
    suivant2,
    "Berlin",
    suivant3
  );
});

// QUESTION 4

let suivant4 = document.createElement("button");
suivant4.classList.add("suivant");

suivant3.addEventListener("click", function () {
  questionSuivant(
    "Quelle est la capitale de l'Espagne ?",
    "Madrid",
    "Barcelone",
    "Valence",
    suivant3,
    "Madrid",
    suivant4
  );
});

// QUESTION 5

let suivant5 = document.createElement("button");
suivant5.classList.add("suivant");

suivant4.addEventListener("click", function () {
  questionSuivant(
    "Quelle est la capitale du Portugal ?",
    "Porto",
    "Lisbonne",
    "Coimbra",
    suivant4,
    "Lisbonne",
    suivant5
  );
});

// QUESTION 6

let suivant6 = document.createElement("button");
suivant6.classList.add("suivant");

suivant5.addEventListener("click", function () {
  questionSuivant(
    "Quelle est la capitale de la Belgique ?",
    "Anvers",
    "Liège",
    "Bruxelles",
    suivant5,
    "Bruxelles",
    suivant6
  );
});

// QUESTION 7

let suivant7 = document.createElement("button");
suivant7.classList.add("suivant");

suivant6.addEventListener("click", function () {
  questionSuivant(
    "Quelle est la capitale des Pays-Bas ?",
    "Rotterdam",
    "Amsterdam",
    "Utrecht",
    suivant6,
    "Amsterdam",
    suivant7
  );
});

// QUESTION 8

let suivant8 = document.createElement("button");
suivant8.classList.add("suivant");

suivant7.addEventListener("click", function () {
  questionSuivant(
    "Quelle est la capitale de la Suède ?",
    "Göteborg",
    "Malmö",
    "Stockholm",
    suivant7,
    "Stockholm",
    suivant8
  );
});

// QUESTION 9

let suivant9 = document.createElement("button");
suivant9.classList.add("suivant");

suivant8.addEventListener("click", function () {
  questionSuivant(
    "Quelle est la capitale de la Norvège ?",
    "Bergen",
    "Oslo",
    "Stavanger",
    suivant8,
    "Oslo",
    suivant9
  );
});

// QUESTION 10

let suivant10 = document.createElement("button");
suivant10.classList.add("suivant");

suivant9.addEventListener("click", function () {
  questionSuivant(
    "Quelle est la capitale du Danemark ?",
    "Aarhus",
    "Odense",
    "Copenhague",
    suivant9,
    "Copenhague",
    suivant10
  );
});

// QUESTION 11

let suivant11 = document.createElement("button");
suivant11.classList.add("suivant");

suivant10.addEventListener("click", function () {
  questionSuivant(
    "Quelle est la capitale de la Suisse ?",
    "Genève",
    "Lausanne",
    "Berne",
    suivant10,
    "Berne",
    suivant11
  );
});

// QUESTION 12

let suivant12 = document.createElement("button");
suivant12.classList.add("suivant");

suivant11.addEventListener("click", function () {
  questionSuivant(
    "Quelle est la capitale de la Finlande ?",
    "Helsinki",
    "Tampere",
    "Turku",
    suivant11,
    "Helsinki",
    suivant12
  );
});

// QUESTION 13

let suivant13 = document.createElement("button");
suivant13.classList.add("suivant");

suivant12.addEventListener("click", function () {
  questionSuivant(
    "Quelle est la capitale de la Russie ?",
    "Saint-Pétersbourg",
    "Mouscou",
    "Kazan",
    suivant12,
    "Mouscou",
    suivant13
  );
});

// QUESTION 14

let suivant14 = document.createElement("button");
suivant14.classList.add("suivant");

suivant13.addEventListener("click", function () {
  questionSuivant(
    "Quelle est la capitale du Canada ?",
    "Toronto",
    "Montréal",
    "Ottawa",
    suivant13,
    "Ottawa",
    suivant14
  );
});

// QUESTION 15

let suivant15 = document.createElement("button");
suivant15.classList.add("suivant");

suivant14.addEventListener("click", function () {
  questionSuivant(
    "Quelle est la capitale des États-Unis ?",
    "Washington D.C.",
    "Los Angeles",
    "New York",
    suivant14,
    "Washington D.C.",
    suivant15
  );
});

// QUESTION 16

let suivant16 = document.createElement("button");
suivant16.classList.add("suivant");

suivant15.addEventListener("click", function () {
  questionSuivant(
    "Quelle est la capitale du Brésil ?",
    "Rio de Janeiro",
    "São Paulo",
    "Brasília",
    suivant15,
    "Brasília",
    suivant16
  );
});

// QUESTION 17

let suivant17 = document.createElement("button");
suivant17.classList.add("suivant");

suivant16.addEventListener("click", function () {
  questionSuivant(
    "Quelle est la capitale de l'Argentine ?",
    "Córdoba",
    "Buenos Aires",
    "Rosario",
    suivant16,
    "Buenos Aires",
    suivant17
  );
});

// QUESTION 18

let suivant18 = document.createElement("button");
suivant18.classList.add("suivant");

suivant17.addEventListener("click", function () {
  questionSuivant(
    "Quelle est la capitale de l'Australie ?",
    "Sydney",
    "Melbourne",
    "Canberra",
    suivant17,
    "Canberra",
    suivant18
  );
});

// QUESTION 19

let suivant19 = document.createElement("button");
suivant19.classList.add("suivant");

suivant18.addEventListener("click", function () {
  questionSuivant(
    "Quelle est la capitale de la Chine ?",
    "Shangai",
    "Pékin",
    "Hong Kong",
    suivant18,
    "Pékin",
    suivant19
  );
});

// QUESTION 20

let suivant20 = document.createElement("button");
suivant20.classList.add("suivant");

suivant19.addEventListener("click", function () {
  questionSuivant(
    "Quelle est la capitale du Japon ?",
    "Kyoto",
    "Osaka",
    "Tokyo",
    suivant19,
    "Tokyo",
    suivant20
  );
});

let resultatjs = document.querySelector("#resultat-final");

suivant20.addEventListener("click", function () {
  if (count > 15) {
    resultatjs.textContent = `Wow, ${count}/20. On vous appelle le maître du quiz maintenant !`;
  } else if (count > 10 && count <= 15) {
    resultatjs.textContent = `Pas mal du tout ! ${count} sur 20. Encore un petit effort pour atteindre la perfection.`;
  } else if (count <= 10 && count > 0) {
    resultatjs.textContent = `${count} points ? Bon, au moins ce n’est pas zéro ! 😅`;
  } else {
    resultatjs.textContent = `${count} points... On ne peut que monter à partir d’ici !`;
  }
  document.querySelector(".quiz-box").style.opacity = "0.5";
  resultatjs.style.opacity = "1";
  document.querySelector("#resultat-screen").style.display = "block"
  document.querySelector("#resultat-screen").style.animation = "apparition 2s";
  document.querySelector("#resultat-screen").style.padding = "0 5px";
});
