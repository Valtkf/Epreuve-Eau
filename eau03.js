/*Créez un programme qui affiche le N-ème élément de la célèbre suite de Fibonacci. (0, 1, 1, 2) étant le début de la suite et le premier élément étant à l’index 0.


Exemples d’utilisation :
$> python exo.py 3
2
$>

Afficher -1 si le paramètre est négatif ou mauvais.
*/

// fonction
function fibonacci(nbr) {
   let n1 = 0;
   let n2 = 1;
   let somme = 0;
 
   for(let i = 2; i <= nbr; i++){
      //somme des deux derniers nombres
      somme = n1 + n2; 
      //assigner la dernière valeur à la première
      n1 = n2; 
      //attribuer la somme au dernier
      n2 = somme;
   }
 
   return nbr ? n2 : n1;
}

// parsing
const input = parseInt(process.argv[2]);

// gestion d'erreurs
if (isNaN(input) || input <= 0) {
  console.log(-1);
}

// affiche du résultat
console.log(fibonacci(input));
