const KnightModel = require('../models/KnightModel');

class KnightRepository {
    async findAll() {
        return await KnightModel.find();
    }

    async findHeroes() {
        return await KnightModel.find({ 'deleted_at': { $ne: null } });
    }

    async findById(id) {
        return await KnightModel.findById(id);
    }

    async create(knightData) {
        const knight = new KnightModel(knightData);
        return await knight.save();
    }

    async update(id, updatedData) {
        return await KnightModel.findByIdAndUpdate(id, updatedData);
    }

    async softDelete(id) {
        const deletionDate = new Date();
        return await KnightModel.findByIdAndUpdate(id, { deleted_at: deletionDate }, { new: true });
    }
        
}

module.exports = KnightRepository;
