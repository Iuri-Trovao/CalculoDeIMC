let button = document.getElementById('button');
button.addEventListener('click', function (){
    let peso = parseFloat(document.getElementById('peso').value) ;
    let altura = parseFloat(document.getElementById('altura').value); 
    let IMC = peso / (altura * altura);
    let resultado = document.getElementById('res');
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.textContent = "Por favor, insira valores válidos.";
        return;
    }else
    if(IMC < 18.5){
        resultado.textContent = "Abaixo do peso";
    }else
    if(IMC >= 18.5 && IMC <= 24.9){
        resultado.textContent = "Peso normal";
    }else 
    if(IMC >= 25 && IMC <= 29.9){
        resultado.textContent = "Sobrepeso";
    }else 
    if(IMC >= 30 && IMC <= 34.9){
        resultado.textContent = "Obesidade grau I";
    }else 
    if(IMC >= 35 && IMC <= 39.0){
        resultado.textContent = "Obesidade grau II";
    }else 
    if(IMC >= 40){
        resultado.textContent = "Obesidade grau III"
    }

});

let tempo = document.getElementById('data');
let data = new Date();
tempo.textContent = data.getFullYear();


