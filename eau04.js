/* Créez un programme qui affiche le premier nombre premier supérieur aunombre donné en argument

Exemples d'utilisation :
$> python exo.py 14
17
$>

Afficher -1 si le paramètre est négatif oumauvais
*/

// fonction
function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function findNextPrime(num) {
  let nextPrime = num + 1;

  while (!isPrime(nextPrime)) {
    nextPrime++;
  }

  return nextPrime;
}

// Parsing
const input = parseInt(process.argv[2]);

// Gestion d'erreurs
if (isNaN(input) || input <= 0) {
  console.log(-1);
} else {
  // Appel de la fonction findNextPrime et affichage du résultat
  console.log(findNextPrime(input));
}
