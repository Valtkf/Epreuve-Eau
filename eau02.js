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
const arg = process.argv.splice(2);


let reverse =()=> {
    for (let i = arg.length; i>=1; i-- ) {
        console.log(arg[i-1]);
    }
}

if (!argument) {
    console.log ("Veuillez rentrer des arguments");
    process.exit()
}

reverse(arg)
