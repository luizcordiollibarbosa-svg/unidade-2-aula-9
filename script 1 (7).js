import {aleatorio, nome} from './aleatorio.js';
import {perguntas} from './perguntas.js';

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaojogarnovamente = document.querySelector(".novamente-btn");
const botaoiniciar = document.querySelector(".iniciar-btn");
const telainicial = document.querySelector(".tela-inicial");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: [
                    "no inicio ficou com medo do que essa tecnologia pode fazer.",
                    "achou assustador pensar na velociade na qual a tecnologia está avançando."
            ]
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: [
                    "quis saber como usar IA no eu dia a dia."
                    "pensou que essa nova tecnologia pode ajudar em várias tarefas do seu dia a dia."
            ]
            }           
            
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre elaIA. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de tecnologia em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto:"Utilizar uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento",
                afirmacao:
                ["conseguiu utilizar a IA para buscar informações úteis.",
                    "percebeu que a IA pode ajudar a encontrar informações úteis na internet de "
                    "percebeu que a IA consegue explicar termos complicados de forma simplificado"
            ]
            },
            {
                texto: "Escrever o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao:["sentiu mais facilidade em utilizar seus próprios recursos para escrever seu"
                              "Achou que era muito mais fácil procurar por respostas utilizando alguns" 
                              "sentiu um pouco de medo de quais dados pessoais seus a IA poderia utilizar" 
            ]
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto:"Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao:"afirmacao"
            },
            {
                texto:"Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao:"afirmacao"
            }
            
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto:"Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao:"afirmacao"
            },
            {
                texto:"Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao:"afirmacao"
            }
            
        ]
    },
    {
        enunciado: " Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao:"afirmacao"
            },
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao:"afirmacao"
            }
            
            
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

botaoiniciar.addEventListener('click', iniciajogo);

function iniciajogo() {
    atual = 0;
    historiafinal = "";
    telainicial.style.displey = 'none';
    caixaPerguntas.classlist.remove("mostrar");
    caixaAlternativas.classlist.remove("mostrar");
    caixaresultado.classlist.remove("mostrar");
    mostraPergunta();
}



function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = aletorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    atual++;
    if(opcaoSelecionada.proxima != undefined){
       atual = opcaoSelecionada.proximo; 
    }ele {
        mostraResultado();
        return;
    }
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = `em 2049, ${nome}`;
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
    caixaResultado.classlist.add("mostrar");
    botaojogarnovamente.addEventListener("click", joganovamente);
}
function joganovamente(){
    atual = 0;
    historiafinal = "";
    caixaResultado.classlist.remove("mostrar");
    mostraPergunta();
}

function substituinome(){
    for(const pergunta of perguntas){
        pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
    }
}

mostraPergunta();

function aleatorio (lista){
    const posicao = math.floor(math.random()* lista.length);
    return lista[posicao];
}

substituiNome();