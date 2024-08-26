//creates a quiz
const quizContainer=document.getElementById('quiz')
const resultsContainer=document.getElementById('results')
const submitButton=document.getElementById('submit')
const quizQuestions=[
    {

    question: "What method does Jess use to create the intestinal model in her project?",
    answers: {

    a: "Micro-moulding",

    b: "3D-Printing",

    c: "Graphpad Prism",
    
    d: "Her bare hands",

    },

    correctAnswer:"b"

    },
    {
    question:"What degree is Jess completing?", 
    answers: {
        a: "Research assistant",
        b: "Bachelor of Biomedical Sciences",
        c: "Masters of Philosophy",
        d: "Doctorate of Philosophy",
    },
    correctAnswer:"c"
},
{
    question:"What research skills does Jess have?",
    answers: {
        a:"Cell culture techniques",
        b:"3D-Printing",
        c:"Hydrogel techniques",
        d:"All of the above",
    },
    correctAnswer:"d"
},
{
    question:"Which of the following conferences has Jess presented in?",
    answers: {
    a:"ANZNMF Conference 2024",
    b:"MicroSANZ 2023",
    c:"CBT Conference 2023",
    d:"None of the above",
},
    correctAnswer:"a"
},
];


function buildQuiz(){
    //variable to store the HTML output
    const output=[];
    for(i=0;i<quizQuestions.length;i++){
        //variable to store list of possible answers
        const answers=[];
        //for each available answer to this question add a HTML radio button
        for(letter in quizQuestions[i].answers){
            answers.push(
                '<label>'
                +'<input type="radio" name="question'+i+'"value="'+letter+'">'
                +letter+':'
                +quizQuestions[i].answers[letter]
                +'</label>'
            );
        }
        //add this question and its answers to an output
        output.push(
            '<div class="question">'+quizQuestions[i].question+'</div>'
            +'<div class="answers">'+answers.join('')+'</div>'
        );
    }
    //combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML=output.join('');
}
function showResults(){
    //gather answer containers from our quiz
    var answerContainers=quizContainer.querySelectorAll('.answers');
    //keep track of user's answers
    var numCorrect=0;
    //for each question
    for(i=0;i<quizQuestions.length;i++){
        //find selected answer
        userAnswer=
        (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        //if answer is correct
        if(userAnswer===quizQuestions[i].correctAnswer){
            //add to the number of correct answers
            numCorrect++;
            //colour the answers green
            answersContainers[i].style.color='lightgreen';
        }
        //if answer is wrong or blank
        else{
            //color the answers red
            answerContainers[i].style.color='red';
        }
    }
    if(numCorrect===0){
        resultsContainer.innerHTML="That wasn't your best effort - you didn't get a single answer correct.";
    }
    if(numCorrect===1){
        resultsContainer.innerHTML="There's room for improvement there! You only got one correct answer."
    }
    if(numCorrect===2){
        resultsContainer.innerHTML="That was okay! You got a score of 2 / 4 for your responses. Have another go."
    }
    if(numCorrect===3){
        resultsContainer.innerHTML="Congratulations! You got a good score of 3 / 4. You know Jess pretty well!"
    }
    if(numCorrect===4){
        resultsContainer.innerHTML="Congratulations! A perfect 4 / 4 score! You know Jess so well!"
    }
}
//load quiz
buildQuiz()
submitButton.onclick=function(){
    showResults();
}
