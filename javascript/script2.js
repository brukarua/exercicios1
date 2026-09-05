//variaveis
let volume, raio, altura

//processamento
function volume1(){
    //entrada
        altura = parseInt(document.getElementById("altura").value);
        comprimento = parseInt(document.getElementById("comprimento").value);
        largura = parseInt(document.getElementById("largura").value);
    volume = altura * comprimento * largura;
        //saída
            document.getElementById("volume").innerHTML = volume + "cm³";
}
