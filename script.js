let seuVotoPara = document.querySelector(".d1_1 span");
let cargo = document.querySelector(".d1_2 span");
let descricao = document.querySelector(".d1_4");
let aviso = document.querySelector(".d2");
let lateral = document.querySelector(".d1_right");
let numeros = document.querySelector(".d1_3");

let etapaAtual = 0;
let numero = '';

function iniciarEtapa(){
  let etapa = etapas[etapaAtual];

  let numeroHtml = '';

  for (let index = 0; index < etapa.numeros; index++) {
    numeroHtml += ' <div class="numero"></div>';
    
  }

  seuVotoPara.style.display = 'none';
  cargo.innerHTML = etapa.titulo;
  descricao.innerHTML = '';
  aviso.style.display = 'none';
  lateral.innerHTML = '';
  numeros.innerHTML = numeroHtml;
}

function atualizaInterface(){
  
}

function clicou(n){
  alert(" Clicou em " + n)
}

function branco(){
  alert(" Clicou em BRANCO! ")
}

function corrige(){
  alert(" Clicou em CORRIGE! ")
}

function confirma(){
  alert(" Clicou em CONFIRMA! ")
}