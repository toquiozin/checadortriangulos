function checar()
{
  var lado1 = document.getElementById("ld1").value;
  var lado2 = document.getElementById("ld2").value;
  var lado3 = document.getElementById("ld3").value;
  const imagem = document.querySelector('#imagem');

    if(lado1 == lado2 && lado2 == lado3)
  {
        imagem.setAttribute("src","./css/img/equilatero.jpg");  
  }
  else if(lado1 == lado2 && lado2 != lado3 || lado1 == lado3 && lado3 != lado2 && lado2 == lado1 && lado1 != lado3 || lado2 == lado3 && lado3 != lado1 && lado3 == lado1 && lado1 != lado2 || lado3 == lado2 && lado2 != lado1)
  {
            imagem.setAttribute("src","./css/img/isoseles.jpg");  
  }
  else if(lado1 != lado2 && lado1 != lado3 && lado3 != lado2 && lado3 != lado1 && lado2 != lado1 && lado2 != lado3 )
  {
                imagem.setAttribute("src","./css/img/escaleno.jpg");  
  }else{
    document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.vibrate);
}
  }

}

