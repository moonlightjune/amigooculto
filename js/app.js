let amigosArr = [];
let listaAmigos = document.getElementById('lista-amigos');

function adicionar (){
    
    let nomeAmigo = document.getElementById('nome-amigo');
    
    
    if(nomeAmigo.value == ''){
        alert('Insira um nome válido!');
        return;
    }

    if(amigosArr.includes(nomeAmigo.value.toUpperCase())){
        nomeAmigo.value = '';
        alert('Este nome já existe na lista, verifique!');
        return;
    }

    amigosArr.push(nomeAmigo.value.toUpperCase());
    
    
    if(listaAmigos.textContent === ''){
        listaAmigos.textContent = nomeAmigo.value;
    } else {
        listaAmigos.textContent = listaAmigos.textContent + ',' + nomeAmigo.value;
    }    

    console.log(amigosArr);

    nomeAmigo.value = '';

    listaHandler();
    sorteioRefresh();
   
}

let sorteio = document.getElementById('lista-sorteio');

function sortear(){
    
    if(amigosArr.length < 4){
        alert('Insira pelo menos quatro nomes antes de realizar o sorteio!')
        return;
    }

    
    randomize(amigosArr);
    
    sorteio.textContent = '';

    for (let i = 0; i < amigosArr.length; i++){

        if(i == amigosArr.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + amigosArr[i] + ' --> ' + amigosArr[0] + '<br>';
        } else{
        sorteio.innerHTML = sorteio.innerHTML + amigosArr[i] + ' --> ' + amigosArr[i + 1] + '<br>';
         }
    }
     
}


function excluir(posicao){
    amigosArr.splice(posicao, 1);
    sorteioRefresh();
    listaHandler();
}

function sorteioRefresh(){
    sorteio.innerHTML = '';
}

function listaHandler(){
    listaAmigos.innerHTML = '';

    for(let i = 0; i < amigosArr.length; i++){
        
        let para = document.createElement('p');
        para.textContent = amigosArr[i];

        para.addEventListener('click', function(){
            excluir(i);
        });

        listaAmigos.appendChild(para);
    }

}




function reiniciar(){
    listaAmigos.textContent = '';
    sorteio.textContent = '';
    amigosArr = [];
}

function randomize(lista){
        for (let indice = lista.length; indice; indice--) {
    
            const indiceAleatorio = Math.floor(Math.random() * indice);
    
            [lista[indice - 1], lista[indiceAleatorio]] = 
                [lista[indiceAleatorio], lista[indice - 1]];
        }
}