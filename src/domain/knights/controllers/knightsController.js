const KnightService = require('../services/knightService');

class KnightsController {

    async getKnights(req, res) {
        try {

            const knightServiceClass = new KnightService();
            const { calcularIdade, calcularAtaque, calcularExp } = require('../rules'); // Importando as funções de regras
            const Knight = require('../Knight');

            const filter = req.query.filter;
            const knights = await knightServiceClass.listKnights(filter); // Usando knightServiceClass
            
            // Mapeia os knights para o formato desejado
            const formattedKnights = knights.map(knight => new Knight(
                knight.id,
                knight.name,
                knight.nickname,
                knight.birthday,
                knight.weapons.length,
                knight.keyAttribute,
                knight.attributes,
                knight.weapons,
                knight.deleted_at
            ));

            // Calcula o ataque e a exp para cada knight
            formattedKnights.forEach(knight => {
                knight.ataque = calcularAtaque(knight);
                knight.exp = calcularExp(knight);
            });

            formattedKnights.forEach(knight => {
                knight.idade = calcularIdade(knight.idade);
            });

            res.json(formattedKnights);

        } catch (error) {
            res.status(500).send({ message: "An error occurred", error });
        }
    }

    async createKnight(req, res) {
        try {

            const knightServiceClass = new KnightService();

            const knightData = req.body;
            const knight = await knightServiceClass.createKnight(knightData);
            res.status(201).json(knight);
        } catch (error) {
            res.status(400).send({ message: "Unable to create knight", error });
        }
    }

    async getKnight(req, res) {
        try {

            const knightServiceClass = new KnightService();

            const id = req.params.id;
            const knight = await knightServiceClass.getKnightById(id);
            res.json(knight);
        } catch (error) {
            res.status(404).send({ message: "Knight not found", error });
        }
    }

    async deleteKnight(req, res) {
        try {

            const knightServiceClass = new KnightService();

            const id = req.params.id;
            await knightServiceClass.deleteKnight(id); 
            res.status(204).send();  
        } catch (error) {
            res.status(500).send({ message: "Failed to delete knight", error });
        }
    }

    async updateKnightNickname(req, res) {
        try {
            const knightServiceClass = new KnightService();
            
            const id = req.params.id;
            const newNickname = req.body.nickname;
            const knight = await knightServiceClass.updateKnightNickname(id, newNickname);
            res.json(knight);
        } catch (error) {
            res.status(400).send({ message: "Unable to update knight", error });
        }
    }
}

module.exports = new KnightsController(new KnightService());
