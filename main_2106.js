document.querySelectorAll('.botao').forEach(btn => {
    btn.addEventListener('click',function() {
        document.querySelectorAll('.aba-conteudo').forEach(tab =>{
            tab.classList.remove('ativo');
        });
        const index = Array.from(document.querySelectorAll('.botao')).indexOf(this);
        document.querySelectorAll('.aba-conteudo')[index].classList.add('ativo');
    });
});


const contadores = document.querySelectorAll(".contador");
contadores[0].textContent = "Contagem regressiva";
const tempoObjetivo1 = new Date("2024-10-05T00:00:00");
contadores[0].textContent = tempoObjetivo1;
let tempoAtual = new Date();
contadores[0].textContent = tempoObjetivo1 - tempoAtual;


const botoes = document.querySelectorAll(".botao");
for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){
        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");{
                botoes[i].classList.add("ativo");
            }
        }
    }
}




