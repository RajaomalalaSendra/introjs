// C'est ton premier jour de stage au CDI du collège du coin. Tu dois aider la bibliothécaire à faire des statistiques dans la base de données de livres du collège et elle te donne ce jeu de données pour que tu maitrises le back-office du programme.

const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 9 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 2 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 6 },
  { title: 'Les frères Karamazov', id: 450911, rented: 5 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Réalise un script script_7.js qui répondra dans la console aux questions suivantes :

//     Est-ce que tous les livres ont été au moins empruntés une fois ?
var x = 0, count = [];
while (x < books.length) {
  if (parseInt(books[x]["rented"]) > 0){
    count.push(books[x]["rented"]);
  }
  x++;
}
if (parseInt(count.length)===parseInt(books.length)) {
  console.log("Tous les livres sont déjà emprunté.");
} else {
  console.log("Il y a encore qui ne sont pas encore empruntés.");
}
//     Quel est livre le plus emprunté ?
for (var i = 0; i < books.length; i++) {
   if (parseInt(books[i]["rented"]) === parseInt(Math.max(...count) )){
    console.log(`Le livre le plus emprunté est: ${books[i]["title"]}`);
   }
 } 
//     Quel est le livre le moins emprunté ?
for (var i = 0; i < books.length; i++) {
   if (parseInt(books[i]["rented"]) === parseInt(Math.min(...count))) {
    console.log(`Le livre le moins emprunté est: ${books[i]["title"]}`);
   }
 }
//     Trouve le livre avec l'ID: 873495
var i = 0;
while (i < books.length) {
  if (parseInt(books[i]["id"]) == 873495) {
    console.log(`Le livre d'ID: 873493 est: ${books[i]["title"]}`);
  }
  i++
}
//     Supprime le livre avec l'ID: 133712
console.log("Suppression du livre avec l'ID: 133712");
var new_i = 0;
var the_books = [], popping_books = [], x, y;
while (new_i < books.length) {
  if (parseInt(books[new_i]["id"]) == 133712) {
    popping_books.push(books[new_i]);
  } else {
    the_books.push(books[new_i]);
  }
  new_i++
}
console.log("Suppression du livre avec l'ID: 133712: ");
console.log(the_books);
//     Trie les livres par ordre alphabétique
var new_j = 0, order_titles_values = [], books_keys = [], order_titles;
for (var i = 0; i < books.length; i++) {
    order_titles_values.push(Object.values(books[i]));
    books_keys.push(Object.keys(books[i]));
}

var those=[], that0={},that4={},that3={},that2={},that1={};
const then = order_titles_values.sort();
books_keys[0].forEach((key, j) => that0[key] = then[0][j]);
books_keys[1].forEach((key, j) => that1[key] = then[1][j]);
books_keys[2].forEach((key, j) => that2[key] = then[2][j]);
books_keys[3].forEach((key, j) => that3[key] = then[3][j]);
books_keys[4].forEach((key, j) => that4[key] = then[4][j]);
those.push(that0);
those.push(that1);
those.push(that2);
those.push(that3);
those.push(that4);
console.log("Trie les livres par ordre alphabétique: ");
console.log(those);