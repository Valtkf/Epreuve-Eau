/*Créez un programme qui trie les éléments donnés en argument par ordre ASCII.


Exemples d’utilisation :
$> python exo.py Alfred Momo Gilbert
Alfred Gilbert Momo


$> python exo.py A Z E R T Y
A E R T Y Z

Afficher error et quitter le programme en cas de problèmes d’arguments.*/

const errorHandling = () => {
  console.log("error");
  process.exit();
};

const insertionSort = (array) => {
  const length = array.length;

  for (let i = 1; i < length; i++) {
    let current = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = current;
  }

  return array;
};

const sortArray = () => {
  const array = process.argv.slice(2);

  const isNumberArray = array.join("").match(/^\d+$/);
  const sortedArray = isNumberArray
    ? insertionSort(array.map(Number))
    : insertionSort(array);

  console.log(sortedArray.join(" "));
};

sortArray();
