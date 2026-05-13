


var situationHud = document.getElementById("hud");
var death_cause = document.getElementById("death_cause");

var opt1 = document.getElementById("btn1");
var opt2 = document.getElementById("btn2");
var opt3 = document.getElementById("btn3");

var itemHud = document.getElementById("items");
var itemBar = document.getElementById("itemBar");

function option1() {
    if(opt1.textContent == "Explore"){
        main("bear")
        
    }else if(opt1.textContent == "Run away") {
        death();
    }else if (opt1.textContent == "Explore Further") {
        main("castle")
    }else if(opt1.textContent == "Climb down and try to get to the Castle"){
        main("wolf_tree")
    }else if (opt1.textContent == "FREEZE") {
        death()
    }
}    
function restart() {
    window.location.href = "./index.html";
}

function option2() {
    if(opt2.textContent == "Look around"){
        main("bottle")

    }else if (opt2.textContent == "Try to fight it") {
        death();
    } else if (opt2.textContent == "Fight") {
        death();
    }else if (opt2.textContent == "Climb up a tree to see further") {
        main("tree");
    }else if (opt2.textContent == "FREEZE") {
        death();
    }else if (opt2.textContent == "Look around for more intressting stuff") {
        main("wolf_look_tree");
    }else if (opt2.textContent == "Drink the Entire Vodka Bottle") {
       death();
    }

}
function option3() {
    if(opt3.textContent == "Tame it"){
        if (itemBar.textContent.includes("Vodka")) {
            main("Tame_bear")
        }else{
        death();
        }
    }else if (opt3.textContent == "Stand still and wait for something to happen") {
        main("wolf")
    }else if (opt3.textContent == "FREEZE") {
        death()
    }else if (opt3.textContent == "Hug the bear") {
        main("wolf_hug")
    }
}
function death() {
    window.location.href = "./death.html";
}
function death_cause() {
    death_cause.textContent = "You got mauled by a bear"
}
function main (situation) {
    if (situation == "bear"){
        situationHud.textContent = "You encountered a grizzly bear. What do you do?";

        opt1.textContent = "Run away";
        opt2.textContent = "Try to fight it";
        opt3.textContent = "Tame it";
    }
    if (situation == "bottle"){
        situationHud.textContent = "You found a Bottle of cheap Vodka. How do you continue your journey?";
        
        opt2.textContent = "Drink the Vodka Bottle"

        itemBar.innerHTML += "Vodka <br>"
        itemHud.style.display = "block";
    }
    if (situation == "Tame_bear") {
        situationHud.innerHTML = "The bear finds the Vodka adequate, You have aquired a new companion...<br> What do you do now?"

        opt1.textContent = "Explore Further";
        opt2.textContent = "Climb up a tree to see further";
        opt3.textContent = "Hug the bear";

        itemBar.innerHTML += "Bear Companion <br>"
    }
    if (situation == "wolf") {
        situationHud.innerHTML = "A gigantic wolf emerges from the darkness. You feel a ice cold shiver down your spine... <br>What do you do now?"

        opt1.textContent = "FREEZE";
        opt2.textContent = "FREEZE";
        opt3.textContent = "FREEZE";
    }
    if (situation == "wolf_tree") {
        situationHud.innerHTML = "As you climb down the tree a gigantic wolf emerges from the darkness. You feel a ice cold shiver down your spine... <br>What do you do now?"

        opt1.textContent = "FREEZE";
        opt2.textContent = "FREEZE";
        opt3.textContent = "FREEZE";
    }
    if (situation == "wolf_look_tree") {
        situationHud.innerHTML = "You look around for a while but find nothing note worthy. As you climb down the tree a gigantic wolf emerges from the darkness. You feel a ice cold shiver down your spine... <br>What do you do now?"

        opt1.textContent = "FREEZE";
        opt2.textContent = "FREEZE";
        opt3.textContent = "FREEZE";
    }
    if (situation == "wolf_hug") {
        situationHud.innerHTML = "As you hug the bear you look behind him and see a gigantic wolf emerges from the darkness. You feel a ice cold shiver down your spine... <br>What do you do now?"

        opt1.textContent = "FREEZE";
        opt2.textContent = "FREEZE";
        opt3.textContent = "FREEZE";
    }
    if (situation == "Castle") {
        situationHud.innerHTML = "As the the light breaks through the thick forest wall, you suddenly find a meadow before you and in the middle of it lies a tall castle. As you get closer to it you start seeing a sighs of abandonment <br>What do you do now?"

        opt1.textContent = "Explore the Castle's main rooms";
        opt2.textContent = "Clime The Castle Towers";
        opt3.textContent = "Walk along the Castle wall to look for clues for what happpend";
    
    }
    if (situation == "tree") {
        situationHud.innerHTML = "You see the top of a tall Castle in the distance, it's within walking distance it seems.<br>What do you do now?";

        opt1.textContent = "Climb down and try to get to the Castle";
        opt2.textContent = "Look around for more intressting stuff";
        opt3.textContent = "Sit and enjoy the view for a while ";
    }
}