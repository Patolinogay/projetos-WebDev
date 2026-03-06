const delay = ms => new Promise(res => setTimeout(res, ms));

const paineis = [...document.querySelectorAll('.painel')];
let sequenciaJogo = [];
let sequenciaJogador = [];
let podeClicar = false;

async function iniciarRodada() {
    podeClicar = false;
    sequenciaJogador = []; 
  
    sequenciaJogo = [...paineis].sort(() => Math.random() - 0.5);

    for (const div of sequenciaJogo) {
        div.classList.add('piscar');      
        await delay(400);                 
        div.classList.remove('piscar');  
        await delay(200);                 
    }

    podeClicar = true; 
}

paineis.forEach(painel => {
    painel.addEventListener('click', (e) => {
        if (!podeClicar) return;

        const elementoClicado = e.target;
        
        sequenciaJogador.push(elementoClicado);
    
        const indexAtual = sequenciaJogador.length - 1;

        
        if (sequenciaJogador[indexAtual] !== sequenciaJogo[indexAtual]) {
            finalizarJogo(false); 
            return;
        }

     
        if (sequenciaJogador.length === sequenciaJogo.length) {
            finalizarJogo(true); 
        }
    });
});

async function finalizarJogo(venceu) {
    podeClicar = false;
    const classe = venceu ? 'sucesso' : 'erro';

    paineis.forEach(p => p.classList.add(classe));
    await delay(800);
    paineis.forEach(p => p.classList.remove(classe));

    setTimeout(iniciarRodada, 1000);
}

setTimeout(iniciarRodada, 1000);
