import { Sequelize } from 'sequelize';
import db from '../database/conn.js';
import Answers from './answerModel.js';

const { DataTypes } = Sequelize;

const Questions = db.define('questions', {
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },

    question: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },

    option: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },

    answerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
}, {
    freezeTableName: true,
})

Answers.hasMany(Questions);
Questions.belongsTo(Answers, {foreignKey: 'answerId'});

export default Questions;