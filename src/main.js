import GeraCPF from './modules/GeraCPF';
import './assets/css/style.css';

document.querySelector(".gerar").addEventListener("click", function(event){
    event.preventDefault();
    gerar();
  });

function gerar() {
    const gera = new GeraCPF;
    const cpfGerado = document.querySelector('.cpf-gerado');
    return cpfGerado.innerHTML = gera.geraNovoCPF();
};