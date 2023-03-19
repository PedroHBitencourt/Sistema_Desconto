const valorOriginal = document.getElementById('valor_original');
const desconto = document.getElementById('desconto');
const mostrarDesc = document.getElementById('mostrar_desc');
const resultadoOriginal = document.getElementById('resultado_original');
const valorDesconto = document.getElementById('valor_desconto');

function mostrarValores(){
    const varDesconto = desconto.value;
    const varOriginal = valorOriginal.value;

    //Tratar os dados para evitar futuros erros.

    if(varDesconto > 50){
        alert("Valor de desconto incorreto, informe um número de 0 a 50");
        desconto.value = '';
    }

    if(varOriginal > 1000000){
        alert("Valor muito alto!");
        valorOriginal.value = '';
        resultadoOriginal.innerHTML = 0;
        valorDesconto.innerHTML = 0;
    }

    let num = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(varOriginal);

    //DEVOLVER OS VALORES PARA O LAYOUT.

    if(varDesconto >= 1){
        mostrarDesc.innerHTML = varDesconto;
    }else{
        mostrarDesc.innerHTML = 0;
    }

    resultadoOriginal.innerHTML = num;

    //retirar valores após apagado
    if(resultadoOriginal === 0 && varDesconto ===0){
        varDesconto.innerHTML = 0;
        varOriginal.innerHTML = 0;
        valorDesconto.innerHTML = 0;
    }

    if(varOriginal >= 1 && varDesconto >= 1){
        const resultado = varOriginal - ((varOriginal * parseInt(varDesconto)) / 100);
        let result = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(resultado);
        valorDesconto.innerHTML = result;
        console.log(varOriginal);
    }
}

function apagarDados(){
    valorOriginal.value = '';
    desconto.value = '';
    mostrarDesc.innerHTML = 0;
    resultadoOriginal.innerHTML = 0;
    valorDesconto.innerHTML = 0;
}


// const number = 76346.45;

// // United state $
// let num = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);
// console.log(num);
// // Indian rupee ₹
// num = new Intl.NumberFormat('hi-IN', { style: 'currency', currency: 'INR' }).format(number);
// console.log(num);
