import Solusi from '../models/solusiModel.js';

export const getSolusi = async(req, res) => {
    try {
        const response = await Solusi.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const getSolusiById = async(req, res) => {
    try {
        const response = await Solusi.findOne({
            where: {
                uuid: req.params.id,
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const createSolusi = async(req, res) => {
    const { solusi } = req.body;
    try {
        await Solusi.create({
            solusi: solusi
        })
        res.status(201).json({ msg: 'Solusi Berhasil ditambahkan'});
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

export const updateSolusi = async(req, res) => {
    const dataSolusi = await Solusi.findOne({
        where: {
            uuid: req.params.id,
        },
    });
    if(!dataSolusi) return res.status(404).json({ msg: 'Solusi Tidak ditemukan'});

    const { solusi } = req.body;
    try {
        await Solusi.update({ solusi }, {
            where: {
                id: dataSolusi.id
            }
        });
        res.status(200).json({ msg: 'Solusi Berhasil diUpdate!' });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

export const deleteSolusi = async(req, res) => {
    const solusi = await Solusi.findOne({
        where: {
            uuid: req.params.id,
        },
    });
    if(!solusi) return res.status(404).json({ msg: 'Solusi Tidak ditemukan'});

    try {
        await Solusi.destroy({
            where: {
                id: solusi.id,
            },
        });
        res.status(200).json({ msg: 'Solusi Berhasil diDelete' });
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}