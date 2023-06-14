/*Créez un programme qui affiche le premier index d’un élément recherché dans un tableau. Le tableau est constitué de tous les arguments sauf le dernier. L’élément recherché est le dernier argument. Afficher -1 si l’élément n’est pas trouvé.


Exemples d’utilisation :
$> python exo.py Ceci est le monde qui contient Charlie un homme sympa Charlie
6


$> python exo.py test test test
0

$> python exo.py test boom
-1

Afficher error et quitter le programme en cas de problèmes d’arguments.*/

const searchArgInArray = (argToIterate) => {
  const argumentToSearch = argToIterate[argToIterate.length - 1];
  for (let i = 0; i < argToIterate.length - 1; i++) {
    if (argToIterate[i] === argumentToSearch) {
      return i;
    }
    if (argToIterate === argumentToSearch) {
      return 0;
    }
  }
  return -1;
};

const argToIterate = process.argv.slice(2);
const finalResult = searchArgInArray(argToIterate);

console.log(finalResult);
