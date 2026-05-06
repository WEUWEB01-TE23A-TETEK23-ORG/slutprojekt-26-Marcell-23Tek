


var situationHud = document.getElementById("hud");

var opt1 = document.getElementById("btn1");
var opt2 = document.getElementById("btn2");
var opt3 = document.getElementById("btn3");

var itemHud = document.getElementById("items");
var itemBar = document.getElementById("itemBar");

function option1() {
    if(opt1.textContent == "Explore"){
        main("bear")
        
    }else if(opt1.textContent == "Run away") {
        main("dead_bear")
    }

}
function option2() {
    if(opt2.textContent == "Look around"){
        main("bottle")

    }else if (opt2.textContent == "eonfeon") {
        main("bear")

    } else if (opt2.textContent == "Try again") {
        main("restart")
        window.location.href = "death.html";

    } 

}
function option3() {
    if(opt3.textContent == "Tame it"){
        if (itemBar.textContent.includes("Vodka")) {
            main("Tame_bear")
        }else{ main("dead_bear")
        }
       

    }else if (opt3.textContent == "Stand still and wait for something to happen") {
        main("nothing")
    }
}
function main(situation) {
    if (situation == "bear"){
        situationHud.textContent = "You encountered a grizzly bear. What do you do?"

        opt1.textContent = "Run away";
        opt2.textContent = "Try to fight it";
        opt3.textContent = "Tame it";
    }
    if (situation == "dead_bear"){
        situationHud.textContent = "You died, got mauled by a bear."

        opt1.textContent = "XXXXXXX";
        opt2.textContent = "Try again";
        opt3.textContent = "XXXXXXX";
        // Change to death screen "Muled by bear"
        // Add pitures for every scenario
    }
    if (situation == "restart") {
        situationHud.innerHTML = "You find yourself in a Forest. You have a headache and no recollection of your memories... <br> What do you do?";

        opt1.textContent = "Explore";
        opt2.textContent = "Look around";
        opt3.textContent = "Stand still and wait for something to happen";

        itemBar.textContent = ""
        itemHud.style.display = "none";
    }

    if (situation == "bottle"){
        situationHud.textContent = "You found a Bottle of cheap Russian Vodka. How do you continue your journey?";
        
        opt2.textContent = "Drink the Vodka Bottle"

        itemBar.innerHTML += "Vodka <br>"
        itemHud.style.display = "block";
    }
    if (situation == "Tame_bear") {
        situationHud.innerHTML = "The bear finds the Vodka adequate, You have aquired a new companion...<br> What do you do now?"

        opt1.textContent = "Explore";
        opt2.textContent = "Look around";
        opt3.textContent = "Stand still and wait for something to happen";

        itemBar.innerHTML += "Bear Companion <br>"
        itemHud.style.display = "block";
    }

    
}