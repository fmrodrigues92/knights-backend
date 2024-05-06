class Knight {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.nickname = `Sir ${name}`;
        this.birthday = new Date();
        this.weapons = [
            {
                "name": "sword",
                "mod": 3,
                "attr": " strength",
                "equipped": true
            }
        ];
        this.atributes = {
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0,
        };
        this.keyAttribute = 'strength';
    }

}

module.exports = Knight;