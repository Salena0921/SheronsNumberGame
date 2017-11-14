var powerUp = 0;
var powerDown = 0;
var totalCount = 0;
var imageCrystal1 = $("#crystal1");
var imageCrystal2 = $("#crystal2");
var imageCrystal3 = $("#crystal3");
var imageCrystal4 = $("#crystal4");
var randomGuess = Math.floor(Math.random()*102 +19);
var randomCrystal1 = Math.floor(Math.random()*12 +1);
var randomCrystal2 = Math.floor(Math.random()*12 +1);
var randomCrystal3 = Math.floor(Math.random()*12 +1);
var randomCrystal4 = Math.floor(Math.random()*12 +1);

function startGame(){

    powerUp = 0;
    powerDown = 0;
    randomGuess;
    randomCrystal1;
    randomCrystal2;
    randomCrystal3;
    randomCrystal4;   

    console.log(randomCrystal1);
    console.log(randomCrystal2);
    console.log(randomCrystal3);
    console.log(randomCrystal4);
    console.log(randomGuess);

    document.getElementById("powerup").textContent = powerUp;
    document.getElementById("powerdown").textContent = powerDown;
    document.getElementById("numbertoguess").textContent = randomGuess;
        
    
};
startGame();

function playGame(){
$("#crystal1").on("click", function(){
    imageCrystal1.attr("data-crystalvalue1", randomCrystal1);
    $("#crystal1").append(randomCrystal1);
    totalCount += randomCrystal1
    document.getElementById("totalcount").textContent = totalCount
    console.log(totalCount)
    console.log(randomCrystal1);
    winorlose();
});

$("#crystal2").on("click", function(){   
    imageCrystal2.attr("data-crystalvalue2", randomCrystal2);
    $("#crystal2").append(imageCrystal2);
    totalCount += randomCrystal2
    console.log(randomCrystal2);
    document.getElementById("totalcount").textContent = totalCount
    winorlose();
});

$("#crystal3").on("click", function(){
    imageCrystal3.attr("data-crystalvalue3", randomCrystal3);
    $("#crystal3").append(imageCrystal3);
    totalCount += randomCrystal3
    document.getElementById("totalcount").textContent = totalCount
    winorlose();
});

$("#crystal4").on("click", function(){
    imageCrystal4.attr("data-crystalvalue4", randomCrystal4);
    $("#crystal4").append(imageCrystal4);
    totalCount += randomCrystal4
    document.getElementById("totalcount").textContent = totalCount
    winorlose();
});
console.log("yeah");

};
playGame();

function winorlose(){
    console.log("yea");
if(totalCount === randomGuess){
    powerUp ++;
    document.getElementById("powerup").textContent = powerUp
    
    console.log(powerUp);
}else if (totalCount > randomGuess){
    powerDown ++;
    document.getElementById("powerdown").textContent = powerDown
};

};
