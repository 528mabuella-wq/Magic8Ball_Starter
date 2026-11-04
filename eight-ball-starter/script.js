/*
  Magic 8 Ball
  Name:
  Period:
*/

function askEightball() {
  // Get input values from the form
  let userName = document.getElementById("nameInput").value 
  let userQuestion = document.getElementById("questionInput").value
  console.log(userName, userQuestion);

//show the question on site
    document.getElementById('questionOut').textContent = "You asked: " + userQuestion;

  // Greet the user
  let greeting 

  if (userName === "") {
    greeting = "Hello Mystery Person!";
  } else {
    greeting = `Hello, ${userName}!`;
  }
  document.getElementById('greeting').textContent = greeting;


  //check the question 
if (userQuestion === '') {
  document.getElementById('questionOut').textContent = '';
  document.getElementById('answer').textContent = "The 8Ball needs a question! Dummy...";
  document.getElementById('answerType').innerHTML = '';
  return;
}

//get random number for the answer


//choose answer from array of answers


}