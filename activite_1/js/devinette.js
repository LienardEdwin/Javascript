/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;
//Décommentez temporairement cette ligne pour mieux vérifier le programme

//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var nombre = Number(prompt("Devinez quel chiffre est tiré au sort entre 0 et 100 ?"));
var tentative = 1; // début de tentative.
while ((nombre !== solution) && (tentative < 6)) { // Condition pour mettre fin a la boucle.
    if (nombre < solution) { // Si Le chiffre inséré est trop petit
        console.log(nombre + " est trop petit.");
    } else { // Si le chiffre inséré est trop grand
        console.log(nombre + " est trop grand.");
    }
    tentative++; // Le nombre de tentative augmente de 1
    nombre = Number(prompt("Devinez quel chiffre est tiré au sort ?"));
}
if (nombre === solution) { // Si le chiffre inséré est bon.
    console.log("Bravo la solution était bien le " + solution + "!!");
    console.log("Vous avez trouvé en " + tentative + " essais");
} else { // Si le chiffre inséré est mauvais.
    console.log("Votre dernier essais était le " + nombre)
    console.log("Vous avez perdu la solution était " + solution);
}
