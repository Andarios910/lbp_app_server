import Penyakit from '../models/penyakitModel.js';

export const getPenyakit = async(req, res) => {
    try {
        const response = await Penyakit.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getPenyakitById = async(req, res) => {
    try {
        const response = await Penyakit.findOne({
            where: {
                uuid: req.params.id,
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const createPenyakit = async(req, res) => {
    const { nama, deskripsi, solusi } = req.body;
    try {
        await Penyakit.create({
            nama: nama,
            deskripsi: deskripsi,
            solusi: solusi
        })
        res.status(201).json({ msg: 'Penyakit Berhasil ditambahkan'});
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

export const updatePenyakit = async(req, res) => {
    const penyakit = await Penyakit.findOne({
        where: {
            uuid: req.params.id,
        },
    });
    if(!penyakit) return res.status(404).json({ msg: 'Penyakit Tidak ditemukan'});

    try {
        await Penyakit.update({
            nama: nama,
            deskripsi: deskripsi,
            solusi: solusi,
        }, {
            where: {
                id: penyakit.id
            }
        });
        res.status(200).json({ msg: 'Penyakit Berhasil diUpdate!' });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

export const deletePenyakit = async(req, res) => {
    const penyakit = await Penyakit.findOne({
        where: {
            uuid: req.params.id,
        },
    });
    if(!penyakit) return res.status(404).json({ msg: 'Penyakit Tidak ditemukan'});

    try {
        await Penyakit.destroy({
            where: {
                id: penyakit.id,
            },
        });
        res.status(200).json({ msg: 'Penyakit Berhasil diDelete' });
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}