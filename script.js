
const startGameB = document.querySelector(".start-quiz");
const questionsContainer = document.querySelector(".questions-container");
const answersContainer= document.querySelector(".answers-container");
const questionText = document.querySelector(".question");
const nextQuestionB = document.querySelector(".next-question");

startGameB.addEventListener("click",startGame)
nextQuestionB.addEventListener("click",nextQuestion)


let questionCurrent = 0;
let total = 0;

function startGame(){
    startGameB.classList.add("hide");
    questionsContainer.classList.remove("hide");
    nextQuestion();
}

function nextQuestion(){
    resetState()
if(questions.length===questionCurrent){
return finish()
}


    questionText.textContent= questions[questionCurrent].question;
    questions[questionCurrent].answers.forEach(answer => {
        const newAnswer = document.createElement("button");
        
        newAnswer.classList.add("answer","button-55");
        newAnswer.textContent = answer.text;
        const imageElement = document.createElement("img");
        imageElement.src = answer.image;
        imageElement.classList.add("answer-image");
        newAnswer.appendChild(imageElement); // Adiciona a imagem ao botão
        if(answer.correct){
            newAnswer.dataset.correct = answer.correct;
        } // Define a imagem como plano de fundo do botão

        answersContainer.appendChild(newAnswer);
        newAnswer.addEventListener("click", selectAnswer)
        
    })
}
function resetState(){
    while(answersContainer.firstChild){
        answersContainer.removeChild(answersContainer.firstChild); 
        }
            document.body.classList.remove("correct","incorrect");
            nextQuestionB.classList.add("hide");
}
function selectAnswer(event){
const answerClicked = event.target;
if (answerClicked.dataset.correct){
    total++
    document.body.classList.add("correct");
}else{

    document.body.classList.add("incorrect");
}
document.querySelectorAll(".answer").forEach(button =>{
    if(button.dataset.correct){
        button.classList.add("correct");
    }else{
        button.classList.add("incorrect");
    }
    button. disabled =true

  
})
nextQuestionB.classList.remove("hide")
questionCurrent++;

}
 function finish(){
     const totalQuestions = questions.length;
     const performance = Math.floor(total*100/totalQuestions);
    let msg=""
    switch(true){
        case (performance == 100):
            msg = "Parabens, voce acertou tudo";
            break;
        case (performance == 80):
            msg = "Parabens, voce acertou muito";
            break;
        case (performance == 60):
            msg = " Parabens! ";
            break;
        default:
            msg = "Tente novamente";
    }
    questionsContainer.innerHTML = ` 
    <p class="final-result">
    Voçê acertou ${total} de ${totalQuestions}
    <span>Resultado:${msg}</span>
    </p>
    <button onclick="window.location.reload()" class="button-55" role="button">Reiniciar</button>
    ` 
    }








const questions=[
    { question:"Qual seleção venceu a copa do mundo de 1994?",
    answers:[
        {text:"Brasil", correct: true, image:"br.png"},
        {text:"Alemanha", correct: false, image:"ger.png"},
        {text:"Italia", correct: false , image:"ita.png"},
        {text:"Argentina", correct: false , image:"arg.png"},
    
    ]
    },
    { question:"Qual time que é o maior campeão da Premier League?",
    answers:[ 
        {text:"Liverpool", correct: false,image:"liv.png"},
        {text:"Chelsea", correct: false ,image:"chel.png"},
        {text:"Man City", correct: false    ,image:"manci.png"},
        {text:"Man United", correct: true    ,image:"manu.png"},
        
    ]
    },
    { question:"Qual unico jogador que conquistou a Liga dos Campeões da UEFA, a Copa Libertadores da América, a Copa do Mundo FIFA, e também ter sido eleito o Melhor do Mundo?",
    answers:[
        {text:"Lionel Messi", correct: false,image:"messi.jpg"}, 
        {text:"Cristiano ronaldo", correct: false,image:"cr7.jpg"},
        {text:"Neymar", correct: false ,image:"ney.jpg"},
        {text:"Ronaldinho Gaúcho", correct: true  ,image:"bruxo.jpg"}, 
    ]
    },
    { question:"Qual o maior campeão estadual do brasil?",
    answers:[
        {text:"Flamengo", correct: false ,image:"fla.png"},
        {text:"Palmeiras", correct: false ,image:"pal.png"},
        {text:"ABC", correct: true  ,image:"abc.png"},
        {text:"Corinthians", correct: false ,image:"cor.jpg"},
    ]
    },
    { question:"Entre os times quem tem mais vitórias em clássicos? Dica: Não treme!",
    answers:[
        {text:"Atlético Mineiro", correct: true ,image:"galo.png"},
        {text:"Cruzeiro", correct: false ,image:"cru.png"},
    ]
    }
    ]