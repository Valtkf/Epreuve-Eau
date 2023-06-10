/*Créez un programme qui met en majuscule une lettre sur deux d’une chaîne de caractères. Seule les lettres (A-Z, a-z) sont prises en compte.


Exemples d’utilisation :
$> python exo.py “Hello world !”
HeLlO wOrLd !


$> python exo.py 42
error

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/

const capitalLetter = () => {
   const str = process.argv.slice(2).join(" ");
   let count = 0;
   let result = "";

   for (let i=0; i<str.length; i++) {
    const character = str.charAt(i);

    
    if(/[a-zA-Z]/.test(character)) {
        let modifiedLetter = count % 2 === 0 ? character.toUpperCase() : character.toLowerCase();
        result += modifiedLetter;
        count++;
    } else {
        result += character;
    }
   }
   return result;
}


const handleErrors = () => {
if (process.argv.length < 3) {
    console.log("Veuillez fournir une chaîne de caractères en argument.");
    process.exit(1);
  }
  if (!isNaN(process.argv[2])) {
    console.log("Erreur : La chaîne de caractères ne peut pas être un nombre.");
    process.exit(1);
 }
};

handleErrors();

const finalResult = capitalLetter();
console.log(finalResult);

