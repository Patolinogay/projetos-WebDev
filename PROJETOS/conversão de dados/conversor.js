const visorG = document.getElementById('graus')
const visorM = document.getElementById('moeda')

//conversão de temperatura
function celcius(){
let valor = parseFloat(visorG.value)

if(!isNaN(valor)){
let result = ((valor-32)/1.8).toFixed(2)
visorG.value = result
}

}
function fah(){
let valor = parseFloat(visorG.value)

if(!isNaN(valor)){
    let result = ((valor*1.8)+32).toFixed(2)
    visorG.value = result
}

}

//conversão de moeda (padrão de real)
function dolar(){
let valor = parseFloat(visorM.value)

if(!isNaN(valor)){
    let result = (valor/5.13).toFixed(2)
    visorM.value = result
}
}
function euro(){
let valor = parseFloat(visorM.value)

if(!isNaN(valor)){
    let result = (valor/6.06).toFixed(2)
    visorM.value = result
}
}
function baht(){
let valor = parseFloat(visorM.value)

if(!isNaN(valor)){
    let result = (valor/0.17).toFixed(2)
    visorM.value = result
}
}