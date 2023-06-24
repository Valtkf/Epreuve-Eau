console.log("Est-ce que les épreuves de l'eau ont été difficiles ?");

const eauOk = (args) => {
  if (args === "oui") {
    console.log("C'est pas grave ! Tu as réussi, c'est tout ce qui compte !");
  } else if (args === "non") {
    console.log("Ah donc tu as bu cette épreuve comme de l'eau ! HAHAHAHA !");
  } else {
    console.log("C'est oui ou non, s'il te plaît.");
  }
};

const args = process.argv[2];
eauOk(args);
