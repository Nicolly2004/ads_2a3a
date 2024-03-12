/*IMC peso / (altura *  altura)
abaixo de 18.5 = Desnutrição
entre 18.5 e 25 = Peso normal
entre 25 e 30 = Sobrepeso
entre 30 e 35 = Obesidade grau 1
entre 35 e 40 = Obesidade grau 2
acima de 40 = Obesidade grau 3
*/
 
//resultado com console 

calculaImc(65,1.63)
classificarImc(20)

function calculaImc(argPeso,argAlt){
    let imc
    imc = argPeso/(argAlt**2)
    console.log(imc)
}

function classificarImc(argImc){
    if(argImc < 18.5){
        console.log('Desnutrido')
    }
    else if(argImc < 25){
        console.log('Peso normal')
    }
    else if(argImc < 30){
        console.log('Sobrepeso')
    }
    else if(argImc < 35){
        console.log('Obesidade grau 1')
    }
    else if(argImc < 40){
        console.log('Obesidade grau 2')
    }
    else {
        console.log('Obesidade grau 3')
    }
}
