var num;
var pastFortunes = [];
var newFortune = "You will " + generateFortuneCookie(num);

//Function to call a fortune.
function generateFortuneCookie(num) {
	
	//RNG to keep the fortunes random. It selects between 1 and 10 and also rounds the number.
	num = Math.floor((Math.random() * 10) + 1);

	//If... else... statement to return the fortune.
	if (num === 1) {
		return "be punched in the crotch and explode";

	} else if (num === 2){
		return "be eaten by a lion";

	} else if (num === 3){
		return "win the lottery and die the next day";

	} else if (num === 4){
		return "always have shower water that is too hot or too cold";

	} else if (num === 5){
		return "step on a LEGO and explode";

	} else if (num === 6){
		return "drive into a rock hard bush and die";

	} else if (num === 7){
		return "die while fighting off zombies";

	} else if (num === 8){
		return "be run over by a bus and die while being discharged from the hospital";

	} else if (num === 9){
		return "die in a nuclear missile strike by North Korea";

	} else if (num === 10){
		return "always step in a puddle and make your socks wet";

	}
}

//

function previousFortunes(){



}

console.log(pastFortunes);
console.log(newFortune);