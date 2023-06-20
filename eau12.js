/*Créez un programme qui trie une liste de nombres. Votre programme devra implémenter l’algorithme du tri à bulle.

Vous utiliserez une fonction de cette forme (selon votre langage) :
my_bubble_sort(array) {
	# votre algorithme
	return (new_array)
}


Exemples d’utilisation :
$> python exo.py 6 5 4 3 2 1
1 2 3 4 5 6


$> python exo.py test test test
error

Afficher error et quitter le programme en cas de problèmes d’arguments.


Wikipedia vous présentera une belle description de cet algorithme de tri.*/

const sort = (tab) => {
  for (let i = 0; i < tab.length; i++) {
    if (isNaN(tab[i])) {
      return "Erreur: Les éléments du tableau doivent être des nombres.";
    }
  }

  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < tab.length - 1; i++) {
      if (tab[i] > tab[i + 1]) {
        let temp = tab[i];
        tab[i] = tab[i + 1];
        tab[i + 1] = temp;

        sorted = false;
      }
    }
  }

  return tab;
};

const tab = process.argv.slice(2);
const result = sort(tab);

if (typeof result === "string") {
  console.error(result);
} else {
  console.log(result);
}
