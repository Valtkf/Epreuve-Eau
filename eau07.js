/* Créez un programme qui met en majuscule la première lettre de chaque mot d’une chaîne de caractères. Les autres lettres devront être en minuscules. Les mots ne sont délimités que par un espace, une tabulation ou un retour à la ligne.


Exemples d’utilisation :
$> python exo.py “bonjour mathilde, comment vas-tu ?!”
Bonjour Mathilde, Comment Vas-tu ?!


$> python exo.py 42
error

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/

const oneCapitalLetter = () => {
    const args = process.argv.slice(2);
    const sentence = args.join(" ");
    const words = sentence.split(" ");
    const regex = /[ \t\n]/;
    
    const capitalizedSentence = sentence.replace(/\b\w/g, (match) => match.toUpperCase());

    if (args.length === 0) {
        console.log("Veuillez écrire une phrase");
    } if (regex.test(capitalizedSentence)) {
        return capitalizedSentence;
    } else { 
        console.log("erreur");
        process.exit();    
    }

    return capitalizedSentence;
}

const finalResult = oneCapitalLetter();
console.log(finalResult);
