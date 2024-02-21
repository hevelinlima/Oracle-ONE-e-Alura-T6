let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag,texto){
  let tela = document.querySelector(tag);
  tela.innerHTML = texto;
}

function mensagemInicial(){
  exibirTextoNaTela('h1','Jogo do número secreto');
  exibirTextoNaTela('p', 'Digite um número entre 1 e 10');
}

mensagemInicial();

function verificarChute(){
  let chute = document.querySelector('input').value
  if (chute == numeroSecreto){
    exibirTextoNaTela('h1','Parabéns!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativa = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}!`
    exibirTextoNaTela('p', mensagemTentativa);
    document.getElementById('reiniciar').removeAttribute('disabled');
  }else{
    if (chute > numeroSecreto){
      exibirTextoNaTela('p', 'O número secreto é menor.');
    }else{
        exibirTextoNaTela('p', 'O número secreto é maior.');
    }
    tentativas++;
    limparCampo();
  }
}

function gerarNumeroAleatorio(){
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeNumerosSorteados = listaDeNumerosSorteados.length;

  if (quantidadeDeNumerosSorteados == numeroLimite){
    listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
  }else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados)
    return numeroEscolhido;
  }
}

function limparCampo(){
  chute = document.querySelector('input')
  chute.value = '';
}

function novoJogo(){
  numeroSecreto = gerarNumeroAleatorio();
  tentativas = 1 ;
  mensagemInicial();
  limparCampo();
  document.getElementById('reiniciar').setAttribute('disabled', true)
}
