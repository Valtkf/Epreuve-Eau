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
  let changed;
  do {
    changed = false;
    for (let i = 0; i < tab.length - 1; i++) {
      if (isNaN(parseInt(tab[i]))) {
        console.error("Erreur");
        return;
      }
      if (parseInt(tab[i]) > parseInt(tab[i + 1])) {
        const tmp = tab[i];
        tab[i] = tab[i + 1];
        tab[i + 1] = tmp;
        changed = true;
      }
    }
  } while (changed);
};

const tab = process.argv.slice(2);
sort(tab);
console.log(tab);
