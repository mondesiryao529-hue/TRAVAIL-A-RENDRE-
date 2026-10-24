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
//BONUS: Les quantités de stylos et cahiers ont été modifiées afin que le total dépasse le budget et vérifie que le message change.  
//Déclaration des variables
console.log();
const budget_2 = 20000;
const prix_cahier_2 = 1500;
const prix_stylo_2 = 500;
let quantite_cahier_2 = 14;
let quantite_stylo_2 = 13;
let montant_cahier_2 = quantite_cahier_2 * prix_cahier_2;
let montant_stylo_2 = quantite_stylo_2 * prix_stylo_2;
let montant_total_2 = montant_cahier_2 + montant_stylo_2;
//Execution
console.log();
console.log("===== CAISSE =====");
console.log("Cahiers:" , montant_cahier_2,"FCFA");
console.log("Stylos:", montant_stylo_2,"FCFA");
console.log("Total:", montant_total_2,"FCFA");
console.log("Budget:", 20000,"FCFA");
//Utilisation de la conditon "if"
if (montant_total_2 <= budget){;
    console.log("Budget suffisant");
} else {console.log("Budget insuffisant")};

