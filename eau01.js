//Créez un programme qui affiche toutes les différentes combinaisons de deux nombre entre 00 et 99 dans l’ordre croissant.
//Exemples d’utilisation :
//00 01, 00 02, 00 03, 00 04, ... , 00 99, 01 02, ... , 97 99, 98 99

function two_numbers() {
  const combinations = [];
  for (let x = 0; x < 10; x++) {
    for (let y = x; y < 10; y++) {
      for (let a = y; a < 10; a++) {
        for (let b = a; b < 10; b++) {
          combinations.push(`${x}${y} ${a}${b}`);
        }
      }
    }
  }

  const result = combinations.join(", ");
  console.log(result);
}

two_numbers();
