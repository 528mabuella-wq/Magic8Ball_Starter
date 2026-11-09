/*
  Magic 8 Ball
  Name:
  Period:
*/

function askEightball() {
  const nameInput = document.getElementById("nameInput");
  const questionInput = document.getElementById("questionInput");
  const userName = nameInput ? nameInput.value.trim() : "";
  const userQuestion = questionInput ? questionInput.value.trim() : "";

  const greetingElement = document.getElementById("greeting");
  const questionOutElement = document.getElementById("questionOut");
  const answerElement = document.getElementById("answer");
  const answerTypeElement = document.getElementById("answerType");

  const greeting = userName === "" ? "Hello Mystery Person!" : `Hello, ${userName}!`;
  greetingElement.textContent = greeting;

  if (userQuestion === "") {
    questionOutElement.textContent = "";
    answerElement.textContent = "The 8Ball needs a question! Dummy...";
    answerTypeElement.innerHTML = "";
    return;
  }

  questionOutElement.textContent = `You asked: ${userQuestion}`;

  const randomNumber = Math.floor(Math.random() * 8);
  let eightball = "";
  let answerClass = "";
  let answerLabel = "";

  switch (randomNumber) {
    case 0:
      eightball = "It is certain";
      answerClass = "yes";
      answerLabel = "Yes";
      break;
    case 1:
      eightball = "It is decidedly so";
      answerClass = "yes";
      answerLabel = "Yes";
      break;
    case 2:
      eightball = "Reply hazy, try again";
      answerClass = "maybe";
      answerLabel = "Maybe";
      break;
    case 3:
      eightball = "Cannot predict now";
      answerClass = "maybe";
      answerLabel = "Maybe";
      break;
    case 4:
      eightball = "Do not count on it";
      answerClass = "no";
      answerLabel = "No";
      break;
    case 5:
      eightball = "My sources say no";
      answerClass = "no";
      answerLabel = "No";
      break;
    case 6:
      eightball = "Outlook not so good";
      answerClass = "no";
      answerLabel = "No";
      break;
    case 7:
      eightball = "Signs point to yes";
      answerClass = "yes";
      answerLabel = "Yes";
      break;
    default:
      eightball = "Ask again later";
      answerClass = "maybe";
      answerLabel = "Maybe";
  }

  answerElement.textContent = eightball;
  answerTypeElement.innerHTML = `<span class="${answerClass}">${answerLabel}</span>`;

  console.log(`The Magic 8 Ball says, "${eightball}".`);
}

