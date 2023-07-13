import Results from "../models/resultModel.js";

export const getResult = async(req, res) => {
    try {
        const r = await Results.findAll({
            attributes: ['id', 'username', 'result', 'attempts', 'points', 'achived'],
        })
        res.status(200).json(r)
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const storeResult = async(req, res) => {
    try {
        const {username, result, attempts, points, achived} = req.body;
        if (!username && !result) throw new Error('Data Not Provided...!');

        await Results.create({
            username: username,
            result: result,
            attempts: attempts,
            points: points,
            achived: achived,
        });
        res.status(201).json({msg: 'Result Saved Successfully...'});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const dropResult = async(req, res) => {
    try {
        const result = await Results.findOne({
            where: {
                id: req.params.id,
            },
        });

        if (!result) {
            return res.statu(404).json({msg: 'Data tidak Ditemukan...'});
        }

        await Results.destroy({
            where: {
                id: result.id,
            },
        });

        res.status(200).json({msg: 'Result Deleted Successfully...'});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}