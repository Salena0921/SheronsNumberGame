var powerUp = 0;
var totalCount, randomGuess, randomCrystal1, randomCrystal2, randomCrystal3, randomCrystal4;


// Setting up click events for the crystal divs
$("#crystal1").on("click", function () {
    console.log("crystal 1 click: ", randomCrystal1);
    totalCount += randomCrystal1;
    $("#totalcount").text(totalCount);
    winOrLose();
});

$("#crystal2").on("click", function () {
    console.log("crystal 2 click: ", randomCrystal2);
    totalCount += randomCrystal2;
    $("#totalcount").text(totalCount);
    winOrLose();
});

$("#crystal3").on("click", function () {
    console.log("crystal 3 click: ", randomCrystal3);
    totalCount += randomCrystal3;
    $("#totalcount").text(totalCount);
    winOrLose();
});

$("#crystal4").on("click", function () {
    console.log("crystal 4 click: ", randomCrystal4);
    totalCount += randomCrystal4;
    $("#totalcount").text(totalCount);
    winOrLose();
});

$("#crystal5").on("click", function () {
    console.log("crystal 5 click: ", randomCrystal5);
    totalCount += randomCrystal5;
    $("#totalcount").text(totalCount);
    winOrLose();
});

$("#crystal6").on("click", function () {
    console.log("crystal 6 click: ", randomCrystal6);
    totalCount += randomCrystal6;
    $("#totalcount").text(totalCount);
    winOrLose();
});

$("#crystal7").on("click", function () {
    console.log("crystal 7 click: ", randomCrystal7);
    totalCount += randomCrystal7;
    $("#totalcount").text(totalCount);
    winOrLose();
});
// ===============================================================

function winOrLose() {
    console.log("check win");
    console.log("totalCount:", totalCount);

    if (totalCount === randomGuess) {
        console.log("you won");
        powerUp++;
        document.getElementById("powerup").textContent = powerUp;
        console.log(powerUp);
        startGame();
        if(powerUp === 7){
            console.log("wish")
            resetWholeGame();
        }

    } else if (totalCount > randomGuess) {
        console.log("you lost");
        resetWholeGame();
    };

};

function startGame() {

    // Math.floor(Math.random() * (max - min)) + min;
    randomGuess = Math.floor(Math.random() * 101 + 19);
    randomCrystal1 = Math.floor(Math.random() * 11 + 1);
    randomCrystal2 = Math.floor(Math.random() * 11 + 1);
    randomCrystal3 = Math.floor(Math.random() * 11 + 1);
    randomCrystal4 = Math.floor(Math.random() * 11 + 1);
    randomCrystal5 = Math.floor(Math.random() * 11 + 1);
    randomCrystal6 = Math.floor(Math.random() * 11 + 1);
    randomCrystal7 = Math.floor(Math.random() * 11 + 1);

    totalCount = 0;
    $("#totalcount").text(totalCount);
    $("#powerup").text(powerUp);  
    $("#numbertoguess").text(randomGuess);

    // playGame();
};
startGame();

function resetWholeGame(){
    randomGuess = Math.floor(Math.random() * 101 + 19);
    randomCrystal1 = Math.floor(Math.random() * 11 + 1);
    randomCrystal2 = Math.floor(Math.random() * 11 + 1);
    randomCrystal3 = Math.floor(Math.random() * 11 + 1);
    randomCrystal4 = Math.floor(Math.random() * 11 + 1);
    randomCrystal5 = Math.floor(Math.random() * 11 + 1);
    randomCrystal6 = Math.floor(Math.random() * 11 + 1);
    randomCrystal7 = Math.floor(Math.random() * 11 + 1);

    powerUp = 0;
    totalCount = 0;
    $("#totalcount").text(totalCount);
    $("#powerup").text(powerUp);  
    $("#numbertoguess").text(randomGuess);
}