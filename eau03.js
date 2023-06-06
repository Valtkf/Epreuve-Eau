/*Créez un programme qui affiche le N-ème élément de la célèbre suite de Fibonacci. (0, 1, 1, 2) étant le début de la suite et le premier élément étant à l’index 0.


Exemples d’utilisation :
$> python exo.py 3
2
$>

Afficher -1 si le paramètre est négatif ou mauvais.
*/


// fonction
calc = ()=> {
  for (let i = 2; i < n; i = i + 1) {
    fibo[i] = fibo[i - 1] + fibo[i - 2]
  }
}

// gestion d'erreurs
if (n < 0 || isNaN) {
  console.log("erreur");
}


// parsing
const n = process.argv[2];

const fibo = new Array(n);
fibo[0] = 0
fibo[1] = 1
