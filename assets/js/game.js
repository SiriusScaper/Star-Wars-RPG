//variables
// 

//Object for char properties/values
function Char(attk, counterAttk, health, charImg){
	this.attk = attk
	this.counterAttk = counterAttk
	this.health = health
	this.charImg = new Image(200, 200)
}

//Characters
let obiwan = new Char(6, 15, 120, '')
let vader = new Char(10, 25, 150, '')
let luke = new Char(8, 12, 100, '/assets/imgs/luke.jpg')
let themperor = new Char(9, 8, 160,'')

//Win state is defeating remaining characters


function gameSetup(){
	//setup start state
	//characters represented with images in the DOM
	//characters are selectable
	//Score is 0?
}


function addtoHTML(){
	//This will add elements to html for other functions
}


function remove(){
	//this will remove elements from the html for other functions
}

function addImages(){
	//add images to html

}


//Show the user selectable characters
$(document).ready(function() {
		$(".selectable").hover(function() {
			$(this).removeClass("selectable");
			$(this).addClass("selected");
		}, function() {
			$(this).removeClass("selected");
			$(this).addClass("selectable") 
			} 
		)


	function selectChars(){
		
		//player selects a character to fight as and against
		$(document).on('click', function select() {
			$(".selectable").addClass(".selected");
		})
		//apply a colored border to indicate selection
		//First selection is PC
		//Second selection is enemy
	}

	function playerChar(){
		//apply stats and use pcAttackPower
	}

	function enemyChar(){
		//apply stats
	}

	function attack(){

		//handle attacking & counter attacking
		//attack is property health - attk
		//counter attack is the health - counterAttk property
	}

	//PC = Player Character
	function pcAttackPower(){
		//handle attack function for PC = attack+=
		
	}

})