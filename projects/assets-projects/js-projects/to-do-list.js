// Je declare mes variables
// Je declare ma variable avec un tableau vide pour stocker les tâches

let listeDeTaches = [];

let input = document.querySelector("#taskInput");

let ajouterButton = document.querySelector("#addTaskButton");

let listeTaches = document.querySelector("#taskList");

// Je fais ma function pour ajouter mes tâches au tableau

function ajouterTache(string, arr) {
  let nouvelleTache = string;

  arr.push(nouvelleTache);

  console.log(arr);

  input.value = ""; // Comme ça une fois que j'ajoute  au tableau l'input retourne vide
}

// Function pour afficher mes tâches dans ma liste ul

function afficherTaches() {
  let li = document.createElement("li");
  let supp = document.createElement("button");
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("class", "green");
  supp.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
  supp.classList.add("supprim");

  listeDeTaches.forEach((e) => {
    li.textContent = e;
    li.appendChild(checkbox);
    li.appendChild(supp);
    listeTaches.appendChild(li);
  });

  supp.addEventListener("click", function () {
    supprimerTache(li);
    console.log(listeDeTaches);
  });

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      li.style.backgroundColor = "green";
      li.style.color = "white";
    } else {
      li.style.backgroundColor = "#ffffff";
      li.style.color = "black";
    }
  });
}

// Function pour supprimer élément de ma liste et mon tableau

function supprimerTache(index) {
  let text = index.textContent;

  let position = listeDeTaches.indexOf(text);

  console.log(position);

  listeDeTaches.splice(position, 1);

  index.remove();
}

// Ici j'utilise l'écouteur d'événements pour auqnd l'utilisateur click sur le boutons ajouter

ajouterButton.addEventListener("click", function () {
  if (input.value == "") {
    alert("ATTENTION VOTRE TÂCHE EST VIDE !!");
    return;
  }
  ajouterTache(input.value, listeDeTaches);
  afficherTaches();
});

// BONUS : Ici j'utilise l'écouteur d'événements pour quand l'utilisateur utilise la touche Enter

input.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    if (input.value == "") {
      alert("ATTENTION VOTRE TÂCHE EST VIDE !!");
      return;
    }
    ajouterTache(input.value, listeDeTaches);
    afficherTaches();
  }
});
