//Créez un programme qui affiche toutes les différentes combinaisons de deux nombre entre 00 et 99 dans l’ordre croissant.
//Exemples d’utilisation :
//00 01, 00 02, 00 03, 00 04, ... , 00 99, 01 02, ... , 97 99, 98 99

for (let i = 00; i <= 99; i++) {
    for (let j = 00; j<= 99; j++) {
        console.log(i + " " + j);
    }
    
}
