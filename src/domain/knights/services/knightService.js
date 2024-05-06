const KnightRepository = require('../repositories/knightRepository');
const knightRepository = new KnightRepository();

class KnightService {
    async listKnights(filter) {
        if (filter === 'heroes') {
            return await knightRepository.findHeroes();  // Aqui deve ser implementado o filtro para heroes
        }
        return await knightRepository.findAll();
    }

    async createKnight(knightData) {
        return await knightRepository.create(knightData);
    }

    async getKnightById(id) {
        return await knightRepository.findById(id);
    }

    async deleteKnight(id) {
        return await knightRepository.softDelete(id);  // Assume que um método para soft delete esteja implementado
    }

    async updateKnightNickname(id, newNickname) {
        return await knightRepository.update(id, { nickname: newNickname });
    }

    async updateKnightNickname(id, newNickname) {
        return await knightRepository.update(id, { nickname: newNickname });
    }
}

module.exports = KnightService;
