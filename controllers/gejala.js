import Gejala from "../models/gejalaModel.js";

export const getGejala = async(req, res) => {
    try {
        const response = await Gejala.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const getGejalaById = async(req, res) => {
    try {
        const response = await Gejala.findOne({
            where: {
                uuid: req.params.id,
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const createGejala = async(req, res) => {
    const { deskripsi, cfPakar } = req.body;
    try {
        
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

export const updateGejala = async(req, res) => {
    
}

export const deleteGejala = async(req, res) => {
    
}