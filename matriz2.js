const matriz = ["Tiago", "Santos", "Jesus"];

function mostrarDadosMatriz(param) {

    if(param.length > 0){
        console.log(param.shift());
        return mostrarDadosMatriz(param);
    };

};

mostrarDadosMatriz(matriz);