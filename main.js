    const resultado = document.getElementById('resultado')
    const calcular = document.getElementById('calcular')
   

function calculo_Imc(){
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    
    if (nome =='' && altura =="" && peso ==''){
        resultado.textContent = 'Preencha os campos para continuar'
    } else {
        const imc = (peso / (altura * altura)).toFixed(1)

        if (imc < 18.5){
            resultado.textContent = `${nome}, seu IMC é ${imc}. Você está muito abaixo do peso!!`
        } else if (imc < 24.9) {
            resultado.textContent = `${nome}, seu IMC é ${imc}. Você está no peso normal!!`
        } else if ( imc < 30){
            resultado.textContent = `${nome}, seu IMC é ${imc}. Você está sobrepeso!!`
        }else if ( imc < 34.9){
            resultado.textContent = `${nome}, seu iIMC é ${imc}. Você está com obesidade grau I!!`
        }
        else if ( imc < 39.9){
            resultado.textContent = `${nome}, seu iIMC é ${imc}. Você está com obesidade grau II!!`
        } else {
            resultado.textContent = `${nome}, seu iIMC é ${imc}. Você está com obesidade grau III!!!`
        }
    }
}


calcular.addEventListener ('click', calculo_Imc)


