var powerUp = 0;
var powerDown = 0;
var totalCount = 0;
var image = $(".crystals");

function startGame(){

    powerUp = 0;
    powerDown = 0;
    var randomGuess = Math.floor(Math.random()*102 +19);
    var randomCrystal1 = Math.floor(Math.random()*12 +1);
    var randomCrystal2 = Math.floor(Math.random()*12 +1);
    var randomCrystal3 = Math.floor(Math.random()*12 +1);
    var randomCrystal4 = Math.floor(Math.random()*12 +1);

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

$(".crystals").on("click", function(){

    totalCount += randomCrystal1;
    totalCount += randomCrystal2;
    totalCount += randomCrystal3;
    totalCount += randomCrystal4;

    console.log(totalCount);
    document.getElementById("totalcount").textContent = totalCount;


});