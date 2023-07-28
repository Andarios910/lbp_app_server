import { Sequelize } from "sequelize";
import db from "../database/conn.js";

const { DataTypes } = Sequelize;

const Solusi = db.define('solusi', {
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },

    solusi: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
}, {
    freezeTableName: true,
})

export default Solusi;