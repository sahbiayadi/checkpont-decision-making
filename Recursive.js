
/*fibonacci*/
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Exemple d'utilisation de la fonction fibonacci
let n = parseInt(prompt("Entrez un nombre pour obtenir le nième nombre de Fibonacci : "));
console.log("Le", n + "ème nombre de Fibonacci est", fibonacci(n));

/*palindrom*/

function estPalindrome(chaine) {
    // Fonction pour nettoyer la chaîne (ignorer les espaces, la ponctuation et les majuscules)
    function nettoyerChaine(chaine) {
        return chaine.toLowerCase().replace(/[^a-z0-9]/g, '');
    }

    // Fonction récursive pour vérifier si la chaîne est un palindrome
    function verifierPalindrome(chaine) {
        if (chaine.length <= 1) {
            return true;
        } else if (chaine[0] !== chaine[chaine.length - 1]) {
            return false;
        } else {
            return verifierPalindrome(chaine.slice(1, chaine.length - 1));
        }
    }

    return verifierPalindrome(nettoyerChaine(chaine));
}

/* Exemple d'utilisation de la fonction estPalindrome */
let mot = prompt("Entrez une chaîne pour vérifier si c'est un palindrome : ");
if (estPalindrome(mot)) {
    console.log("'" + mot + "'", "est un palindrome.");
} else {
    console.log("'" + mot + "'", "n'est pas un palindrome.");
}

/*Puissance*/

function puissance(base, exposant) {
    // Cas de base : si l'exposant est égal à 0, le résultat est toujours 1
    if (exposant === 0) {
        return 1;
    }
    // Cas de base : si l'exposant est égal à 1, le résultat est la base elle-même
    else if (exposant === 1) {
        return base;
    }
    // Cas récursif : si l'exposant est positif, on récursive en réduisant l'exposant à chaque itération
    else if (exposant > 0) {
        return base * puissance(base, exposant - 1);
    }
    // Cas récursif : si l'exposant est négatif, on récursive avec l'inverse de la base et en réduisant l'exposant à chaque itération
    else {
        return 1 / (base * puissance(base, -exposant - 1));
    }