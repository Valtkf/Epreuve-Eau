/* Créez un programme qui détermine si une chaîne de caractère se trouve dans une autre.


Exemples d’utilisation :
$> python exo.py bonjour jour
true


$> python exo.py bonjour joure
false


$> python exo.py 42
error

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/

// Vérifie si une chaîne de caractères se trouve dans une autre
const checkSubstring = (str, substring) => {
  if (typeof str !== 'string' || typeof substring !== 'string') {
    console.log('error');
    process.exit(1);
  }

  const strLength = str.length;
  const substringLength = substring.length;

  for (let i = 0; i <= strLength - substringLength; i++) {
    let j;
    for (j = 0; j < substringLength; j++) {
      if (str[i + j] !== substring[j]) {
        break;
      }
    }
    if (j === substringLength) {
      return true;
    }
  }

  return false;
};

// Récupère les chaînes de caractères à vérifier depuis les arguments de la ligne de commande
const str = process.argv[2];
const substring = process.argv[3];

// Vérifie si la sous-chaîne se trouve dans la chaîne principale
const result = checkSubstring(str, substring);

// Affiche le résultat
console.log(result);
