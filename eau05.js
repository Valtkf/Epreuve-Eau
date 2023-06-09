/* Créez un programme qui détermine si une chaîne de caractère se trouve dans une autre.


Exemples d’utilisation :
$> python exo.py bonjour jour
true


$> python exo.py bonjour joure
false


$> python exo.py 42
error

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/

const research = (subtext, text) => {
    let sizeSubtext = subtext.length;
    let sizeText = text.length;
  
    for (let i = 0; i <= sizeText - sizeSubtext; i++) {
      let j = 0;
      while (j < sizeSubtext && text[i + j] === subtext[j]) {
        j++;
      }
  
      // Vérifie si nous avons trouvé une correspondance complète
      if (j === sizeSubtext) {
        return true;
      }
    }
  
    return false;
  }
  
  const arg1 = process.argv[2].split('');
  const arg2 = process.argv[3].split('');
  
  console.log(research(arg1, arg2));
