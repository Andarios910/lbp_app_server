import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import session from 'express-session';
import { config } from 'dotenv';
import SequelizeStore from 'connect-session-sequelize';

/** Router */
import questionRouter from './router/questionsRouter.js';
import resultRouter from './router/resultsRouter.js';
import usersRouter from './router/usersRouter.js';
import authRouter from './router/authRouter.js';
import gejalaRouter from './router/gejalaRouter.js';
import penyakitRouter from './router/penyakitRouter.js';
import solusiRouter from './router/solusiRouter.js';

/** import connection file */
import db from './database/conn.js';

const app = express()

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db: db,
});

/** app middleware */
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto',
    }
}))

/** application port */
const port = process.env.PORT || 8080;

(async () => {
    await db.sync();
})();

/** routes */
app.use('/api', questionRouter);
app.use('/api', resultRouter);
app.use('/api', usersRouter);
app.use('/api', authRouter);
app.use('/api', solusiRouter);

// store.sync(); 

/** start server only when we have valid connection */
db.sync().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`);
        })
    } catch (error) {
        console.log('Cannot connect to the server');
    }
}).catch(error => {
    console.log("Invalid Database Connection")
})

// app.listen(port, () => {
//     console.log("Server up and running...");
// })