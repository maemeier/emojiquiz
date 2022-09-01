console.log("test");


function submit_button(){
  document.getElementById('answer').value ="Yippy! The answer is correct"
  event.target.innerHTML = "Next question"
}



function showQuestion(q){
  let titleDev = document.getElementById("title");
  titleDev.textContent = q.title
}
let questions = {
  title : "🏗️ 📸",
  correctAnswer: "lion king"
}


showQuestion(questions)
