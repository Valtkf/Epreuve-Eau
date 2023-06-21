/* Créez un programme qui trie une liste de nombres. Votre programme devra implémenter l’algorithme du tri par sélection.

Vous utiliserez une fonction de cette forme (selon votre langage) :
my_select_sort(array) {
	# votre algorithme
	return (new_array)
}


Exemples d’utilisation :
$> python exo.py 6 5 4 3 2 1
1 2 3 4 5 6


$> python exo.py test test test
error

Afficher error et quitter le programme en cas de problèmes d’arguments.


Wikipedia vous présentera une belle description de cet algorithme de tri. */
function selectionSort(args) {
  const array = [];

  // Convertir les arguments en nombres, en vérifiant si chaque élément est un nombre valide
  for (let i = 0; i < args.length; i++) {
    const number = Number(args[i]);

    if (isNaN(number)) {
      return "Erreur";
    }

    array.push(number);
  }

  for (let i = 0; i < array.length - 1; i++) {
    let indexMin = i;

    // Trouver l'indice de l'élément minimum dans le sous-tableau non trié
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
    }

    // Échanger l'élément minimum avec l'élément à la position courante
    if (indexMin !== i) {
      swap(array, i, indexMin);
    }
  }

  return array;
}

function swap(array, index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

const args = process.argv.slice(2);
const sortedArray = selectionSort(args);
console.log(sortedArray);
