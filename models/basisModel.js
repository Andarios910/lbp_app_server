import { Sequelize } from "sequelize";
import db from "../database/conn";

const { DataTypes } = Sequelize;

const BasisPengetahuan  = db.define('basis-pengetahuan', {
    idPenyakit: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },

    idGejala: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
}, {
    freezeTableName: true,
})

export default BasisPengetahuan;