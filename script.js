const startGameB = document.querySelector(".start-quiz"); //Captura o Botão para iniciar o jogo
const questionsContainer = document.querySelector(".questions-container"); //Container das perguntas
const answersContainer = document.querySelector(".answers-container"); //Container das respostas
const questionText = document.querySelector(".question"); //Pergunta atual
const nextQuestionB = document.querySelector(".next-question"); //Botão para avançar para proxima pergunta

startGameB.addEventListener("click", startGame); //Inicia o jogo

nextQuestionB.addEventListener("click", nextQuestion); //Avançar para proxima pergunta

//Variaveis de controle
let questionCurrent = 0; //rastreia o índice da pergunta atual.
let total = 0; //rastreia o número de acertos do usuário.

function startGame() { //Inicia o jogo
  startGameB.classList.add("hide");
  questionsContainer.classList.remove("hide");
  nextQuestion();
}

function nextQuestion() {//Avançar para proxima pergunta
  resetState();//Resetando
  
  //Terminando o game
  if (questions.length === questionCurrent) {
    return finish(); //Finaliza o jogo
  }

  questionText.textContent = questions[questionCurrent].question; //Pergunta atual
  //Percorre as respostas,for each usado para percorrer o array
  questions[questionCurrent].answers.forEach((answer) => {

    const newAnswer = document.createElement("button");
    newAnswer.classList.add("answer", "button-55"); //Classe do botão
    newAnswer.textContent = answer.text; //Texto do botão
    const imageElement = document.createElement("img"); //Elemento imagem
    imageElement.src = answer.image; //Caminho da imagem
    imageElement.classList.add("answer-image"); //Classe da imagem
    newAnswer.appendChild(imageElement); // Adiciona a imagem ao botão

    if (answer.correct) {
      /*Verifica se é a resposta correta
      
      dataset: A propriedade dataset de um elemento HTML 
      permite que você acesse e manipule os atributos 
      de dados personalizados (data attributes) definidos 
      no HTML usando o prefixo data-.
      
      Aqui está add true*/
      
      newAnswer.dataset.correct = answer.correct;
    }
    answersContainer.appendChild(newAnswer); //Adiciona o botão novo na lista de respostas
    newAnswer.addEventListener("click", selectAnswer); //Adiciona evento de clique
  });
}
function resetState() {
  //Reseta o jogo
  while (answersContainer.firstChild) {//Verificando se tem algum filho
    answersContainer.removeChild(answersContainer.firstChild); //Passando qual filho remover
  }
  
  document.body.classList.remove("correct", "incorrect"); //remove as classes correta e incorreta do body
  nextQuestionB.classList.add("hide"); //esconde o botão proxima pergunta
}
 //Seleciona uma resposta
function selectAnswer(event) {//Retorna o botão clicado
  const answerClicked = event.target; //resposta clicada
  
  if (answerClicked.dataset.correct) {
    //Verifica se a resposta clicada é a correta
    total++; //rastreia o número de acertos do usuário.
    document.body.classList.add("correct"); //adiciona a classe correta
  } else {
    //Verifica se a resposta clicada não é a correta

    document.body.classList.add("incorrect"); //adiciona a classe incorreta
  }
  document.querySelectorAll(".answer").forEach((button) => {//Selecionando todos elementos da class .answer
    if (button.dataset.correct) {
      //Verifica se a resposta clicada é a correta
      button.classList.add("correct"); //adiciona a classe correta
    } else {
      button.classList.add("incorrect"); //adiciona a classe incorreta
    }
    button.disabled = true; // Desabilita o botão
  });
  nextQuestionB.classList.remove("hide"); //exibe o botão proxima pergunta
  questionCurrent++; //rastreia o índice da pergunta atual.
}
function finish() {
  //Finaliza o jogo
  const totalQuestions = questions.length; //total de questões
  //Math.floor arredonda um número para o número inteiro mais proximo
  const performance = Math.floor((total * 100) / totalQuestions); //Calcula a performance
  let msg = ""; //Variável de mensagem
  switch (
    true //Verifica a performance
  ) {
    case performance == 100:
      msg = "Parabens, voce acertou tudo";
      break;
    case performance == 80:
      msg = "Parabens, voce acertou muito";
      break;
    case performance == 60:
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
    `;
}

const questions = [
/* Perguntas e respostas,um vetor de objetos
Array questions: Este é um array que contém várias perguntas, onde cada pergunta é representada por um objeto.

Objetos de pergunta: Cada objeto dentro do array questions representa uma pergunta. Cada objeto tem duas propriedades:
question: Esta propriedade contém a própria pergunta como uma string.
answers: Esta propriedade é um array de objetos que representam as opções de resposta para a pergunta.

Objetos de resposta: Cada objeto dentro do array answers contém três propriedades:
text: Esta propriedade contém o texto da resposta como uma string.
correct: Esta propriedade é um booleano que indica se a resposta é correta ou não.
image: Esta propriedade contém o caminho para a imagem relacionada à resposta.
*/  
{
    question: "Qual seleção venceu a copa do mundo de 1994?",
    answers: [
      { text: "Brasil", correct: true, image: "br.png" },
      { text: "Alemanha", correct: false, image: "ger.png" },
      { text: "Italia", correct: false, image: "ita.png" },
      { text: "Argentina", correct: false, image: "arg.png" },
    ],
  },
  {
    question: "Qual time que é o maior campeão da Premier League?",
    answers: [
      { text: "Liverpool", correct: false, image: "liv.png" },
      { text: "Chelsea", correct: false, image: "chel.png" },
      { text: "Man City", correct: false, image: "manci.png" },
      { text: "Man United", correct: true, image: "manu.png" },
    ],
  },
  {
    question:
      "Qual unico jogador que conquistou a Liga dos Campeões da UEFA, a Copa Libertadores da América, a Copa do Mundo FIFA, e também ter sido eleito o Melhor do Mundo?",
    answers: [
      { text: "Lionel Messi", correct: false, image: "messi.jpg" },
      { text: "Cristiano ronaldo", correct: false, image: "cr7.jpg" },
      { text: "Neymar", correct: false, image: "ney.jpg" },
      { text: "Ronaldinho Gaúcho", correct: true, image: "bruxo.jpg" },
    ],
  },
  {
    question: "Qual o maior campeão estadual do brasil?",
    answers: [
      { text: "Flamengo", correct: false, image: "fla.png" },
      { text: "Palmeiras", correct: false, image: "pal.png" },
      { text: "ABC", correct: true, image: "abc.png" },
      { text: "Corinthians", correct: false, image: "cor.jpg" },
    ],
  },
  {
    question:
      "Entre os times quem tem mais vitórias em clássicos? Dica: Não treme!",
    answers: [
      { text: "Atlético Mineiro", correct: true, image: "galo.png" },
      { text: "Cruzeiro", correct: false, image: "cru.png" },
    ],
  },
];
