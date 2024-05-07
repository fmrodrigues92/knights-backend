const KnightRepository = require('../repositories/knightRepository');
const knightRepository = new KnightRepository();

class KnightService {
    async listKnights(filter) {
        if (filter === 'heroes') {
            return await knightRepository.findHeroes();
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
        return await knightRepository.softDelete(id);
    }

    async updateKnightNickname(id, newNickname) {
        return await knightRepository.update(id, { nickname: newNickname });
    }

    async updateKnightNickname(id, newNickname) {
        return await knightRepository.update(id, { nickname: newNickname });
    }
}

module.exports = KnightService;
