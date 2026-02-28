const visorG = document.getElementById('graus')
const visorM = document.getElementById('moeda')

//conversão de temperatura
function temp(){
let valor = parseFloat(visorG.value)
let op = document.getElementById('param1').value 

switch(op){
    case 'celcius':
        if(!isNaN(valor)){
            let result = ((valor-32)/1.8).toFixed(2)
            visorG.value = result
        }
        break;
    case 'fah':
        if(!isNaN(valor)){
            let result = ((valor*1.8)+32).toFixed(2)
            visorG.value = result
        }
        break;
    }

}


//conversão de moeda (padrão de real)
function moeda(){
let valor = parseFloat(visorM.value)
let op = document.getElementById('param2').value

switch (op){
    case 'dolar':
        if(!isNaN(valor)){
            let result = (valor/5.13).toFixed(2)
            visorM.value = result
        }
        break;

    case 'euro':
        if(!isNaN(valor)){
            let result = (valor/6.06).toFixed(2)
            visorM.value = result
        }
        break;

    case 'baht':
        if(!isNaN(valor)){
            let result = (valor/0.17).toFixed(2)
            visorM.value = result
        }
        break;
    }
}

