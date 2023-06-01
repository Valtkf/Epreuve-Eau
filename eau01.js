//Créez un programme qui affiche toutes les différentes combinaisons de deux nombre entre 00 et 99 dans l’ordre croissant.
//Exemples d’utilisation :
//00 01, 00 02, 00 03, 00 04, ... , 00 99, 01 02, ... , 97 99, 98 99

for (let i = 0; i <= 9; i++) {
  for (let j = 0; j <= 9; j++) {
    const startK = (i === 0 && j === 0) ? 1 : 0;
    for (let k = startK; k <= 9; k++) {
      for (let l = 0; l <= 9; l++) {
        console.log(`${i}${j} ${k}${l}`);
      }
    }
  }
}
