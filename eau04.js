/* Créez un programme qui affiche le premier nombre premier supérieur aunombre donné en argument

Exemples d'utilisation :
$> python exo.py 14
17
$>

Afficher -1 si le paramètre est négatif oumauvais
*/

// fonction
function nbrPremier(nbr) {
  if (nbr <= 0) {
    return -1;
  }

  // Initialisation de la liste des nombres premiers
  const primes = Array(nbr + 1).fill(true);
  primes[0] = false;
  primes[1] = false;

  // Crible d'Ératosthène pour marquer les nombres non premiers
  for (let i = 2; i <= Math.sqrt(nbr); i++) {
    if (primes[i]) {
      for (let j = i * i; j <= nbr; j += i) {
        primes[j] = false;
      }
    }
  }

  // Recherche du premier nombre premier supérieur à nbr
  let firstPrime = nbr + 1;
  while (firstPrime <= nbr || !primes[firstPrime]) {
    firstPrime++;
  }

  return firstPrime;
}

// Parsing
const input = parseInt(process.argv[2]);

// Gestion d'erreurs
if (isNaN(input) || input <= 0) {
  console.log(-1);
} else {
  // Appel de la fonction nbrPremier et affichage du résultat
  console.log(nbrPremier(input));
}
