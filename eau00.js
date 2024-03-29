//Créez un programme qui affiche toutes les différentes combinaisons possibles de trois chiffres dans l'odre croissant, dans l'ordre croissant. La répétition est volontaire.

//Exemples d'utilisation :
//012, 013, 014, 015, 016, 017, 018, 019, 023, 024, ... , 789
// 987 n'est pas là parce que 789 est présent
//020 n'est pas là parce que 0 apparaît deux fois
//000 n'est pas là parce que cette combinaison ne comporte pas exclusivement des chiffres différents les uns des autres.

for (let i = 0; i <= 9; i++) {
    for (let j = i; j <= 9; j++) {
      for (let k = j; k <= 9; k++) {
        if (i === j && j === k) {
          // Les trois chiffres sont identiques, ignore cette combinaison
          continue;
        } else if (i === j || j === k) {
          // L'un des chiffres se répète, ignore cette combinaison
          continue;
        }
        
        // Afficher la combinaison de trois chiffres (i, j, k) dans l'ordre croissant
        console.log("" + i + j + k);
      }
    }
  }
