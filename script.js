let n=0;

function submit_button(element) {
  let correct = document.getElementById("answer").value.toLowerCase();
  if (correct == "sagrada familia") {
    document.getElementById("showStatus").innerHTML = "Yippy, correct answer!!";
    document.getElementById("showStatus").style.color = "#078469";
    n += 1;

    setTimeout(()=>{showQuestion(questions[n])}, 2000);
    document.getElementById("showStatus").innerHTML = "clear"
    document.getElementById("answer").value = []

  } else {
    document.getElementById("showStatus").innerHTML = "Opps, wrong answer 😢";
    document.getElementById("showStatus").style.color = "#9D0000";
    n += 1;
    setTimeout(()=>{showQuestion(questions[n])}, 2000);
    document.getElementById("showStatus").innerHTML = "clear"

    document.getElementById("answer").value = []


  }
  event.target.innerHTML = "Next question";
}

function showQuestion(q) {
  let titleDev = document.getElementById("title");
  titleDev.textContent = q.title;
}
let questions = [
  {
    title: "🏗️ 📸",
    correctAnswer: "sagrada familia",
  },
  {
    title: "🐇 🎩 🌿",
    correctAnswer: "alice garden",
  },
  {
    title: "🍎 🛍️",
    correctAnswer: "alice garden",
  },
];





showQuestion(questions[n]);
