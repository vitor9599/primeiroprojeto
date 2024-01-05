let input = document.querySelector("#input-principal")/*01 pegar input*/ 
let button = document.querySelector("#botao-adicionar")/*01 pegar button*/ 
let listaCompleta = document.querySelector("#tarefas")/* 03 cria lista*/ 
 let arrayDeTarefas =[]/*03 array []*/ 

function mostrarNaTela (){/*04 a funcao*/ 
    let novaLista = ""/*05*/ 
    arrayDeTarefas.forEach(tarefa =>{/*06 foreach dpois colcar tarefa*/ 
       /*06 li $ p*/  novaLista = novaLista + ` 
        <li class="item-tarefa">
        <p> ${tarefa}</p>
        </li>  
        ` 
    })
    listaCompleta.innerHTML = novaLista/*08 inserir na tela*/


}

function  cliqueiNoBotao(){/*02 criar funcao com(input.value) */ 
    arrayDeTarefas.push(input.value)/*03 arry com push adiciona tudo do array*/ 
    mostrarNaTela ()/*07 chamar a funcao */ 
}
button.addEventListener("click" , cliqueiNoBotao)/*02 adicionar add*/ 

    
     
