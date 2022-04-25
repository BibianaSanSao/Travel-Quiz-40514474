function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}


// Displaying the question
function displayQuestion() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        // show options
        let choices = quiz.getQuestionIndex().choices;
        for(let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        displayQuestion();
    }
};

function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let ProgressElement = document.getElementById("progress");
    ProgressElement.innerHTML = 
    'Question ' + currentQuestionNumber + ' of ' + quiz.questions.length;
};




function showScores() {
    let quizEndHTML = 
    `
    <img class ="logo" src="qzLogo.png">
    <p1> Your scored: ${quiz.score} of ${quiz.questions.length}<p1>
    <div class="pepita"></div>
    <div class="quiz-repeat">
        <a href="index.html">Try Again</a></br></br></br>
        <p2>Were did you inspired by the Quiz?</p>
        <a href="https://www.lonelyplanet.com/">Let's plan a trip!!!</a>
    </div>
    `
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
};






// create questions here
let questions = [
    new Question(
        "Which city is the capital of Japan?", 
        ["Tokyo", "Kioto","Osaka"], "Tokyo"
    ),
    new Question(
        "A tradicional Turkish breakfast, what does it consist of?", 
        ["Pancakes, butter, jam, tea", "Bread, cheese, tomatoes, black olives, tea", "Waffles, cheese, fruit, tea"], "Bread, cheese, tomatoes, black olives, tea"
    ),
    new Question(
        "What is the most famous beer in Mexico?", 
        ["Dorada", "Medalla","Corona"], "Corona"
        ),
    new Question(
        "Moroccan Mint Teas is also known as...", 
        ["Spearmint", "Maghrebi Mint Tea", "Peppermint Tea"], "Maghrebi Mint Tea"
        ),
    new Question(
        "Why Petra in Jordan is also called Red Rose City?", 
        ["There are roses everywhere", "Its flag has a rose on it","The stone from which it is carved"], "The stone from which it is carved"
        ),
    new Question(
        "What countries belong to the BalKan Triangle?", 
        ["Norway, Switzeland, Denmarc", "Croatia, Bosnia and Montenegro","Portugal, Spain and France"], "Croatia, Bosnia and Montenegro"
        ),
    new Question(
        "Hanoi is the capital of which city?", 
        ["Vietnam", "Cambodia","Tailand"], "Vietnam"
        )

];

// Loop through the array and get the answers
// questions.forEach((answer) => {
//     console.log(answer.choice);
//     let quizAnswers = document.getElementById("quiz-answers");
//     // quizAnswers.innerHTML = questions.text;
// })


// create quiz
let quiz = new Quiz(questions);

// display quiz
displayQuestion();