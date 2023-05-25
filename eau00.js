//Créez un programme qui affiche toutes les différentes combinaisons possibles de trois chiffres dans l'odre croissant, dans l'ordre croissant. La répétition est volontaire.

//Exemples d'utilisation :
//012, 013, 014, 015, 016, 017, 018, 019, 023, 024, ... , 789
// 987 n'est pas là parce que 789 est présent
//020 n'est pas là parce que 0 apparaît deux fois
//000 n'est pas à parce que cette combinaison ne comporte pas exclusivement des chiffres différents les uns des autres.

if (chiffre1 !== chiffre2 && chiffre1 !== chiffre3 && chiffre2 !== chiffre3) {
    // Afficher la combinaison de trois chiffres (i, j, k) dans l'ordre croissant 
  } 


for (let chiffre1 = 0; chiffre1 < 10; chiffre1++) {
    for (let chiffre2 = 0; chiffre2 < 10; chiffre2++) {
        for (let chiffre3 = 0; chiffre3 < 10; chiffre3++) {
            console.log(chiffre1 , chiffre2 , chiffre3);
        }
    }
    
}


