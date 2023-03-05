
// Index
// Variaveis
var eventos = [{ "dia": "2023-03-04", "conteudo": "Evento 1" },
{ "dia": "2023-02-27", "conteudo": "Evento 2" },
{ "dia": "2023-01-12", "conteudo": "Evento 3" },
{ "dia": "2023-01-05", "conteudo": "Evento 4" },
{ "dia": "2022-12-24", "conteudo": "Evento 5" }];

// Pesquisa a data do evento
var btnEvento = document.getElementById('btnEvento');
btnEvento.onclick = function () {
    var dataEvento = document.getElementById('dataEvento').value;
    listarEventos(dataEvento);
};

var divEvento = document.getElementById('eventos');

listarEventos('');

//funcoes
function listarEventos(dataEvento) {

    limparDiv();

    if (dataEvento != '') {
        for (let i = 0; i <= eventos.length - 1; i++) {
            if (eventos[i].dia == dataEvento) {
                let conteudo;
                let div = document.createElement("div");
                div.classList = "row";

                let dia = document.createElement("p");
                conteudo = document.createTextNode(eventos[i].dia + ' - ' + eventos[i].conteudo);
                dia.appendChild(conteudo);
                div.appendChild(dia);

                divEvento.appendChild(dia);
            }
        }
    } else {
        for (let i = 0; i <= eventos.length - 1; i++) {
            let conteudo;
            let div = document.createElement("div");
            div.classList = "row";

            let dia = document.createElement("p");
            conteudo = document.createTextNode(eventos[i].dia + ' - ' + eventos[i].conteudo);
            dia.appendChild(conteudo);
            div.appendChild(dia);

            divEvento.appendChild(dia);
        }
    }
}

function limparDiv() {
    var elemento = document.querySelector("#eventos");
    while (divEvento.firstChild) {
        divEvento.removeChild(elemento.firstChild);
    }
}