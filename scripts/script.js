// Tela de acessibilidade
// Busca a cor e tamanho da letra guardada na localStorage
cor = window.localStorage.getItem('corTema');
letra = parseFloat(window.localStorage.getItem('tamanhoLetra'));

// Define o tema em qualquer página
if (window.localStorage.getItem('corTema') == 'escuro') {
    temaEscuro();
} else {
    temaClaro();
}

// Caso nunca tenha definido o tamanho da letra, ele define como 1rem
if (window.localStorage.getItem('tamanhoLetra') == null) {
    window.localStorage.setItem('tamanhoLetra', 1);
}

defineTamanhoLetra(letra);

// Evento botão tema claro
var btnTemaClaro = document.getElementById('btnTemaClaro');
btnTemaClaro.onclick = function () {
    window.localStorage.setItem('corTema', 'claro');
    temaClaro();
};

// Evento botão tema esuro
var btnTemaEscuro = document.getElementById('btnTemaEscuro');
btnTemaEscuro.onclick = function () {
    window.localStorage.setItem('corTema', 'escuro');
    temaEscuro();
};

// Evento botão diminuir letra
var btnLetraMenos = document.getElementById('btnLetraMenos');
btnLetraMenos.onclick = function () {
    novoTamanho = letra - 0.1;
    window.localStorage.setItem('tamanhoLetra', novoTamanho);
    defineTamanhoLetra(novoTamanho);
    location.reload();
};

// Evento botão aumentar letra
var btnLetraMais = document.getElementById('btnLetraMais');
btnLetraMais.onclick = function () {
    novoTamanho = letra + 0.1;
    window.localStorage.setItem('tamanhoLetra', novoTamanho);
    defineTamanhoLetra(novoTamanho);
    location.reload();
};

// Evento reseta o tamanho da letra para 1rem
var btnLetraReset = document.getElementById('btnLetraReset');
btnLetraReset.onclick = function () {
    novoTamanho = 1;
    window.localStorage.setItem('tamanhoLetra', novoTamanho);
    defineTamanhoLetra(novoTamanho);
    location.reload();
};


// Funcoes
// Seta o tema claro
function temaClaro() {
    document.body.style.setProperty('--cor-letra', 'black');
    document.body.style.setProperty('--cor-fundo-letra', 'aliceblue');
    document.body.style.setProperty('--cor-fundo', 'white');
    document.body.style.setProperty('--cor-fundo-card', 'white');
}

// Seta o tema escuro
function temaEscuro() {
    document.body.style.setProperty('--cor-letra', 'white');
    document.body.style.setProperty('--cor-fundo-letra', '#1d1d1d');
    document.body.style.setProperty('--cor-fundo', '#1d1d1d');
    document.body.style.setProperty('--cor-fundo-card', '#505050');
}

function defineTamanhoLetra(tamanho) {
    document.body.style.setProperty('--tamanho-fonte', tamanho + 'rem');
}
