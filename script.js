//Word Randomizer
var chosen = words[Math.floor((words.length - 1) * Math.random())].toUpperCase(), dashes; //alert(chosen)
console.log(chosen);
//Images For Hangman
const images = ["Empty.png", "Full-4.png", "Full-3.png", "Full-2.png", "Full-1.png", "Full.png"];
//counter for images refrence
var counter = 0;
//first message pop up
alert("Maple Leafs Captain needs to be Saved! Without Him The Leafs Are Doomed To Lose Their First Round Again Making Them Banckrupt.");
//Dashes Calculation
function underScores(word){
  dashes = "";
  for (i = 0; i < word.length; i++){
    dashes += "_ ";
  }

  return dashes;
}
//To Hide p1 until button is clicked
document.getElementById("p1").style.opacity = 0;

function createButtons() {
  document.getElementById("keyboard").innerHTML = "";
  //this creates 26 buttons
  for (x = 1; x <= 26; x++) {
    //use the createElement function to create known HTML elements
    var btn = document.createElement("BUTTON");
    var br = document.createElement("br");

    //why start at 64? Because the letter 'A' is code 65
    var letter = String.fromCharCode(x + 64);
    var t = document.createTextNode(letter);
    //add the text stored in 't' to the our button variable
    btn.appendChild(t);
    //give the btn an id to make it easy to access later
    btn.id = letter;
    //this is how to add an event to the button -- name the event and 
    //then include the function you want it to perform
    btn.addEventListener("click", checkLetter);
    //add the btn to the page
    document.getElementById("keyboard").appendChild(btn);
    //add a line break 'myP' after 13 buttons
    if (x % 13 == 0) {
      document.getElementById("keyboard").appendChild(br);
    }
  }
  //Function For When "Try It" is clicked
  document.getElementById("p1").style.opacity = 1;
  document.getElementById("underscores").innerHTML = underScores(chosen);
  document.getElementById("picBox").src = "Images/" + images[counter];
}

function checkLetter() {
  //this refers to the object that called this function
  document.getElementById("p1").innerHTML += this.id;
  
  this.disabled = true;
  // Correct letter
  //Replacing Dashes With Letter Picked
  if (chosen.includes(this.id)){
    var tempWord = "";
    dashes = dashes.replaceAll(" ", "");
    
    for (i = 0; i < chosen.length; i++){
      if (chosen[i] == this.id || chosen[i] == dashes[i]){
        tempWord += chosen[i];
      }
      else {
        tempWord += "_ ";
      }
    }

    dashes = tempWord;
  }
  else {
    counter++;
  }
  
  document.getElementById("underscores").innerHTML = dashes;
  //Shows Image
  document.getElementById("picBox").src = "Images/" + images[counter];
  //game over
  if (counter >= 6) {
    document.location.href = "endLoss.html";
  }
  else if(dashes == chosen){
    document.location.href = "endWin.html";
  }
}
//reset for play again button
function reset() {
  document.location.href = "index.html";
  document.getElementById("keyboard").innerHTML = "";
  chosen = words[Math.floor((words.length - 1) * Math.random())].toUpperCase(), dashes;
  createButtons();
}