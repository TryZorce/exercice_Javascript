// Exercice # 0

// À la racine du répertoire de ce projet, supprimer le dossier .git, vous pouvez exécuter la commande "git status" pour vérifier si git est initialiser ou non.
// Toujours à la racine du répertoire de ce projet, initialiser git et faites les commandes nécessaires pour pousser ce projet dans un dépot Github.
// Partager l'adresse de ce nouveau repo, contenant ce projet, au formateur.



// Exercice # 1

// - Créer une fonction Javascript avec deux constantes nommées : "address" et "zipCode", la première est une string, la seconde est un nombre, veillez à bien les typer.
// - Créer une constante nommée "addressFull" contenant la concaténation de ces deux variables, veillez à bien les typer.
// - Faire s'afficher la constante "addressFull" dans la console du navigateur.
function monAdresse() {
    const adresse:string = "40 square de l'hotel de ville Aix-Les-Bains";
    const zipCode:number = 73100;
    const adresseComplete:string = adresse + " " + zipCode;
    console.log(adresseComplete);
  }
  
  monAdresse();
  

// Exercice # 2

// - Créer une fonction Javascript avec une constante contenant un tableau de vos 5 pays favoris, veillez à bien le typer.
// - À l'aide d'une boucle, itérrer dans ce tableau et afficher chaque valeur dans la console du navigateur.

  function paysFavoris() {
    const mesPaysFavoris: string[] = ["France", "Japon", "Italie", "Canada", "Danemark"];
    for (let i = 0; i < mesPaysFavoris.length; i++) {
      console.log(mesPaysFavoris[i]);
    }
  }
  
  paysFavoris();
// 2

// Exercice # 3

// - Créer une fonction Javascript pour décomposer une string, exemple : ma phrase : "developpement", resultat souhaité : [d, e, v, e, l, o, p, p, e, m, e, n, t]
// - Le resultat est stocké dans une constante correctement typée dont vous afficherez la valeur dans la console du navigateur.



// Exercice # 4

// - Créer une fonction Javascript pour recomposer une string, exemple : ma phrase décomposée : [d, e, v, e, l, o, p, p, e, m, e, n, t], résultat souhaité : "developpement"
// - Le resultat est stockée dans une constante correctement typée dont vous afficherez la valeur dans la console du navigateur.