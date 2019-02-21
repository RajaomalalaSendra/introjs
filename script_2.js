// Un prompt s'affiche avec la question suivante

num = parseInt(prompt("De quel nombre veut tu calculer la factorielle ?"))
var result
function factorialize(num) {
  if (num === 0 || num === 1){
  	return console.log("Le résultat est : 1");
  } else if (num > 0) {
  		for (var i = num - 1; i >= 1; i--) {
  		num *= i
  }
  return console.log(`Le résultat est : ${num}`);	
  } else {
  	return console.log("Le résultat est : ##Errors##");
  }

}
factorialize(num);