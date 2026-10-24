//Déclaration des variables
const budget = 20000;
const prix_cahier = 1500;
const prix_stylo = 500;
let quantite_cahier = 4;
let quantite_stylo = 3;
let montant_cahier = quantite_cahier * prix_cahier;
let montant_stylo = quantite_stylo * prix_stylo;
let montant_total = montant_cahier + montant_stylo;
//Execution
console.log();
console.log("===== CAISSE =====");
console.log("Cahiers:" , montant_cahier,"FCFA");
console.log("Stylos:", montant_stylo,"FCFA");
console.log("Total:", montant_total,"FCFA");
console.log("Budget:", 20000,"FCFA");
//Utilisation de la conditon "if"
if (montant_total <= budget){;
    console.log("Budget suffisant");
} else {console.log("Budget insuffisant")};
//Utilisation de la boucle "while"
console.log();
let i =1;
while(i<=5){;
    console.log("Achat numéro", i++);
};
