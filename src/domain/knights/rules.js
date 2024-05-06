// domain/knights/rules.js

// Função para calcular a idade com base na data de nascimento
function calcularIdade(dataNascimento) {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    const diferencaAnos = hoje.getFullYear() - nascimento.getFullYear();
    if (new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate()) < new Date(hoje.getFullYear(), nascimento.getMonth(), nascimento.getDate())) {
        return diferencaAnos - 1;
    }
    return diferencaAnos;
}

// Função para calcular o ataque
function calcularAtaque(knight) {
    // Calcula o modificador do atributo chave
    const keyAttribute = knight.atributos[knight.atributo];
    let modificadorAtributo;
    if (keyAttribute >= 0 && keyAttribute <= 8) {
        modificadorAtributo = -2;
    } else if (keyAttribute >= 9 && keyAttribute <= 10) {
        modificadorAtributo = -1;
    } else if (keyAttribute >= 11 && keyAttribute <= 12) {
        modificadorAtributo = 0;
    } else if (keyAttribute >= 13 && keyAttribute <= 15) {
        modificadorAtributo = 1;
    } else if (keyAttribute >= 16 && keyAttribute <= 18) {
        modificadorAtributo = 2;
    } else {
        modificadorAtributo = 3;
    }
    
    // Calcula o modificador da arma equipada
    let modificadorArma = 0;
    knight.weapons.forEach(arma => {
        if (arma.equipped) {
            modificadorArma += arma.mod;
        }
    });
    
    // Calcula e retorna o ataque total
    return 10 + modificadorAtributo + modificadorArma;
}

// Função para calcular a experiência
function calcularExp(knight) {
    const idade = calcularIdade(knight.idade);
    // Se o knight tiver menos de 7 anos de idade, sua experiência é 0
    if (idade < 7) {
        return 0;
    }

    // Calcula e retorna a experiência de acordo com a fórmula fornecida
    return Math.floor((idade - 7) * Math.pow(22, 1.45));
}

module.exports = {
    calcularIdade,
    calcularAtaque,
    calcularExp
};