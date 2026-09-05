//variaveis
let volume, raio, altura

//processamento
function volume1(){
    //entrada
        altura = parseInt(document.getElementById("altura").value);
        raio = parseInt(document.getElementById("raio").value);
    volume = 3.14159 * (raio*raio) * altura;
        //saída
            document.getElementById("volume").innerHTML = volume + "cm³";
}
