function check() {
  const q1 = document.trivia.question1.value;
  const q2 = document.trivia.question2.value;
  const q3 = document.trivia.question3.value;
  const a1 = document.getElementById("answerOne");
  const a2 = document.getElementById("answerTwo");
  const a3 = document.getElementById("answerThree");

  if (q1 == "Machado de Assis") {
    a1.style.color = "green";
    a1.textContent = "Parabéns! Você acertou!";
  } else {
    a1.style.color = "red";
    a1.textContent = "A resposta correta é: B. Machado de Assis";
  }
  if (q2 == "Vidas Secas") {
    a2.style.color = "green";
    a2.textContent = "Parabéns! Você acertou!";
  } else {
    a2.style.color = "red";
    a2.textContent =
      "A resposta correta é: C. Vidas Secas, de Graciliano Ramos";
  }
  if (q3 == "Jorge Amado") {
    a3.style.color = "green";
    a3.textContent = "Parabéns! Você acertou!";
  } else {
    a3.style.color = "red";
    a3.textContent = "A resposta correta é: C. Jorge Amado";
  }
}
