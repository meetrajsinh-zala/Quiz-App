var QuizDataObj = {}
let QuestionCount = 0
let quizData = []
let allQuizName = JSON.parse(localStorage.getItem('allQuizName')) || [];

function Check_Quiz_Avaliable(Quiz_Name) {
    let Flag = false
    if(allQuizName.length != 0)
    {
        for (let quizName of allQuizName){
            if(quizName === Quiz_Name){
                Flag = true
            }
        }
        return Flag
    }
    else{
        return false
    }
    
}

function getFormData() {
    let quizName = document.getElementById('quizName')
    let noOfQuestions = document.getElementById('noOfQuestions')
    let quizData = document.getElementById('quizData')

    QuizDataObj = {
        'quizName': quizName.value,
        'noOfQuestions': noOfQuestions.value,
    }

    if (Check_Quiz_Avaliable(quizName.value)) {
        alert('Quiz Already Created')
    }

    else {
        allQuizName.push(quizName.value)
        localStorage.setItem(quizName.value, JSON.stringify(QuizDataObj))
        localStorage.setItem('Currenct Quiz Name', quizName.value)
        localStorage.setItem('allQuizName', JSON.stringify(allQuizName))
        quizData.action = 'Quiz Question.html'
    }
}

function StoreQuizQuestions() {
    let quizQuestion = document.getElementById('quizQuestion')
    let CurrentQuiz = localStorage.getItem('Currenct Quiz Name')
    let Question = document.getElementById('Question')
    let Opt1 = document.getElementById('opt1')
    let Opt2 = document.getElementById('opt2')
    let Opt3 = document.getElementById('opt3')
    let Opt4 = document.getElementById('opt4')
    let answer = document.getElementById('answer')
    let quizdataobj = JSON.parse(localStorage.getItem(CurrentQuiz))
    let noOfQuestions = quizdataobj['noOfQuestions']

    let newQuestion = {
        'Question': Question.value,
        'Opt1': Opt1.value,
        'Opt2': Opt2.value,
        'Opt3': Opt3.value,
        'Opt4': Opt4.value,
        'answer': answer.value,
    }

    quizData.push(newQuestion)
    quizQuestion.reset()
    QuestionCount++
    if (QuestionCount == noOfQuestions) {
        localStorage.setItem(CurrentQuiz + ' Questions', JSON.stringify(quizData));
        localStorage.removeItem('Currenct Quiz Name')
        quizQuestion.action = '../Display Quiz/index.html'
    }
}