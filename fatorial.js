function calcularFatorial(valor) {
    const valorDeNovo = valor
    if(valor <= 1 || valorDeNovo <= 1 || typeof valor === "string" || typeof valorDeNovo === "string" || Number.isInteger(valor) === false || Number.isInteger(valorDeNovo) === false) {

        console.log(valor)
        return;
    } else {
        valorDeNovo = valorDeNovo - 1;
        valor = valor * valorDeNovo; 
        return calcularFatorial(valor);
    }
}

calcularFatorial(5, 5);