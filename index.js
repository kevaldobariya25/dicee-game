//create random number variable and change image using setAttribute for img1
function refreshing(){
var randomNumber1= Math.floor(Math.random()*6)+1;
var randomSrc1 = ("./images/dice"+randomNumber1+".png");
document.querySelector(".img1").setAttribute("src",randomSrc1);


//create random number variable and change image using setAttribute for img2
var randomNumber2= Math.floor(Math.random()*6)+1;
var randomSrc2 = ("./images/dice"+ randomNumber2 +".png");
document.querySelector(".img2").setAttribute("src",randomSrc2);


//change heading(h1) according to random number using innerHTML 🎲
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🎲Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!🎲";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}






}





// Another way for write a script for DOM 

// //create random number variable
// var randomNumber1= Math.floor(Math.random()*6)+1;
// var randomNumber2= (Math.floor(Math.random()*6))+1;

// // change image according to random number using setAttribute for img1
// if(randomNumber1===1){
//     document.querySelector(".img1").setAttribute("src","./images/dice1.png");
// }
// else if(randomNumber1===2){
//     document.querySelector(".img1").setAttribute("src","./images/dice2.png");
// }
// else if(randomNumber1===3){
//     document.querySelector(".img1").setAttribute("src","./images/dice3.png");
// }
// else if(randomNumber1===4){
//     document.querySelector(".img1").setAttribute("src","./images/dice4.png");
// }
// else if(randomNumber1===5){
//     document.querySelector(".img1").setAttribute("src","./images/dice5.png");
// }
// else if(randomNumber1===6){
//     document.querySelector(".img1").setAttribute("src","./images/dice6.png");
// }

// //change image according to random number using setAttribute for img2
// if(randomNumber2===1){
//     document.querySelector(".img2").setAttribute("src","./images/dice1.png");
// }
// else if(randomNumber2===2){
//     document.querySelector(".img2").setAttribute("src","./images/dice2.png");
// }
// else if(randomNumber2===3){
//     document.querySelector(".img2").setAttribute("src","./images/dice3.png");
// }
// else if(randomNumber2===4){
//     document.querySelector(".img2").setAttribute("src","./images/dice4.png");
// }
// else if(randomNumber2===5){
//     document.querySelector(".img2").setAttribute("src","./images/dice5.png");
// }
// else if(randomNumber2===6){
//     document.querySelector(".img2").setAttribute("src","./images/dice6.png");
// }

// //change heading(h1) according to random number using innerHTML 🎲
// if(randomNumber1===randomNumber2){
//     document.querySelector("h1").innerHTML="Draw!";
// }
// if(randomNumber1 > randomNumber2){
//     document.querySelector("h1").innerHTML="🎲Player 1 Wins!";
// }
// if(randomNumber1 < randomNumber2){
//     document.querySelector("h1").innerHTML="Player 2 Wins!🎲";
// }


