/*task01*/


/*Definir l'année bissextile*/
def est_bissextile(annee):
    if annee % 4 == 0:
        if annee % 100 == 0:
            if annee % 400 == 0:
                return True
            else:
                return False
        else:
            return True
    else:
        return False

annee = int(input("Entrez une année : "))
if est_bissextile(annee):
   console.log(annee, "est une année bissextile.")
else:
   console.log(annee, "n'est pas une année bissextile.")


/*definir les conditions d'age*/
age = int(input("Entrez votre âge : "))

if age <= 12:
    prix = 10
elif age >= 13 and age <= 17:
    prix = 15
else:
    prix = 20

console.log("Le prix du billet est de", prix, "$.")


/*task02*/

// Demander à l'utilisateur la température et s'il pleut ou non
let temperature = parseFloat(prompt("Quelle est la température actuelle en degrés Celsius ?"));
let isRaining = prompt("Est-ce qu'il pleut actuellement ? (Oui/Non)").toLowerCase();

// Fonction pour conseiller sur les vêtements à porter
function conseillerVetements(temperature, isRaining) {
    if (temperature >= 25) {
        if (isRaining === "oui") {
            return "Il pleut et il fait chaud. Vous devriez porter un imperméable léger et des vêtements légers.";
        } else {
            return "Il fait chaud et ensoleillé. Optez pour des vêtements légers comme des t-shirts et des shorts.";
        }
    } else if (temperature >= 15 && temperature < 25) {
        if (isRaining === "oui") {
            return "Il pleut mais il fait tempéré. Portez un manteau imperméable et des vêtements normaux.";
        } else {
            return "Le temps est agréable. Vous pouvez porter des vêtements normaux.";
        }
    } else {
        if (isRaining === "oui") {
            return "Il pleut et il fait froid. Optez pour un manteau imperméable et des vêtements chauds.";
        } else {
            return "Il fait froid mais sec. Portez des vêtements chauds comme un manteau, un pull et un pantalon.";
        }
    }
}
// Afficher le conseil sur les vêtements à porter
let conseilVetements = conseillerVetements(temperature, isRaining);
console.log(conseilVetements);