function submit_button(element){



let correct = document.getElementById('answer').value
if(correct == "sagrada familia"){
  document.getElementById('answer').value = "correct answer!!"
  document.getElementById('answer').style.color = "#078469"
} else {
  document.getElementById('answer').value = "wrong answer 😢"
  document.getElementById('answer').style.color = "#9D0000"
}
event.target.innerHTML = "Next question"


}




function showQuestion(q){
  let titleDev = document.getElementById("title");
  titleDev.textContent = q.title
}
let questions = {
  title : "🏗️ 📸",
  correctAnswer: "sagrada familia"
}

showQuestion(questions)
