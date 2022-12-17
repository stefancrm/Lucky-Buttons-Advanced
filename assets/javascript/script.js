//Generate lucky number
function luckyNumber() {
	return Math.floor(Math.random() * 3 + 1)
}
const number = document.getElementById("generate").value;
console.log(number)
// Generate buttons on form submition
function formGenerate () {
	const input = document.getElementById("generate").value
	if (isNaN(input)) {
		window.alert("Please enter numeric value")
	} else if (input < 3) {
		window.alert("Please enter number greater than 3")
	} else {
		GenerateBtn(input)
	}
}
// generate buttons 
function GenerateBtn(but_numb) {
	console.log(but_numb)
	let buttons = ""
	for (let i = 1; i <= but_numb; ++i) {
		buttons += "<button id='" + i +"' class='btn btn-primary btn-style' onclick='Guess(this.id)' type='submit'>Press me</button>"
	}
	document.getElementById("inner_buttons").innerHTML = buttons
}
// initial generation of buttons
window.onload = function() {
  GenerateBtn(number)
};
// function for guessing the lucky number
function Guess(n) {
	console.log(n + " " + luckyNumber())
	return n == luckyNumber() ? 
		window.alert("You guessed it right\nCongratulations!") :
		window.alert("You guessed wrong\nTry Again!")
}





