/*Créez un programme qui affiche la différence minimum absolue entre deux éléments d’un tableau constitué uniquement de nombres. Nombres négatifs acceptés.


Exemples d’utilisation :
$> python exo.py 5 1 19 21
2


$> python exo.py 20 5 1 19 21
1

$> python exo.py -8 -6 4
2

Afficher error et quitter le programme en cas de problèmes d’arguments.*/

const args = process.argv.slice(2);

const validateArguments = (args) => {
  if (args.length < 2 || args.some((arg) => isNaN(parseInt(arg)))) {
    console.error("Erreur : Les arguments ne sont pas valides.");
    process.exit(1);
  }
};

const convertToNumbers = (args) => {
  return args.map((arg) => parseInt(arg));
};

const findMinAbsoluteDifference = (numbers) => {
  let minDifference = Math.abs(numbers[0] - numbers[1]);

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const difference = Math.abs(numbers[i] - numbers[j]);
      if (difference < minDifference) {
        minDifference = difference;
      }
    }
  }

  return minDifference;
};

const displayResult = (minDifference) => {
  console.log(minDifference);
};

validateArguments(args);
const numbers = convertToNumbers(args);
const minDifference = findMinAbsoluteDifference(numbers);
displayResult(minDifference);
