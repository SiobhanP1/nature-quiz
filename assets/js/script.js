//Array containing quiz questions with corresponding answer options.
const QUIZ_QUESTIONS = [{
        "question": "Which bird is famously intelligent and known to remember humans that help it?",
        "option1": "Robin",
        "option2": "Thrush",
        "option3": "Crow",
        "correctAnswer": "Crow"
    },
    {
        "question": "There are 98 different species of which creature in Ireland?",
        "option1": "Birds",
        "option2": "Bees",
        "option3": "Cats",
        "correctAnswer": "Bees"
    },
    {
        "question": "Question3?",
        "option1": "Birds",
        "option2": "Bees",
        "option3": "Cats",
        "correctAnswer": "Bees"
    },
    {
        "question": "Question4?",
        "option1": "Birds",
        "option2": "Bees",
        "option3": "Cats",
        "correctAnswer": "Bees"
    },
    {
        "question": "Question5?",
        "option1": "Birds",
        "option2": "Bees",
        "option3": "Cats",
        "correctAnswer": "Bees"
    }
];

let questionIndex = 0; //Indicates the index number of the current question object.
let userSelected; //Variable to store the answer option selected by the user.

/**
 * Calls the displayQuestion function on initial loading of the page.
 */
function beginQuiz() {
    let checkAnswerButton = document.getElementById("check-answer-button");
    let nextQuestionButton = document.getElementById("next-question-button");
    checkAnswerButton.addEventListener("click", getUserAnswer);
    nextQuestionButton.addEventListener("click", nextQuestion);
    displayQuestion();
}

/** 
 * Displays a new question with corresponding answer options taken from the questions 
 * array. 
 */
function displayQuestion() {
    if (questionIndex === QUIZ_QUESTIONS.length) {
        displayEndingMsg();
    } else {

        let currentQuestion = document.getElementById("current-question");
        let optionOne = document.getElementById("option-one-text");
        let optionTwo = document.getElementById("option-two-text");
        let optionThree = document.getElementById("option-three-text");

        currentQuestion.innerText = QUIZ_QUESTIONS[questionIndex].question;
        optionOne.innerText = QUIZ_QUESTIONS[questionIndex].option1;
        optionTwo.innerText = QUIZ_QUESTIONS[questionIndex].option2;
        optionThree.innerText = QUIZ_QUESTIONS[questionIndex].option3;
    }
}

/**  
 * Checks the option selected by the user against the correct option in the questions array. 
 */
function getUserAnswer() {
    if (document.getElementById("option-one").checked) {
        userSelected = QUIZ_QUESTIONS[questionIndex].option1;
        checkUserAnswer();
    } else if (document.getElementById("option-two").checked) {
        userSelected = document.getElementById("option-two-text").innerText;
        checkUserAnswer();
    } else if (document.getElementById("option-three").checked) {
        userSelected = document.getElementById("option-three-text").innerText;
        checkUserAnswer();
    } else {
        alert("Please choose an option.");
    }
}

/**
 * checks the user answer against the correct answer and calls the appropriate increment score function.
 */
function checkUserAnswer() {
    document.getElementById("check-answer-button").classList.add("hidden");
    if (userSelected === QUIZ_QUESTIONS[questionIndex].correctAnswer) {
        incrementCorrect();
    } else if (userSelected !== QUIZ_QUESTIONS[questionIndex].correctAnswer) {
        incrementIncorrect();
    }
}

/** 
 * Increments the correct answer score by 1. 
 */
function incrementCorrect() {
    let correctAnswers = parseInt(document.getElementById("current-total-correct").innerHTML);
    document.getElementById("current-total-correct").innerText = correctAnswers + 1;
    displayCorrect();
}

/**
 * Increments the incorrect answer score by 1.
 */
function incrementIncorrect() {
    let incorrectAnswers = parseInt(document.getElementById("current-total-incorrect").innerHTML);
    document.getElementById("current-total-incorrect").innerText = incorrectAnswers + 1;
    displayIncorrect();
}

/** 
 * Displays a correct answer message on submission of a correct answer.
 */
function displayCorrect() {
    document.getElementById("correct").classList.remove("hidden");
    document.getElementById("next-question-button").classList.remove("hidden");
}

/**
 * Displays an incorrect answer message which shares the correct answer with the
 * user on submission of an incorrect answer.
 */
function displayIncorrect() {
    document.getElementById("correct-answer").innerText = QUIZ_QUESTIONS[questionIndex].correctAnswer;
    document.getElementById("incorrect").classList.remove("hidden");
    document.getElementById("next-question-button").classList.remove("hidden");
}

/**
 * Hides displayed answer messages, the check answer button and clears the radio boxes
 * before a new question is displayed. 
 */
function nextQuestion() {
    document.getElementById("correct").classList.add("hidden");
    document.getElementById("incorrect").classList.add("hidden");
    document.getElementById("next-question-button").classList.add("hidden");
    let radiobuttons = document.getElementsByName("answer-options");
    for (i = 0; i < radiobuttons.length; i++) {
        radiobuttons[i].checked = false;
    }
    questionIndex++;
    displayQuestion();
    document.getElementById("check-answer-button").classList.remove("hidden");
    updateQuestionNumber();
}

/**
 * Updates the displayed question number whenever a new question is displayed.
 */
function updateQuestionNumber() {
    let currentQuestionNumber = parseInt(document.getElementById("current-question-number").innerHTML);
    if (currentQuestionNumber < 5) {
        document.getElementById("current-question-number").innerText = currentQuestionNumber + 1;
    }
}

/**
 * Removes the displayed question and answers after a user submits their answer
 * to the final question and then displays a message with the user's score.
 */
function displayEndingMsg() {
    document.getElementById("quiz-section").classList.add("hidden");
    document.getElementById("correct").classList.add("hidden");
    document.getElementById("incorrect").classList.add("hidden");
    document.getElementById("score-container").classList.add("hidden");
    document.getElementById("next-question-button").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");

    correctAnswers = parseInt(document.getElementById("current-total-correct").innerHTML);
    document.getElementById("final-score").innerText = correctAnswers;
}

document.addEventListener('DOMContentLoaded', beginQuiz);