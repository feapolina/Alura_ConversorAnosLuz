function converter() {
    var qntdAnosLuz = document.getElementById("inputNumeros").value;
    var qntdEmKm = 9460800000000;
    var resultado = qntdAnosLuz * qntdEmKm;
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado + " km";

    document.getElementById("resultadoTempo").innerHTML = "Será necessário " + qntdAnosLuz + " anos para chegar até lá.";
}
