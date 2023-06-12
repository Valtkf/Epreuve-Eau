/* Créez un programme qui détermine si une chaîne de caractères ne contient que des chiffres.


Exemples d’utilisation :
$> python exo.py “4445353”
true


$> python exo.py 42
true

$> python exo.py “Bonjour 36”
false

Afficher error et quitter le programme en cas de problèmes d’arguments. */

const detectNumber = () => {
    const args = process.argv[2];
    const regex = /[-+]?(\d+(\.\d*)?|\.\d+)([eE][-+]?\d+)?/;

    // Vérifier si la chaîne contient des caractères spéciaux autres que des nombres
    const specialCharsRegex = /[^0-9\s]/;
    const containsSpecialChars = specialCharsRegex.test(args);

    if (containsSpecialChars || !regex.test(args)) {
        return false;
    }

    return true;
}

const result = detectNumber();

console.log(result); // Affiche true si un nombre est trouvé, false si aucun nombre n'est trouvé, ou false si des caractères spéciaux seuls autres que des nombres sont présents
