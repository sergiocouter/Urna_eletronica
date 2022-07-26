let seuVotoPara = document.querySelector(".d1_1 span");
let cargo = document.querySelector(".d1_2 span");
let descricao = document.querySelector(".d1_4");
let aviso = document.querySelector(".d2");
let lateral = document.querySelector(".d1_right");
let numeros = document.querySelector(".d1_3");

let etapaAtual = 0;
let numero = ''; // numero que será digitado
let votoBranco = false;
let corrigir = true;

function comecarEtapa(){
    let etapa = etapas[etapaAtual];
    let numeroHtml = ''; // variavel pra colocar nos numeros
    numero = '';
    votoBranco = false;
    corrigir = true;

    for (let i = 0; i < etapa.numeros; i++) {
        if(i === 0){ // if para que a 1 posicao pisque
            numeroHtml += '<div class="numero pisca"></div>';   
        } else{
            numeroHtml += '<div class="numero"></div>';
        }
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}

function atualizaInterface(){
    let etapa = etapas[etapaAtual];  
    let candidato = etapa.candidatos.filter((item) => {
        if(item.numero === numero) {
            return true;
        }else{
            return false;
        }
    });
    seuVotoPara.style.display = 'block';
    aviso.style.display = 'block';
    
    if(candidato.length > 0){
        candidato = candidato[0]; // caso tenha mais candidatos com o mesmo numero
        descricao.innerHTML = `Nome: ${candidato.nome} <br>Partido: ${candidato.partido}<br>`;
        if(candidato.vice !== undefined){ // se possuir vice
            descricao.innerHTML += `Vice: ${candidato.vice}`;    
        }
        
        let fotosHtml = '';
        for (let i in candidato.fotos) {
          if(candidato.fotos[i].small){
            fotosHtml += `<div class="d1_imagem small"><img src="${candidato.fotos[i].url}" alt="foto_prefeito">${candidato.fotos[i].legenda}</div>`;
          } else{
            fotosHtml += `<div class="d1_imagem"><img src="${candidato.fotos[i].url}" alt="foto_prefeito">${candidato.fotos[i].legenda}</div>`;
          }
          
        }

        lateral.innerHTML = fotosHtml;

      }else{ // se não achar candidato 
        descricao.innerHTML = '<div class="aviso_grande pisca"><br>VOTO NULO</div>';
    }
}

function clicou(n){
    let numeroP = document.querySelector('.numero.pisca');
    if(numeroP !== null) {
        numeroP.innerHTML = n;
        numero += n;

        numeroP.classList.remove('pisca');
        if(numeroP.nextElementSibling !== null){
            numeroP.nextElementSibling.classList.add('pisca');
        } else{
            atualizaInterface();
        }
    }    
}

function branco(){
    if(numero === ''){
        votoBranco = true;
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        numeros.innerHTML = '';
        descricao.innerHTML = '<div class="aviso_grande_1 pisca">VOTO EM BRANCO</div>';            
    } else{
        alert('Para votar em BRANCO \no campo de voto deve estar vazio.\n'+ 
            'Aperte CORRIGE para apagar o campo de voto.');
    }
}

function corrige(){
    if(corrigir){ // variavel corrigir existe para não dar erro ao concluir tudo
        comecarEtapa();
    }
}

function confirma(){
    let etapa = etapas[etapaAtual];
    let votoConfirmado = false;
    
    if(votoBranco){
        votoConfirmado = true;
        console.log('Confirmando como voto BRANCO');
    } else if(numero.length === etapa.numeros){
        votoConfirmado = true;
        console.log('Confirmando como '+ numero);    
    }
    
    if(votoConfirmado){
        etapaAtual++;
        if(etapas[etapaAtual] !== undefined){
            comecarEtapa();
        } else{
            corrigir = false;
            document.querySelector('.tela').innerHTML = '<div class="aviso_gigante pisca">FIM</div>';    
        }
    }
}

comecarEtapa();