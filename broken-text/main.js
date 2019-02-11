//el codigo original es de Yusuke Nakaya, está hecho en pug y pueden encontrar el trabajo en CodeMyUi
//yo elegí hacerlo de una manera mas tradicional con simple y puro JS

window.onload = miFuncion

function miFuncion(){

var ui = document.getElementById('ui')
var palabra = "NEVERMIND"

  for( var i = 0; i < 40; i++ ){

    var text = document.createElement('div')
    var text_inner1 = document.createElement('div')
    var text_inner2 = document.createElement('div')

    text_inner1.className = 'text_inner1'
    text_inner2.className = 'text_inner2'
    text.className = 'text'

    ui.appendChild(text)
    text.appendChild(text_inner1)
    text_inner1.appendChild(text_inner2)
    text_inner2.innerHTML = palabra
  }
}
