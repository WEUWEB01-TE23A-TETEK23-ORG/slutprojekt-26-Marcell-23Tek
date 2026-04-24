
var i = 0;

var situationHud = document.getElementById("hud");

var opt1 = document.getElementById("btn1");
var opt2 = document.getElementById("btn2");
var opt3 = document.getElementById("btn3");

var itemHud = document.getElementById("items");
var itemBar = document.getElementById("itemBar");

function option1() {
    if(i === 0 || i === 1){
        main("bear")
        i += 1;
    }

}
function option2() {
    if(i === 0){
        main("bottle")
        i += 1;
    }

}
function option3() {
    
}
function main(situation) {
    if (situation == "bear"){
        situationHud.textContent = "You encountered a grizzly bear. What do you do?"

        opt1.textContent = "Run away";
        opt2.textContent = "Try to fight it";
        opt3.textContent = "Tame it";
    }
    if (situation == "run"){
        // Change to death screen "Muled by bear"
        // Add pitures for every scenario
    }

    if (situation == "bottle"){
        situationHud.textContent = "You found a Bottle of cheap Russian Vodka. How do you continue your journey?";
        
        opt2.textContent = "Drink the Vodka Bottle"

        itemBar.textContent += "Vodka"

        itemHud.style.display = "block";
    }
}