let numberOfDrumButtons = document.querySelectorAll(".drum").length
for(let i =0; i<numberOfDrumButtons; i++){
	document.querySelectorAll('.drum')[i].addEventListener('click', function(){
		let buttonInnerHtml = this.innerHTML;
		makesound(buttonInnerHtml);
		buttonAnimation(buttonInnerHtml);
	})
}

document.addEventListener("keypress", function (event) {
	makesound(event.key)
	buttonAnimation(event.key)
	}
);

function makesound(key){
	switch(key){
			case "w":
				let crash = new Audio("sounds/crash.mp3");
				crash.play();
			break;
			case "a":
				let kick_bass = new Audio("sounds/kick-bass.mp3");
				return kick_bass.play();
			break;
			case "s":
				let snare = new Audio("sounds/snare.mp3");
				return snare.play();
			break;
			case "d":
				let tom_1 = new Audio("sounds/tom-1.mp3");
				return tom_1.play();
			break;
			case "j":
				let tom_2 = new Audio("sounds/tom-2.mp3");
				return tom_2.play();
			break;
			case "k":
				let tom_3 = new Audio("sounds/tom-3.mp3");
				return tom_3.play();
			break;
			case "l":
				let tom_4 = new Audio("sounds/tom-4.mp3");
				return tom_4.play();
			break;
			default: console.log(buttonInnerHtml);
		}
}
function buttonAnimation(key){
	var activeKey = document.querySelector("."+key)
	activeKey.classList.add("pressed");
setTimeout(function (){
	activeKey.classList.remove("pressed");
}, 100)
}
/*
function handleClick(){
	let audio = new Audio("sounds/crash.mp3");
	return audio.play();
}*/