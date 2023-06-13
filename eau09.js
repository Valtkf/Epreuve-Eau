/*Créez un programme qui affiche toutes les valeurs comprises entre deux nombres dans l’ordre croissant. Min inclus, max exclus.


Exemples d’utilisation :
$> python exo.py 20 25
20 21 22 23 24


$> python exo.py 25 20
20 21 22 23 24

$> python exo.py hello
error

Afficher error et quitter le programme en cas de problèmes d’arguments.*/

const displayNumbers = (min, max) => {
    // Vérification de la validité des arguments
    if (isNaN(min) || isNaN(max)) {
      console.error("Erreur : les arguments doivent être des nombres valides.");
      return;
    }
  
    // Vérification de l'ordre des nombres
    const [start, end] = min <= max ? [min, max] : [max, min];
  
    // Affichage des nombres dans l'ordre croissant
    for (let i = start; i < end; i++) {
      console.log(i);
    }
  };
  
  // Vérification des arguments
  if (process.argv.length < 4) {
    console.error("Erreur : veuillez fournir deux nombres en arguments.");
  } else {
    const min = parseInt(process.argv[2]);
    const max = parseInt(process.argv[3]);
    displayNumbers(min, max);
  }
