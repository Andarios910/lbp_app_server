import { Sequelize } from "sequelize";
import db from "../database/conn.js";

const { DataTypes } = Sequelize;

const Answers = db.define('answers', {
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },

    answer: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    }
}, {
    freezeTableName: true,
})

// Questions.hasMany(Options);
// Options.belongsTo(Questions, {foreignKey: 'questionId'})

export default Answers;