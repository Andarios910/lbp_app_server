import Questions from "../models/questionModel.js";
import Answers from "../models/answerModel.js";


export const getQuestions = async(req, res) => {
    try {
        const response = await Answers.findAll({
            attributes: ['answer'],
            include: [{
                model: Questions,
                attributes: ['id','question', 'option'],
            }],
            raw:false,
            nest: true,
        })
        // const response2 = await Questions.findAll({
        //     attributes: ['id', 'question', 'option'],
        // })
        // res.status(200).json([
        //     response,
        //     response2
        // ]);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getQuestionById = async(req, res) => {

}

export const createQuestion = async(req, res) => {
    
}

export const updateQuestion = async(req, res) => {

}

export const deleteQuestion = async(req, res) => {

}

