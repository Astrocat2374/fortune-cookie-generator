var fortunesList = [ 
	"be punched in the crotch and explode",
	"be eaten by a lion",
	"win the lottery and die the next day",
	"always have shower water that is too hot or too cold",
	"step on a LEGO and explode",
	"drive into a rock hard bush and die",
	"go skydiving with a backpack",
	"eat too much desserts and have a heart attack",
	"engage in hand to hand combat with a gorn",
	"lose a jousting match with a tree",
	"be crushed by a meteor",
	"do diving into frozen water",
	"die while fighting off zombies",
	"be run over by a bus and die while being discharged from the hospital",
	"die in a nuclear missile strike by North Korea",
	"always step in a puddle and make your socks wet"
];

var rng;
var counter;
var counter0 = 0;
var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0;
var counter5 = 0;
var counter6 = 0;
var counter7 = 0;
var counter8 = 0;
var counter9 = 0;
var counter10 = 0;
var counter11 = 0;
var counter12 = 0;
var counter13 = 0;
var counter14 = 0;
var allCounter = 0;

//Function to call a fortune.
function generateFortuneCookie(rng) {
	
	//RNG to keep the fortunes random. It selects between 0 and the highest number in the fortunesLisr array and also rounds the number.
	rng = Math.floor(Math.random() * (fortunesList.length - 1));
	allCounter++;
	document.getElementById("all-fortunes").innerHTML = allCounter;
	console.log(rng);

	if (rng === 0) {
		counter0++;
	
		document.getElementById("fortune-0").innerHTML = 'You will ' + fortunesList[0];
		document.getElementById("fortune-0-counter").innerHTML = counter0;

		return "You will " + fortunesList[rng];
	} else if (rng === 1) {
		counter1++;
	
		document.getElementById("fortune-1").innerHTML = 'You will ' + fortunesList[1];
		document.getElementById("fortune-1-counter").innerHTML = counter1;

		return "You will " + fortunesList[rng];
	} else if (rng === 2) {
		counter2++;
	
		document.getElementById("fortune-2").innerHTML = 'You will ' + fortunesList[2];
		document.getElementById("fortune-2-counter").innerHTML = counter2

		return "You will " + fortunesList[rng];
	} else if (rng === 3) {
		counter3++;
	
		document.getElementById("fortune-3").innerHTML = 'You will ' + fortunesList[3];
		document.getElementById("fortune-3-counter").innerHTML = counter3;

		return "You will " + fortunesList[rng];
	} else if (rng === 4) {
		counter4++;
	
		document.getElementById("fortune-4").innerHTML = 'You will ' + fortunesList[4];
		document.getElementById("fortune-4-counter").innerHTML = counter4;

		return "You will " + fortunesList[rng];
	} else if (rng === 5) {
		counter5++;
	
		document.getElementById("fortune-5").innerHTML = 'You will ' + fortunesList[5];
		document.getElementById("fortune-5-counter").innerHTML = counter5;

		return "You will " + fortunesList[rng];
	} else if (rng === 6) {
		counter6++;
	
		document.getElementById("fortune-6").innerHTML = 'You will ' + fortunesList[6];
		document.getElementById("fortune-6-counter").innerHTML = counter6;

		return "You will " + fortunesList[rng];
	} else if (rng === 7) {
		counter7++;
	
		document.getElementById("fortune-7").innerHTML = 'You will ' + fortunesList[7];
		document.getElementById("fortune-7-counter").innerHTML = counter7;

		return "You will " + fortunesList[rng];
	} else if (rng === 8) {
		counter8++;
	
		document.getElementById("fortune-8").innerHTML = 'You will ' + fortunesList[8];
		document.getElementById("fortune-8-counter").innerHTML = counter8;

		return "You will " + fortunesList[rng];
	} else if (rng === 9) {
		counter9++;
	
		document.getElementById("fortune-9").innerHTML = 'You will ' + fortunesList[9];
		document.getElementById("fortune-9-counter").innerHTML = counter9;

		return "You will " + fortunesList[rng];
	} else if (rng === 10) {
		counter10++;
	
		document.getElementById("fortune-10").innerHTML = 'You will ' + fortunesList[10];
		document.getElementById("fortune-10-counter").innerHTML = counter10;

		return "You will " + fortunesList[rng];
	} else if (rng === 11) {
		counter11++;
	
		document.getElementById("fortune-11").innerHTML = 'You will ' + fortunesList[11];
		document.getElementById("fortune-11-counter").innerHTML = counter11;

		return "You will " + fortunesList[rng];
	} else if (rng === 12) {
		counter12++;
	
		document.getElementById("fortune-12").innerHTML = 'You will ' + fortunesList[12];
		document.getElementById("fortune-12-counter").innerHTML = counter12;

		return "You will " + fortunesList[rng];
	} else if (rng === 13) {
		counter13++;
	
		document.getElementById("fortune-13").innerHTML = 'You will ' + fortunesList[13];
		document.getElementById("fortune-13-counter").innerHTML = counter13;

		return "You will " + fortunesList[rng];
	} else if (rng === 14) {
		counter14++;
	
		document.getElementById("fortune-14").innerHTML = 'You will ' + fortunesList[14];
		document.getElementById("fortune-14-counter").innerHTML = counter14;

		return "You will " + fortunesList[rng];
	} else{
		return "You shouldn't be seeing this. Something has gone wrong.";
	}

}

var seconds = 0

setInterval(function () {
	seconds++
}, 1000);

setInterval(function checkAchievements () {
	if (seconds === 60) {
		document.getElementById("1-minute").innerHTML = "You've been online for 1 minute";
	} else if (seconds === 600) {
		document.getElementById("10-minutes").innerHTML = "You've been online for 10 minutes";
	} else if (seconds === 3600) {
		document.getElementById("1-hour").innerHTML = "You've been online for 1 hour! Did you fall asleep?";
	} else if (allCounter === 100) {
		document.getElementById("100-clicks").innerHTML = "You've generated 100 fortunes";
	} else if (allCounter === 1000) {
		document.getElementById("1000-clicks").innerHTML = "You've generated 1,000 fortunes";
	} else if (allCounter === 10000) {
		document.getElementById("10000-clicks").innerHTML = "You've generated 10,000 fortunes! Are you using an auto clicker?";
	}
}, 50);