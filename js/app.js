
function init(){
  document.getElementById('0').onmousedown = function(){
    this.style = "-webkit-transform:scale(0.9);transform:scale(0.9)"
    agregarNumero(this.id)
  }
  document.getElementById('0').onmouseup = function(){
    this.style = "-webkit-transform:scale(1);transform:scale(1)"
  }
  document.getElementById('1').onmousedown = function(){
    this.style = "-webkit-transform:scale(0.9);transform:scale(0.9)"
    agregarNumero(this.id)
  }
  document.getElementById('1').onmouseup = function(){
    this.style = "-webkit-transform:scale(1);transform:scale(1)"
  }
  document.getElementById('2').onmousedown = function(){
    this.style = "-webkit-transform:scale(0.9);transform:scale(0.9)"
    agregarNumero(this.id)
  }
  document.getElementById('2').onmouseup = function(){
    this.style = "-webkit-transform:scale(1);transform:scale(1)"
  }
  document.getElementById('3').onmousedown = function(){
    this.style = "-webkit-transform:scale(0.9);transform:scale(0.9)"
    agregarNumero(this.id)
  }
  document.getElementById('3').onmouseup = function(){
    this.style = "-webkit-transform:scale(1);transform:scale(1)"
  }
  document.getElementById('4').onmousedown = function(){
    this.style = "-webkit-transform:scale(0.9);transform:scale(0.9)"
    agregarNumero(this.id)
  }
  document.getElementById('4').onmouseup = function(){
    this.style = "-webkit-transform:scale(1);transform:scale(1)"
  }
  document.getElementById('5').onmousedown = function(){
    this.style = "-webkit-transform:scale(0.9);transform:scale(0.9)"
    agregarNumero(this.id)
  }
  document.getElementById('5').onmouseup = function(){
    this.style = "-webkit-transform:scale(1);transform:scale(1)"
  }
  document.getElementById('6').onmousedown = function(){
    this.style = "-webkit-transform:scale(0.9);transform:scale(0.9)"
    agregarNumero(this.id)
  }
  document.getElementById('6').onmouseup = function(){
    this.style = "-webkit-transform:scale(1);transform:scale(1)"
  }
  document.getElementById('7').onmousedown = function(){
    this.style = "-webkit-transform:scale(0.9);transform:scale(0.9)"
    agregarNumero(this.id)
  }
  document.getElementById('7').onmouseup = function(){
    this.style = "-webkit-transform:scale(1);transform:scale(1)"
  }
  document.getElementById('8').onmousedown = function(){
    this.style = "-webkit-transform:scale(0.9);transform:scale(0.9)"
    agregarNumero(this.id)
  }
  document.getElementById('8').onmouseup = function(){
    this.style = "-webkit-transform:scale(1);transform:scale(1)"
  }
  document.getElementById('9').onmousedown = function(){
    this.style = "-webkit-transform:scale(0.9);transform:scale(0.9)"
    agregarNumero(this.id)
  }
  document.getElementById('9').onmouseup = function(){
    this.style = "-webkit-transform:scale(1);transform:scale(1)"
  }
  document.getElementById('mas').onmousedown = function(){
    this.style = "-webkit-transform:scale(0.9);transform:scale(0.9)"
    sumar()
  }
  document.getElementById('mas').onmouseup = function(){
    this.style = "-webkit-transform:scale(1);transform:scale(1)"
  }
  document.getElementById('menos').onmousedown = function(){
    this.style = "-webkit-transform:scale(0.9);transform:scale(0.9)"
    restar()
  }
  document.getElementById('menos').onmouseup = function(){
    this.style = "-webkit-transform:scale(1);transform:scale(1)"
  }
  document.getElementById('por').onmousedown = function(){
    this.style = "-webkit-transform:scale(0.9);transform:scale(0.9)"
    producto()
  }
  document.getElementById('por').onmouseup = function(){
    this.style = "-webkit-transform:scale(1);transform:scale(1)"
  }
  document.getElementById('dividido').onmousedown = function(){
    this.style = "-webkit-transform:scale(0.9);transform:scale(0.9)"
    division()
  }
  document.getElementById('dividido').onmouseup = function(){
    this.style = "-webkit-transform:scale(1);transform:scale(1)"
  }
  document.getElementById('sign').onmousedown = function(){
    this.style = "-webkit-transform:scale(0.9);transform:scale(0.9)"
    if (!document.getElementById('display').innerHTML.includes('-')){
      signo = '-'
      agregarSigno(signo)
    }
  }
  document.getElementById('sign').onmouseup = function(){
    this.style = "-webkit-transform:scale(1);transform:scale(1)"
  }
  document.getElementById('punto').onmousedown = function(){
    this.style = "-webkit-transform:scale(0.9);transform:scale(0.9)"

    if (!document.getElementById('display').innerHTML.includes('.')){
      punto = '.'
      agregarNumero(punto)
    }

  }
  document.getElementById('punto').onmouseup = function(){
    this.style = "-webkit-transform:scale(1);transform:scale(1)"
  }
  document.getElementById('igual').onmousedown = function(){
    this.style = "-webkit-transform:scale(0.9);transform:scale(0.9)"
  }
  document.getElementById('igual').onmouseup = function(){
    this.style = "-webkit-transform:scale(1);transform:scale(1)"
  }
  document.getElementById('on').onmousedown = function(){
    this.style = "-webkit-transform:scale(0.9);transform:scale(0.9)"
    resetar()
  }
  document.getElementById('on').onmouseup = function(){
    this.style = "-webkit-transform:scale(1);transform:scale(1)"
  }

  var resultado, numero, numero2

  function agregarNumero(digito){
    var ceroInicial = document.getElementById('display').innerHTML
    var digitos = document.getElementById('display').innerHTML
    if (ceroInicial == '0'){
      document.getElementById('display').innerHTML = digito
    }else {
      if (digitos.length < 8){
        document.getElementById('display').innerHTML += digito
      }
    }
  }

  function sumar(){
    numero = document.getElementById('display').innerHTML
    operador = '+'
    limpiar()
  }

  function restar(){
    numero = document.getElementById('display').innerHTML
    operador = '-'
    limpiar()
  }

  function producto(){
    numero = document.getElementById('display').innerHTML
    operador = '*'
    limpiar()
  }

  function division(){
    numero = document.getElementById('display').innerHTML
    operador = '/'
    limpiar()
  }

  function limpiar(){
    document.getElementById('display').innerHTML = ''
  }

  document.getElementById('igual').addEventListener('click',function(){
    numero2 = document.getElementById('display').innerHTML
    operacion()
  })

  function operacion(){
    var res = 0
    switch (operador) {
      case '+':
        res = parseFloat(numero) + parseFloat(numero2)
        break;
      case '-':
        res = parseFloat(numero) - parseFloat(numero2)
        break;
      case '*':
        res = parseFloat(numero) * parseFloat(numero2)
        break;
      case '/':
        res = parseFloat(numero) / parseFloat(numero2)
        break;
    }
    limpiar()
    document.getElementById('display').innerHTML = res
  }


  function agregarSigno(signo){
    var cero = document.getElementById('display').innerHTML
    if (cero !== '0'){
      document.getElementById('display').innerHTML ='-'+document.getElementById('display').innerHTML
    }
  }

  function resetar(){
    document.getElementById('display').innerHTML = '0'
    numero = 0
    numero2 = 0
    operador = '';
  }
}
