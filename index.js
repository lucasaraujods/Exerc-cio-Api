
class Carro{

    Marca
    Modelo
    Categoria
    Ano
    Quilometragem
    Valor
    

    constructor(marca, modelo, categoria, ano , quilometragem, valor){

        this.Marca = marca
        this.Modelo = modelo
        this.Categoria = categoria
        this.Ano = ano
        this.Quilometragem = quilometragem
        this.Valor = valor
    }
}

// Definindo as variáveis antes de criar o objeto
let marca = "honda"
let modelo = "civic";
let categoria = "sedan";
let ano = 2024;
let quilometragem = 90000;
let valor = 100000;

let  objetoCarro = new Carro(marca, modelo, categoria, ano , quilometragem, valor)

function Get(){
    //trocar a api
    return fetch('https://apigenerator.dronahq.com/api/N-fh4pTh/testcar')
    .then((resposta) => resposta.json()) //O método then é usado para manipular a resposta da fetch quando a promessa é resolvida. A resposta.json() é um método que converte a resposta da requisição em um objeto JSON. Este método também retorna uma Promise.
    .then((data) => console.log(data));
}

function GetByID() {

    return fetch('https://apigenerator.dronahq.com/api/N-fh4pTh/testcar/1') // pode ser o erro<>
  
      .then((response) => response.json())
  
      .then((data) => console.log(data));
  }

async function postData(url = 'https://apigenerator.dronahq.com/api/N-fh4pTh/testcar',data ={}) { //chamar a função passar a url no parametro e coocar o await antes do nome da função!!

    // Aqui, vemos o AWAIT, ele faz com que a respota do fecth que taz uma promisse, faça de forma sequencial, esperar quando eu quiser ou não passar, so que quando estamos dentro de uma função assíncrona, eu consigo simplismente usar o await, ou seja, esperar o resultado da promisse antes de passar para a proxima linha.
    const resposta = await fetch(url, {

        method:  'POST', // Get, post, put, delete, etc.
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)    
    }); 

    return resposta.json(); // retorno da função 
}

postData('https://apigenerator.dronahq.com/api/N-fh4pTh/testcar', objetoCarro /* Objeto a ser usado*/)
.then((data => {
    console.log(data);
}));

async function putData(url = 'https://apigenerator.dronahq.com/api/N-fh4pTh/testcar/2',data ={}) { //chamar a função passar a url no parametro e coocar o await antes do nome da função!!

    // Aqui, vemos o AWAIT, ele faz com que a respota do fecth que taz uma promisse, faça de forma sequencial, esperar quando eu quiser ou não passar, so que quando estamos dentro de uma função assíncrona, eu consigo simplismente usar o await, ou seja, esperar o resultado da promisse antes de passar para a proxima linha.
    const resposta = await fetch(url, {

        method:  'PUT', // Get, post, put, delete, etc.
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)    
    }); 

    return resposta.json(); // retorno da função 
}

// Precisamos atualizar, por isso houve a Chamada PUT com o objeto Carro atualizado e o modelo que queremos atualizar no ID 1, como demostra na url:
objetoCarro.Ano = 2024 //// Atualizando o modelo
putData('https://apigenerator.dronahq.com/api/N-fh4pTh/testcar/2', objetoCarro /* Objeto a ser usado*/) 
.then((data => {
    console.log(data);
}));

async function deleteData(url = 'https://apigenerator.dronahq.com/api/N-fh4pTh/testcar/3') { //chamar a função passar a url no parametro e coocar o await antes do nome da função, assim no DELETE não é necessario passar o objeto de data, ou seja o corpo, porque localizamos o endereço de onde queremos deletar pelo ID, na url dado abaixo!!

    // Aqui, vemos o AWAIT, ele faz com que a respota do fecth que taz uma promisse, faça de forma sequencial, esperar quando eu quiser ou não passar, so que quando estamos dentro de uma função assíncrona, eu consigo simplismente usar o await, ou seja, esperar o resultado da promisse antes de passar para a proxima linha.
    const resposta = await fetch(url, {

        method:  'DELETE', // Get, post, put, delete, etc.
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',  
    }); 

    return resposta.json(); // retorno da função 
}

// Chamada para excluir o carro com ID 1 no parametro
deleteData('https://apigenerator.dronahq.com/api/N-fh4pTh/testcar/3'/* Não é necessario passar Objeto a ser usado*/) 
.then((data => {
    console.log(data);
}));









