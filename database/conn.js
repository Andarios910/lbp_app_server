import { Sequelize } from 'sequelize';
import { config } from 'dotenv';

config();
const db = new Sequelize('lbp_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

db.authenticate().then(() => {
    console.log(`Database connected to discover`)
}).catch((err) => {
    console.log(err)
})

export default db;