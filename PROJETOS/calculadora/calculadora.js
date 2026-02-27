const visor = document.getElementById('display')

function adicionar(valor){
    visor.value += valor
}

function limpar(){
    visor.value = ''
}

function calcular(){
try{
    visor.value = new Function('return ' + visor.value )()
}
catch{
    visor.value = "erro"
    setTimeout(limpar, 1500)
    }
}
