var question = document.getElementById("question");
var reponse = document.getElementById("reponse");
var boutonValider = document.getElementById("submitButton");

var questRep =[
{
  quest:"🏗️ 📸",
  rep:"sagrada familia"
},
{
  quest:"🐇 🎩 🌿",
  rep:"alice garden"
},
{
  quest:"🍎 🛍️",
  rep:"apple store"
},
{
  quest:"⛺ 🏟️",
  rep:"camp nou"
},
{
  quest:"🚠 🌳",
  rep:"montjuic"
},
{
  quest:"🎨 👨‍🎨 🖼️",
  rep:"picasso museum"
},
{
  quest:"🍎 🛍️",
  rep:"apple store"
}
]

var n = 0 ;
question.textContent = questRep[n].quest;

var correct = document.getElementById("correct");//
var wrong = document.getElementById("wrong");//
var nbJuste = 0;
var nbFaux = 0;

function nextQuestion () {
  if (n < (questRep.length-1)) {
    n+=1;
  }
  else {n=0;}
  question.textContent= questRep[n].quest;
}

submitButton.onclick = function () {
      if (reponse.value.toLowerCase().trim() === questRep[n].rep){
      reponse.value = "BRAVO !!!";
          setTimeout (nextQuestion,2000);
          nbJuste += 1;
        correct.textContent = nbJuste ;
      } else {
        reponse.value = "Opps, wrong answer";
        setTimeout (nextQuestion,2000);
        nbFaux += 1 ;
        wrong.textContent = nbFaux ;
    }
    setTimeout (function () {reponse.value=""}, 2000);
}


function validationEnter (e) {
     if (e.key ==="Enter") {submitButton.onclick()}
};

reponse.addEventListener("keydown", validationEnter);
