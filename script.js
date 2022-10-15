function CalculaIMC(){
    document.getElementById("calcular").addEventListener("click", () => {
        let altura = document.getElementById("altura").value;
        let peso = document.getElementById("peso").value;
        let imc = peso / (altura * altura);
        if (imc < 18.5) {
            document.getElementById("resultado").innerHTML = `Seu IMC é ${imc.toFixed(2)} e você está abaixo do peso.`;
        }
        else if (imc >= 18.5 && imc < 25) {
            document.getElementById("resultado").innerHTML = `Seu IMC é ${imc.toFixed(2)} e você está com o peso normal.`;
        }
        else if (imc >= 25 && imc < 30) {
            document.getElementById("resultado").innerHTML = `Seu IMC é ${imc.toFixed(2)} e você está acima do peso.`;
        }
        else if (imc >= 30 && imc < 35) {
            document.getElementById("resultado").innerHTML = `Seu IMC é ${imc.toFixed(2)} e você está com obesidade grau 1.`;
        }
        else if (imc >= 35 && imc < 40) {
            document.getElementById("resultado").innerHTML = `Seu IMC é ${imc.toFixed(2)} e você está com obesidade grau 2.`;
        }
        else if (imc >= 40) {
            document.getElementById("resultado").innerHTML = `Seu IMC é ${imc.toFixed(2)} e você está com obesidade grau 3.`;
        }
    });
}
CalculaIMC();
