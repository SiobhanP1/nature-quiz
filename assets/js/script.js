let questions = [{
        'question': 'Question1',
        'option1': 'q1option1',
        'option2': 'q1option2',
        'option3': 'q1option3',
        'correctAnswer': 'correctAnsQ1'
    },
    {
        'question': 'question2',
        'option1': 'q2option1',
        'option2': 'q2option2',
        'option3': 'q2option3',
        'correctAnswer': 'correctAnsQ2'
    }
];

/*Event listeners */
let checkAns = document.getElementById('check-ans-button');
let nextQ = document.getElementById('next-q-button');
document.addEventListener('DOMContentLoaded', displayQuestion);
checkAns.addEventListener('click', checkAnswer);
nextQ.addEventListener('click', displayQuestion);

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

    questionIndex++;
}

/* Check answer correct or not*/
function checkAnswer() {
    alert('checkAns function called');
    if (document.getElementById('option-one').checked) {
        alert('option 1 selected');
        let userSelected = document.getElementById('option-one-text').innerText;
        if (userSelected === questions[questionIndex].correctAnswer.value) {
            document.getElementById('correct').classList.remove('hidden');
        } else {
            document.getElementById('incorrect').classList.remove('hidden');
            alert('incorrect');
        }
    } else if (document.getElementById('option-two').checked) {
        alert('option 2 selected');
        let userSelected = document.getElementById('option-two-text').innerText;
        if (userSelected === questions[questionIndex].correctAnswer.value) {
            document.getElementById('correct').classList.remove('hidden');
        } else {
            document.getElementById('incorrect').classList.remove('hidden');
            alert('incorrect');
        }
    } else if (document.getElementById('option-three').checked) {
        alert('option 3 selected');
        let userSelected = document.getElementById('option-three-text').innerText;
        if (userSelected === questions[questionIndex].correctAnswer.value) {
            document.getElementById('correct').classList.remove('hidden');
        } else {
            document.getElementById('incorrect').classList.remove('hidden');
            alert('incorrect');
        }
    } else {
        alert('Please choose an option.');
    }
    console.log(document.getElementById('option-one-text').innerText);
}