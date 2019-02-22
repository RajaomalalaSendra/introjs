// Tu es en train d'écrire un livre sur les entrepreneurs américains et tu te renseigne sur leurs dates de naissance pour voir si tu ne peux pas identifier un millésime à succès.

// Pendant ta recherche tu tombes sur une array contenant des entrepreneurs connus et leurs dates de naissance.

const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Réalise un script script_6.js qui répondra dans la console aux questions suivantes :

//     Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70
var year = [], year_70 =  [];
for (var i = 0; i < entrepreneurs.length; i++) {
          year.push(entrepreneurs[i]["year"]);
          if (year[i] < 1980 && year[i] >= 1970) {
            year_70.push(entrepreneurs[i]["first"] + " " + entrepreneurs[i]["last"]);
  }
}
console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70:");
for (var i = 0; i < year_70.length; i++) {
    console.log(year_70[i]);
}
//     Sors une array qui combinne le prénom et le nom des entrepreneurs
var nom_et_prenom = [];
for (var i = 0; i < entrepreneurs.length; i++) {
            nom_et_prenom.push(entrepreneurs[i]["first"] + " " + entrepreneurs[i]["last"]);
}
console.log(`Un array qui combine le prénom et le nom des entrepreneurs: ${nom_et_prenom}`);
//     Quel âge aurait chaque inventeur aujourd'hui ?
var age_2019 = [];
for (var i =  0; i < entrepreneurs.length; i++) {
            age_2019.push(parseInt(2019 - entrepreneurs[i]["year"]));
}
console.log(age_2019[1]);
console.log("L'âge aurait chaque inventeur aujourd'hui: ");
var j = 0;
var the_real_age_2019 = [];
while (j < age_2019.length) {
        console.log(`${nom_et_prenom[j]}:  ${parseInt(age_2019[j])} ans.`);
        j++
}
//     Trie les inventeurs par ordre alphabétique du nom de famille
var last = [], another = [];
for (var i = 0; i < entrepreneurs.length; i++) {
      last.push(entrepreneurs[i]["last"] + " " + entrepreneurs[i]["first"]);
      another.push(entrepreneurs[i]["first"] + " " + entrepreneurs[i]["last"]);
}
console.log(last.sort());
console.log(another.sort());