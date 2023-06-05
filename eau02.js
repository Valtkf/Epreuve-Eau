/*
Créez un programme qui affiche ses arguments reçus à l’envers.
Exemples d’utilisation :
$> python exo.py “Suis” “Je” “Drôle”
Drôle
Je
Suis
$> python exo.py ha ho
ho
ha
$> python exo.py “Bonjour 36”
Bonjour 36

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/

// variables
const argument = process.argv[2];
const arg = process.argv.splice(2);

// fonction pour inverser la chaîne de caractère
let reverse =()=> {
    for (let i = arg.length; i>=1; i-- ) {
        console.log(arg[i-1]);
    }
}

// gestion des erreurs
if (!argument) {
    console.log ("Veuillez rentrer des arguments");
    process.exit()
}

// appel de la fonction
reverse(arg)
