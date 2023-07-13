import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import questionRouter from './router/questionsRouter.js';
import resultRouter from './router/resultsRouter.js';

/** import connection file */
import db from './database/conn.js';

const app = express()

/** app middleware */
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();

/** application port */
const port = process.env.PORT || 8080;

(async () => {
    await db.sync();
})();

/** routes */
app.use('/api', questionRouter);
app.use('/api', resultRouter);

/** start server only when we have valid connection */
// db.sync().then(() => {
//     try {
//         app.listen(port, () => {
//             console.log(`Server connected to http://localhost:${port}`);
//         })
//     } catch (error) {
//         console.log('Cannot connect to the server');
//     }
// }).catch(error => {
//     console.log("Invalid Database Connection")
// })

app.listen(port, () => {
    console.log("Server up and running...");
})