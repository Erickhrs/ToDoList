let searchbar = document.getElementById("searchbar");
let buttons = document.querySelectorAll(".bc")
deleteb = document.getElementById('delete')
var tabela = tabela = document.querySelector("#tabela");
var elementstd;
buttons.forEach(element => {
    element.addEventListener('click', function () {
        switch (element.id) {
            case "add":

                //criando os elementos
                var novalinha = document.createElement("tr");
                var desc = document.createElement("td");
                var del = document.createElement("td");

                //passando valor pra esses elementos
                desc.textContent = (searchbar.value);
                del.textContent = (deleteb.textContent);

                //passando as classes pra esses elementos, para que sigam o padrão
                desc.classList.add('content')
                del.classList.add('bc')
                del.id = "delete";
                del.title = "EXCLUIR";

                //adicionando os elementos td ao elemento tr
                novalinha.appendChild(desc);
                novalinha.appendChild(del);

                //adicionando o tr a tabela html
                tabela.appendChild(novalinha);
                del.addEventListener('click', function () {
                    trdel(this)
                })
                break;
            case "search":
                //passando o valor na searchbar para lowercase para futura comparação
                //selecionando todos os td da tabela e passando pra um objeto 
                let value = searchbar.value.toLowerCase();
                elementstd = document.querySelectorAll("tr");

                //transformando o objeto em uma array e depois fazendo uma ação para cada elemento
                //passando o valor de cada elemento para lowercase para comparar com o searchbar.value
                Array.from(elementstd).forEach((item => {
                    let value_item = item.textContent.toLowerCase();;
                    if (value_item.indexOf(value) >= 0) {
                        item.style.display = "block"
                    }
                    else if (value_item.indexOf(value) < 1) {
                        item.style.display = "none"
                    }
                    if (value == "") {
                        item.style.display = "block"
                    }
                }));
                break;
            case "delete":
                trdel(this)
                break
        }
    })
})

function trdel(element) {
    var tr = element.parentNode;
    tr.parentNode.removeChild(tr)
}


