var topBox = document.getElementById("outterBox");
// var startQuiz = document.getElementbyId("startQuiz");
// var timer = document.querySelector("startQuiz");
// var questionBox = document.getElementById("questionsBox");

// var finishedSection = document.getElementById("finished-section");
// var showScore = documrnt.getElementById("show-highscore");

var elementUl = document.createElement("ul");

var score = 0;
var questionCount = 0;

var time = document.querySelector("time");
var timer = document.querySelector("#startQuiz");
var questionBox = document.querySelector("#questionBox");
var outterBox = document.querySelector("#outterBox");

var timeLeft = 76;
var penalty = 10;
var interval = 0;

// const go_back_btn = document.querySelector('.finish-quiz');
// const clear_scores_btn = document.querySelector('.show-highscores');

//Questions and answers
var questions =[
{
    title: "How do you write 'Hello world' in an alert-box?",
    choices: 
    ["alertBox('Hello World')",
     "alert('Hello World')",
     "msg('Hello World')", 
     "msgBox('Hello World')"],
     answer: "alert('Hello World')"
},
{
    title:"How to write an IF statment?",
    choices: [
    "if i=5 then", 
    "if i==5 then", 
    "if (i==5)", 
    "if i=5"],
    answer: "if (i==5)"
},
{
    title: "Inside which HTML element do we put the Java Script?",
    choices: ["<Js>", 
    "<scripting>",
     "<script>", 
     "javascript"],
     answer: "<script>"
},
{
    title: "Where is correct place to insert a JavaScript?",
    choices: [
    "<head> & <body>",
    "the <body> section",
    "the <head> section",
    "in <footer>"],
    answer: "<head> & <body>"
},
{
    title: "Which of the following is an example of an array?",
    choices: [
    "var = array()",
    "var = array{}",
    "var = array[]",
    "var = array<>"],
    answer: "var = array[]"
},
];

// Timer and test start simultaneously
timer.addEventListener("click", function () {
    if (interval === 0) {
        interval = setInterval(function () {
            timeLeft--;
            time.textContent = "Time:" + timeLeft;

            if (timeLeft <= 0) {
                clearInterval(interval);
                finished();
                time.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionCount);
});
//Questions displayed on page
function render(questionCount) {
    questionBox.innerHTML = "";
    elementUl.innerHTML = "";
    //Loop through questions and answers
    for (var i = 0; i < questions.length; i++) {
        var userQuestions = questions[questionCount].title;
        var userChoices = questions[questionCount].choices;
        questionBox.textContent = userQuestions;
    }
    userChoices.forEach(function (newItem) {
        var button = document.createElement("button");
        button.textContent = newItem;
        questionBox.appendChild(elementUl);
        elementUl.appendChild(button);
        button.addEventListener("click", (compare));
    })
}
// Compare questions and answers to recognize correct answer
function compare(event) {
    var element = event.target;
    if (element.matches("button")){

        var divCreate = document.createElement("p");
        divCreate.setAttribute("id", "divCreate");
       
        if (element.textContent == questions[questionCount].answer) {
            score++;
            divCreate.textContent = "Correct!" + questions[questionCount].answer;
           
        } else {
           timeLeft = timeLeft - penalty;
            divCreate.textContent = "Wrong! The correct answer is:  " + questions[questionCount].answer;
            
        }
    } questionCount++;
   
    if (questionCount >= questions.length){
        //The end page will attached to page
        questionBox.innerHTML ="";
        finished();
        // divCreate.textContent = "End!" + " " + "Your score is " + score + "/" + questions.length + " Correct!";

    } else {
        questionBox.append(divCreate);

        render(questionCount);
    }
    
}
function finished() {
    questionBox.innerHTML = "";
    // time.innerHTML = "";

    var endMessage= document.createElement("p");
    endMessage.textContent = "End!" + " " + "Your score is " + score + "/" + questions.length + " Correct!";
    questionBox.append(endMessage)

    //After finished test
    var h1Element = document.createElement("h1Element");
    h1Element.setAttribute("id", "h1Element");
    h1Element.textContent = "You are done!"
    
    questionBox.appendChild(h1Element);

    //paragraph
    var pElement = document.createElement("p");
    pElement.setAttribute("id", "pElement");

    questionBox.appendChild(pElement);
    //time left combined with score
    if (timeLeft >= 0) {
        // var timeLeft2 = timeLeft;
        // var p2Element = document.createElement("p");
        clearInterval(interval);
        pElement.textContent = "Your score is: " + timeLeft + score;

        questionBox.append(pElement);
    }
    var labelElement = document.createElement("label");
    labelElement.setAttribute("id", "labelElement");
    labelElement.textContent = "Enter your initials: ";

    questionBox.appendChild(labelElement);

    //submit button
    var submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("id", "Submit");
    submitButton.textContent = "Submit";

    questionBox.appendChild(submitButton);

    //initials
    submitButton.addEventListener("click", function () {
        var initials = createInput.value;
        if (initials === null) ;
        else {
            var totalScore = {
                initials: initials,
                score: timeLeft+score
            }
            var score = localStorage.getItem("score");
            if (score === null) {
                score = [];
            } else {
                score = JSON.parse(score);
            }
            score.push(totalScore);
            var newScore = JSON.stringify(score);
            localStorage.setItem("score", newScore);
            
            window.location.replace("./index.html");
        }

    });
}



// start_quiz_btn.addEventListener('click', function(){submit_btn.display} )
// function(questionsSection){

