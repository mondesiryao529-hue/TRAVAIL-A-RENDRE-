const Client = 'Awa';
const Produit = 'Ordinateur';
const Prix_unitaire = 250000;
const Quantité = 2;
const Frais_de_livraison = 5000;
const Taux_de_TVA = 0.18;
const Montant_total_des_produits = Prix_unitaire*Quantité
const Montant_de_la_TVA = Montant_total_des_produits*Taux_de_TVA
const Montant_total_TTC = Montant_total_des_produits + Montant_de_la_TVA
const Montant_final_à_payer = Montant_total_TTC + Frais_de_livraison
const Prix_moyen_d_un_produit = Prix_unitaire + Montant_de_la_TVA
const remise_fixe = Montant_final_à_payer-10000 
console.log('===== REÇU DE COMMANDE ====='),
console.log('Client :', Client);
console.log('Produit :', Produit);
console.log('Prix unitaire :', Prix_unitaire, 'FCFA');
console.log('quantité :', Quantité);
console.log();
console.log('Montant total des produits :', Montant_total_des_produits,'FCFA');
console.log('Montant de la TVA sur les produits :', Montant_de_la_TVA,'FCFA');
console.log('Montant total TTC :', Montant_total_TTC,'FCFA');
console.log('Montant final à payer :',Montant_total_TTC + Frais_de_livraison,'FCFA');
console.log('Montant de remise fixe :', remise_fixe, 'FCFA');
console.log();
console.log("Prix moyen d'un produit :", Prix_moyen_d_un_produit,'FCFA');
console.log('le type de client est :', typeof Client);
console.log('le type de produit est :', typeof Produit);
console.log('le type de prix unitaire est :', typeof Prix_unitaire);
console.log('le type de quantité est :', typeof Quantité);
console.log('le type de frais de livraison est :', typeof Frais_de_livraison);
console.log('le type de taux de TVA est :', typeof Taux_de_TVA);




