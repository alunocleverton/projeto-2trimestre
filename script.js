const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual desses países é conhecido por ter uma grande parte de sua floresta amazônica?",
        alternativas: [
            {
                texto: "África do Sul",
                afirmacao: "errado"
            },
            {
                texto: "Brasil",
                afirmacao: "correto"
            }
        ]
    },
    {
        enunciado: "O que é a biodiversidade?",
        alternativas: [
            {
                texto: "A quantidade de água disponível em um ecossistema",
                afirmacao: "errado"
            },
            {
                texto: "A variedade de espécies em um ecossistema",
                afirmacao: "correto"
            }
        ]
    },
    {
        enunciado: " Qual é uma das principais causas do desmatamento??",
        alternativas: [
            {
                texto: "Conservação de áreas naturais",
                afirmacao: "errado"
            },
            {
                texto: "Agricultura e pecuária",
                afirmacao: "correto"
            }
        ]
    },
    {
        enunciado: "Qual destes é um recurso renovável?",
        alternativas: [
            {
                texto: "Petróleo",
                afirmacao: "errado"
            },
            {
                texto: "Energia solar",
                afirmacao: "correto"
            }
        ]
    },
    {
        enunciado: "Qual é o impacto do plástico no meio ambiente?",
        alternativas: [
            {
                texto: "Melhora a qualidade da água",
                afirmacao: "errado"
            },
            {
                texto: " Polui os oceanos e pode prejudicar a vida marinha",
                afirmacao: "correto"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();