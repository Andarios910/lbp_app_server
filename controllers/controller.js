import Questions from "../models/questionModel.js";


/** get all questions */
export const getQuestions = async(req, res) => {
    try {
        // const q = await Questions.find()
        const q = await Pilihan.findAll();
        res.json(q);
    } catch (error) {
        res.json({ error });
    }
}

/** inser all questions */
export const insertQuestions = async(req, res) => {
    try {
        Questions.insertMany({ questions : [0], answers : [1] }, function(err, data){
            res.json({ msg: "Data Saved Successfully..." });
        });
    } catch (error) {
        res.json({ error });
    }
}

/** delete all questions */
export const dropQuestions = async(req, res) => {
    res.json('questions api delete request');
}

/** get all result */
export const getResult = async(req, res) => {
    res.json('result api get request');
}

/** post all result */
export const storeResult = async(req, res) => {
    res.json('result api post request');
}

/** delete all result */
export const dropResult = async(req, res) => {
    res.json('result api delete request');
}