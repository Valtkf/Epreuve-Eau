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
const argument = process.argv[2];
const arg = process.spplice[2];

let reverseArg =()=> {
    for (let i = arg.length; i>=l; i-- ) {
        console.log(arg[i-l])
    }
}
