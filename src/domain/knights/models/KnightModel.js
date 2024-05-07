const mongoose = require('mongoose');

const weaponSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mod: {
        type: Number,
        required: true
    },
    attr: {
        type: String,
        required: true
    },
    equipped: {
        type: Boolean,
        required: true,
        default: false
    }
});

const attributesSchema = new mongoose.Schema({
    strength: { type: Number, default: 0 },
    dexterity: { type: Number, default: 0 },
    constitution: { type: Number, default: 0 },
    intelligence: { type: Number, default: 0 },
    wisdom: { type: Number, default: 0 },
    charisma: { type: Number, default: 0 },
});

const knightSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: true
    },
    weapons: [weaponSchema],
    attributes: attributesSchema,
    keyAttribute: {
        type: String,
        required: true,
        enum: ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma']
    },
    deleted_at: {
        type: Date,
        default: null  // Valor inicial para representar que o registro não foi deletado
    }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

const Knight = mongoose.model('Knight', knightSchema);

module.exports = Knight;