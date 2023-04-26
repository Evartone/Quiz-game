
const questões = [

    {
        pergunta: "Qual é o maior país do mundo?", 

        respostas: [

            { text: "China", correct: false},  
            { text: "Canada", correct: false}, 
            { text: "Russia", correct: true}, 
            { text: "Estados Unidos", correct: false}, 

        ]
    }, 

    {
        pergunta: "Em que periodo da pré-história o fogo foi descoberto?", 

        respostas: [

            { text: "Neolitico", correct: false},  
            { text: "Paleolitico", correct: true}, 
            { text: "Idade dos Metais", correct: false}, 
            { text: "Periodo da Pedra Polida", correct: false}, 

        ]
    }, 
    
    {
        pergunta: "Qual é a conjugação do verbo caber na 1ª pessoa do singular do presente do indicativo?", 

        respostas: [

            { text: "Eu caibo", correct: true},  
            { text: "Eu cabo", correct: false}, 
            { text: "Que eu caiba", correct: false}, 
            { text: "Nehuma das alternativas", correct: false}, 

        ]
    }, 

    {
        pergunta: "Em que oceano fica Madagascar?", 

        respostas: [

            { text: "Oceano Ártico", correct: false},  
            { text: "Oceano Atlantico", correct: false}, 
            { text: "Oceano Pacífico", correct: false}, 
            { text: "Nenhuma das alternativas", correct: true}, 

        ]
    }, 


    {

        pergunta: "As pessoas de qual tipo sanguíneo são consideradas doadores universais?", 

        respostas: [

            { text: "Tipo A", correct: false},  
            { text: "Tipo B", correct: false}, 
            { text: "Tipo O", correct: true}, 
            { text: "Tipo AB", correct: false}, 

        ]

    },

    {

        pergunta: "Qual destes paises africano não fala o Português?", 

        respostas: [

            { text: "Moçambique", correct: false},  
            { text: "Angola", correct: false}, 
            { text: "Guiné Bissau", correct: false}, 
            { text: "Guiné Equatorial", correct: true}, 

        ]

    },


    {

        pergunta: "Qual é o maior rio do mundo?", 

        respostas: [

            { text: "Nilo", correct: false},  
            { text: "Amazonia", correct: true}, 
            { text: "Zambeze", correct: false}, 
            { text: "Jordão", correct: false}, 

        ]

    },

    {

        pergunta: "Qual é o metal cujo o simbolo químico é Au?", 

        respostas: [

            { text: "Cobre", correct: false},  
            { text: "Prata", correct: false}, 
            { text: "Mercúrio", correct: false}, 
            { text: "Ouro", correct: true}, 

        ]

    },


    {
        pergunta: "Qual é o menor continente no mundo?", 

        respostas: [

            { text: "Asia", correct: false},  
            { text: "Australia", correct: true}, 
            { text: "Artico", correct: false}, 
            { text: "Africa", correct: false}, 

        ]

    },

    {

        pergunta: "De quem é a famosa frase `Penso, logo existo`?", 

        respostas: [

            { text: "Platão", correct: false},  
            { text: "Galileu", correct: false}, 
            { text: "Decartes", correct: true}, 
            { text: "Sócrates", correct: false}, 

        ]

    },

];



const Elementoquestão = document.getElementById("questões");
const Botaorespostas = document.getElementById("answer-buttons");
const Botaonseguinte = document.getElementById("next-btn");


let questionAtualIndex = 0;
let pontuação = 0; 

function começarquiz() {
   

     questionAtualIndex = 0;
     pontuação = 0; 

    Botaonseguinte.innerHTML = "Seguinte";

    mostrarQuestões();

}

function mostrarQuestões() {

    pontoZero();
   
    let questaoAtual = questões[questionAtualIndex];
    let questãoNo = questionAtualIndex +1;

    Elementoquestão.innerHTML = questãoNo + ". " + questaoAtual.pergunta;
 
    // fazer o display da resposta 

    questaoAtual.respostas.forEach(resposta => {
        
        const button = document.createElement("button");
        button.innerHTML = resposta.text;
        button.classList.add("btn");

        Botaorespostas.appendChild(button)

         if(resposta.correct) {

            button.dataset.correct = resposta.correct;
         }

        button.addEventListener("click", Selecionarresposta);

    });


}

function pontoZero() {

    Botaonseguinte.style.display = "none";
    while(Botaorespostas.firstChild){
       
        // remoção de todas as respostas anteriores 
        Botaorespostas.removeChild(Botaorespostas.firstChild);
    }

}


function Selecionarresposta(e){

    const selectBotao = e.target;
    const IsCorrect = selectBotao.dataset.correct === "true";

    if(IsCorrect){

         selectBotao.classList.add("correct");
         pontuação++;

    }else{
        selectBotao.classList.add("incorrect");
    }
    Array.from(Botaorespostas.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");

        }

        button.disabled= true;

    })

    Botaonseguinte.style.display = "block";
}

function  mostrarpontuação() {

    pontoZero();

    Elementoquestão.innerHTML = `Você acertou ${pontuação} em ${questões.length}!`;

    Botaonseguinte.innerHTML = "Jogar Outra Vez";
    Botaonseguinte.style.display = "block";

}


function pressionarSeguinte() {

    questionAtualIndex++;

    if(questionAtualIndex < questões.length){

        mostrarQuestões()

    }else{

        mostrarpontuação();
    }
}

Botaonseguinte.addEventListener("click", ()=> {

    if(questionAtualIndex < questões.length){
      
        pressionarSeguinte();

    }else {

        começarquiz();
    }
})

começarquiz();
