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
    }
];

/*Event listeners */
let checkAns = document.getElementById('check-ans-button');
let nextQ = document.getElementById('next-q-button');

document.addEventListener('DOMContentLoaded', displayQuestion);
checkAns.addEventListener('click', checkAnswer);
nextQ.addEventListener('click', nextQuestion);

/* Display first question */
let questionIndex = 0;

function displayQuestion() {
    alert('displayQcalled');
    let currentQuestion = document.getElementById('current-question');
    let optionOne = document.getElementById('option-one-text');
    let optionTwo = document.getElementById('option-two-text');
    let optionThree = document.getElementById('option-three-text');

    currentQuestion.innerText = questions[questionIndex].question;
    optionOne.innerText = questions[questionIndex].option1;
    optionTwo.innerText = questions[questionIndex].option2;
    optionThree.innerText = questions[questionIndex].option3;

}

/* Check answer correct or not*/
let correctAnswers = document.getElementById('current-total-correct').value;
let incorrectAnswers = document.getElementById('current-total-incorrect').value;

function checkAnswer() {
    console.log(questionIndex);

    if (document.getElementById('option-one').checked) {
        alert('option 1 selected');
        /*let userSelected = document.getElementById('option-one-text').innerText;*/
        let userSelected = questions[questionIndex].option1;

        if (userSelected === questions[questionIndex].correctAnswer) {
            incrementCorrect();
        } else if (userSelected !== questions[questionIndex].correctAnswer) {
            incrementIncorrect();
        }
        document.getElementById('next-q-button').classList.remove('hidden');

    } else if (document.getElementById('option-two').checked) {
        alert('option 2 selected');
        let userSelected = document.getElementById('option-two-text').innerText;

        if (userSelected === questions[questionIndex].correctAnswer.value) {
            incrementCorrect();
        } else {
            incrementIncorrect();
        }
        document.getElementById('next-q-button').classList.remove('hidden');

    } else if (document.getElementById('option-three').checked) {
        let userSelected = document.getElementById('option-three-text').innerText;

        if (userSelected === questions[questionIndex].correctAnswer.value) {
            incrementCorrect();
        } else {
            incrementIncorrect();
        }
        document.getElementById('next-q-button').classList.remove('hidden');
    } else {
        alert('Please choose an option.');
    }
}


/* Update scores */
function incrementCorrect() {
    let correctAnswers = document.getElementById('current-total-correct').innerText;
    document.getElementById('current-total-correct').innerText = correctAnswers + 1;
}

function incrementIncorrect() {
    let incorrectAnswers = document.getElementById('current-total-incorrect').innerText;
    document.getElementById('current-total-incorrect').innerText = incorrectAnswers + 1;
}

/* Display answer messages */
function displayCorrect() {
    document.getElementById('correct').classList.remove('hidden');
}

function displayIncorrect() {
    document.getElementById('incorrect').classList.remove('hidden');
}

/**Hide displayed answer messages, check answer button and clear radio boxes*/
function nextQuestion() {
    document.getElementById('correct').classList.add('hidden');
    document.getElementById('incorrect').classList.add('hidden');
    let radiobuttons = document.getElementsByName('answer-options');
    for (i=0; i<radiobuttons.length; i++) {
        radiobuttons[i].checked=false;
    }
    displayQuestion();
}