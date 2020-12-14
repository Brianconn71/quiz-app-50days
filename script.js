const quizData = [
    {
        question: "what is my name?",
        a: "tom",
        b: "paul",
        c: "luke",
        d: "brian",
        correct: "d",
    },
    {
        question: "what is my age?",
        a: "21",
        b: "26",
        c: "30",
        d: "72",
        correct: "b",
    },
    {
        question: "what is my favorite time?",
        a: "8",
        b: "9",
        c: "10",
        d: "11",
        correct: "a",
    },
    {
        question: "what is my favorite color?",
        a: "blue",
        b: "green",
        c: "orange",
        d: "white",
        correct: "c",
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl= document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected(){
    let answer;

    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer=answerEl.id
        }
    })
    return answer;
}

submitBtn.addEventListener('click', () =>{
    const answer = getSelected();
    console.log(answer);

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score ++
        }

        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        } else {
            quiz.innerHTML = ` 
                <h2>You answered ${score}/${quizData.length} correctly!</h2>
                <button onclick="location.reload()">ReLoad</button>
            `

        }
    }
})