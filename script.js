// PEGAR ELEMENTOS HTML VIA DOM
const soma = document.getElementById('soma');
const raizQuadrada = document.getElementById('raizQuadrada');
const potencia = document.getElementById('potencia');

soma.innerHTML = 0;
raizQuadrada.innerHTML = 0;
potencia.innerHTML = 0;

// CRIAR FUNÇOES DOS CALCULOS MATEMATICOS
function calcularSoma(x, y) {
  return x + y;
}

function calcularRaizQuadrada(x) {
  return Math.sqrt(x).toFixed(2);
}

function calcularPotencia(x, y) {
  return Math.pow(x, y);
}

//FAZER FUNÇAO PARA FAZER CALCULOS

function calcular() {
  const inputA = document.getElementById('primeiroNumero').value;
  const inputB = document.getElementById('segundoNumero').value;

  let a = parseFloat(inputA);
  let b = parseFloat(inputB);

  soma.innerHTML = calcularSoma(a, b);
  raizQuadrada.innerHTML = calcularRaizQuadrada(a);
  potencia.innerHTML = calcularPotencia(b, a);
}

function limpar() {
  const limparA = (document.getElementById('primeiroNumero').value = '');
  const limparB = (document.getElementById('segundoNumero').value = '');

  soma.innerHTML = '0';
  raizQuadrada.innerHTML = '0';
  potencia.innerHTML = '0';
}
