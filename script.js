const start=document.getElementById('start-btn')
const next=document.getElementById('next-btn')
const question = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const AnswerElement = document.getElementById('answer-buttons')
const body = document.getElementById('body')


let shuffledQuestions;
let currentquestionindex;
let quizscore =0;

start.addEventListener('click',startgame)

next.addEventListener('click',() =>{
    currentquestionindex++
    setnextquestion()
})


function startgame(){
    start.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() -0.5);
    currentquestionindex = 0
    question.classList.remove('hide')
    setnextquestion()
    quizscore = 0
    document.getElementById('right-answer').style.display = 'block'
}

function setnextquestion(){
    resetState();
    showquestions(shuffledQuestions[currentquestionindex])
}

function showquestions(question){
    questionElement.innerText = question.question;
    question.answers.forEach((answer) =>{
        const button = document.createElement('button')
        button.innerText = answer.text;
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',selectAnswer)
        AnswerElement.appendChild(button)
    })
}


function resetState(){
    clearstatusclass(body)
    next.classList.add('hide')
    while(AnswerElement.firstChild){
        AnswerElement.removeChild(AnswerElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton=e.target
    const correct=selectedButton.dataset.correct

    setStatusClass(document.body,correct)
    Array.from(AnswerElement.children).forEach((button)=>{
        setStatusClass(button,button.dataset.correct)
    })
    if (selectedButton.dataset = correct){
        quizscore++
        selectedButton.style.backgroundColor = 'green'
    }
    else{
        selectedButton.style.backgroundColor = 'red'
        
    }
    if (shuffledQuestions.length > currentquestionindex + 1){
        next.classList.remove("hide")
    }
    else{
        start.innerText="Check quiz score : "+ quizscore +"/4"
        start.classList.remove("hide")
        
    }
    // document.getElementById('right-answer').innerText=quizscore
    
}

function setStatusClass(element,correct){
    clearstatusclass(element)
    if(correct){
        element.classList.add("correct")
    }
    else{
        element.classList.add("wrong")
    }
}

function clearstatusclass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
const questions = [
    {
        question: 'what is the best Engineering College?',
        answers :[
            {text: 'MIT', correct:false},
            {text: 'IIT-B', correct:false},
            {text: 'IIT-KGP',correct:false},
            {text: 'KGEC', correct:true}
        ],
    },
    {
        question: 'what is the Most Important Subject for ECE ?',
        answers :[
            {text: 'Chemistry', correct:true},
            {text: 'DSA', correct:false},
            {text: 'Analog Electronics',correct:false},
            {text: 'Digital Electronics', correct:false}
        ],
    },
    {
        question: 'what is the most used word?',
        answers :[
            {text: 'Het', correct:false},
            {text: 'OK', correct:false},
            {text: 'Cazz',correct:true},
            {text: 'BC', correct:false}
        ],
    },
    {
        question: 'How to become a Engineer?',
        answers :[
            {text: 'By gaining Practical Knowledge', correct:false},
            {text: 'Online Class', correct:true},
            {text: 'Reading Books',correct:false},
            {text: 'Doing Awesome Projects', correct:false}
        ],
    },
]
