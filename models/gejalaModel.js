import { Sequelize } from "sequelize";
import db from "../database/conn.js";

const { DataTypes } = Sequelize;

const Gejala = db.define('gejala', {
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },

    deskripsi: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },

    cfPakar: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
}, {
    freezeTableName: true,
})

export default Gejala;