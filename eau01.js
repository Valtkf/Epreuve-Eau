//Créez un programme qui affiche toutes les différentes combinaisons de deux nombre entre 00 et 99 dans l’ordre croissant.
//Exemples d’utilisation :
//00 01, 00 02, 00 03, 00 04, ... , 00 99, 01 02, ... , 97 99, 98 99

for (i = 0; i<= 9; i++) {
    for (j = 0; j<= 9; j++) {
        
        for (k = 0; k<= 9; k++) {
            for (l = 0; l<= 9; l++) {
                console.log(k+""+l);
            }
        }
    }
}
