//determinate the variables
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

//collect question from the question index
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

//if the answer is correct collect the score
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

//if the quiz is finished return the total of questions
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}


function Question(text, options, answer) {
    this.text = text;
    this.options = options;
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
        let options = quiz.getQuestionIndex().options;
        for(let i = 0; i < options.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = options[i];
            guess("btn" + i, options[i]);
        }

        showProgress();
    }
};

//when select an answer show the next question
function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        displayQuestion();
    }
};

//it shows how many question are left from the total questions
function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let ProgressElement = document.getElementById("progress");
    ProgressElement.innerHTML = 
    'Question ' + currentQuestionNumber + ' of ' + quiz.questions.length;
};


//when the quiz is finish return the result page with a socore and the option of play again or to click on the lick to go to the Loneley Planet website
function showScores() {
    let quizEndHTML = 
    `
    <img class ="logo" src="qzLogo.png">
    <h2> Your score is:</br> ${quiz.score} out of ${quiz.questions.length}</h2>
    <div class="quiz-repeat">
        <a href="index.html">Try Again</a></br>
        <h3>Were you inspired by the Quiz?</h3>
        <a href="https://www.lonelyplanet.com/">Let's plan a trip!!!</a>
    </div>
    `
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
};



// questions, answers and the correct answer is created here
let questions = [
    new Question(
        "Which city is the capital of Japan?", 
        ["Tokyo", "Kioto", "Osaka"], "Tokyo"
    ),
    new Question(
        "A tradicional Turkish breakfast, what does it consist of?", 
        ["Pancakes, butter, jam, tea", "Bread, cheese, tomatoes, black olives, tea", "Waffles, cheese, fruit, tea"], "Bread, cheese, tomatoes, black olives, tea"
    ),
    new Question(
        "What is the most famous beer in Mexico?", 
        ["Dorada", "Medalla", "Corona"], "Corona"
        ),
    new Question(
        "Moroccan Mint Teas is also known as...", 
        ["Spearmint", "Maghrebi Mint Tea", "Peppermint Tea"], "Maghrebi Mint Tea"
        ),
    new Question(
        "Why Petra in Jordan is also called Red Rose City?", 
        ["There are roses everywhere", "Its flag has a rose on it", "The stone from which it is carved"], "The stone from which it is carved"
        ),
    new Question(
        "What countries belong to the BalKan Triangle?", 
        ["Norway, Switzeland, Denmarc", "Croatia, Bosnia and Montenegro", "Portugal, Spain and France"], "Croatia, Bosnia and Montenegro"
        ),
    new Question(
        "Hanoi is the capital of which city?", 
        ["Vietnam", "Cambodia", "Tailand"], "Vietnam"
        ),
    new Question(
        "Which is the most popular soft drink in Scotland?", 
        ["Coca Cola", "Irun Bru", "Fanta"], "Irun Bru"
        ),
    new Question(
        "What group of Islands belong to the Canary Islands?", 
        ["Menorca, Ibiza and Formentera", "Madeira, Terceira and Flores", "El Hierro, La Palma and La Gomera"], "El Hierro, La Palma and La Gomera"
        ), 
    new Question(
        "Holi Festival in India celebrates the arrival of...", 
        ["Winter", "Autumn", "Spring"], "Spring"
        )

];

 
// create quiz
let quiz = new Quiz(questions);

// display quiz
displayQuestion();