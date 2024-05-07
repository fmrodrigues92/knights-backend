// Função para calcular a idade com base na data de nascimento
function calcularIdade(dataNascimento) {
    const hoje = new Date();
    const partesDataNascimento = dataNascimento.split('-');
    const nascimento = new Date(partesDataNascimento[0], partesDataNascimento[1] - 1, partesDataNascimento[2]);
    const diferencaAnos = hoje.getFullYear() - nascimento.getFullYear();
    if (hoje < new Date(hoje.getFullYear(), nascimento.getMonth(), nascimento.getDate())) {
        return diferencaAnos - 1;
    }
    console.log(diferencaAnos);
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