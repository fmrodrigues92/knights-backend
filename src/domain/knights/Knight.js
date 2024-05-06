// domain/knights/Knight.js

class Knight {
    constructor(id, nome, nickname, idade, armas, atributo, atributos, weapons, deleted) {
        this.id = id;
        this.nome = nome;
        this.nickname = nickname
        this.idade = idade;
        this.armas = armas;
        this.atributo = atributo;
        this.atributos = atributos,
        this.weapons = weapons;
        this.hero = (deleted != null) ? true : false
    }
}

module.exports = Knight;
