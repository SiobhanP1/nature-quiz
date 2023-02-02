let questions = [{
        'question': 'Which bird is famously intelligent and known to remember humans that help it?',
        'option1': 'Robin',
        'option2': 'Thrush',
        'option3': 'Crow',
        'correctAnswer': 'Crow'
    },
    {
        'question': 'There are 98 different species of which creature in Ireland?',
        'option1': 'Birds',
        'option2': 'Bees',
        'option3': 'Cats',
        'correctAnswer': 'Bees'
    },
    {
        'question': 'Question3?',
        'option1': 'Birds',
        'option2': 'Bees',
        'option3': 'Cats',
        'correctAnswer': 'Bees'
    },
    {
        'question': 'Question4?',
        'option1': 'Birds',
        'option2': 'Bees',
        'option3': 'Cats',
        'correctAnswer': 'Bees'
    },
    {
        'question': 'question5?',
        'option1': 'Birds',
        'option2': 'Bees',
        'option3': 'Cats',
        'correctAnswer': 'Bees'
    }
];

/*Event listeners */
let checkAns = document.getElementById('check-ans-button');
let nextQ = document.getElementById('next-q-button');

document.addEventListener('DOMContentLoaded', displayQuestion);
checkAns.addEventListener('click', checkAnswer);
nextQ.addEventListener('click', nextQuestion);

/* 
* The displayQuestion function is called upon initial loading of the page and each time 
* a user clicks the Next Question button. It displays a new question with 
* corresponding answer options taken from the questions bank array. The questionIndex
* variable indicates the index number of the next question object in the array.
*/
let questionIndex = 0;

function displayQuestion() {
    if (questionIndex === questions.length) {
        displayEndingMsg();
    } else {

        let currentQuestion = document.getElementById('current-question');
        let optionOne = document.getElementById('option-one-text');
        let optionTwo = document.getElementById('option-two-text');
        let optionThree = document.getElementById('option-three-text');

        currentQuestion.innerText = questions[questionIndex].question;
        optionOne.innerText = questions[questionIndex].option1;
        optionTwo.innerText = questions[questionIndex].option2;
        optionThree.innerText = questions[questionIndex].option3;
    }
}

/**  
* Checks the option selected by the user against the correct option in the questions array. 
*/
function checkAnswer() {
    if (document.getElementById('option-one').checked) {
        let userSelected = questions[questionIndex].option1;
        if (userSelected === questions[questionIndex].correctAnswer) {
            incrementCorrect();
        } else if (userSelected !== questions[questionIndex].correctAnswer) {
            incrementIncorrect();
        }
    } else if (document.getElementById('option-two').checked) {
        let userSelected = document.getElementById('option-two-text').innerText;
        if (userSelected === questions[questionIndex].correctAnswer) {
            incrementCorrect();
        } else {
            incrementIncorrect();
        }
    } else if (document.getElementById('option-three').checked) {
        let userSelected = document.getElementById('option-three-text').innerText;
        if (userSelected === questions[questionIndex].correctAnswer) {
            incrementCorrect();
        } else {
            incrementIncorrect();
        }
    } else {
        alert('Please choose an option.');
    }
}

/** 
 * Increments the correct answer score by 1. 
 */ 
function incrementCorrect() {
    let correctAnswers = parseInt(document.getElementById('current-total-correct').innerHTML);
    document.getElementById('current-total-correct').innerText = correctAnswers + 1;
    displayCorrect();
}

/**
 * Increments the incorrect answer score by 1.
 */
function incrementIncorrect() {
    let incorrectAnswers = parseInt(document.getElementById('current-total-incorrect').innerHTML);
    document.getElementById('current-total-incorrect').innerText = incorrectAnswers + 1;
    displayIncorrect();
}

/** 
 * Displays a correct answer message on submission of a correct answer.
 */
function displayCorrect() {
    document.getElementById('correct').classList.remove('hidden');
    document.getElementById('next-q-button').classList.remove('hidden');
}

/**
 * Displays an incorrect answer message on submission of an incorrect answer.
 */
function displayIncorrect() {
    document.getElementById('incorrect').classList.remove('hidden');
    document.getElementById('next-q-button').classList.remove('hidden');
}

/**
 * Hides displayed answer messages, the check answer button and clears the radio boxes
 * before a new question is displayed. 
 */
function nextQuestion() {
    document.getElementById('correct').classList.add('hidden');
    document.getElementById('incorrect').classList.add('hidden');
    document.getElementById('next-q-button').classList.add('hidden');
    let radiobuttons = document.getElementsByName('answer-options');
    for (i = 0; i < radiobuttons.length; i++) {
        radiobuttons[i].checked = false;
    }
    questionIndex++;
    displayQuestion();
    updateQuestionNumber();
}

/**
 * Updates the displayed question number whenever a new question is displayed.
 */
function updateQuestionNumber() {
    let currentQNumber = parseInt(document.getElementById('current-q-number').innerHTML);
    if (currentQNumber < 5) {
        document.getElementById('current-q-number').innerText = currentQNumber + 1;
    }
}

/**
 * Removes the displayed question and answers after a user submits their answer
 * to the final question and then displays a message with the user's score.
 */
function displayEndingMsg() {
    document.getElementById('quiz-section').classList.add('hidden');
    document.getElementById('correct').classList.add('hidden');
    document.getElementById('incorrect').classList.add('hidden');
    document.getElementById('score-container').classList.add('hidden');
    document.getElementById('next-q-button').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');

    correctAnswers = parseInt(document.getElementById('current-total-correct').innerHTML);
    document.getElementById('final-score').innerText = correctAnswers;
}