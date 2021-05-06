const { Router } = require('express');
const router = Router();

const path = require('path');
const { unlink } = require('fs-extra');

const suscripcion = require('../models/suscripcion');

router.get('/', async (req, res) => {
    const suscripcion = await suscripcion.find().sort('-_id');
    res.json(suscripcion);
});

router.post('/', async (req, res) => {
    const { title, author, isbn } = req.body;
    const imagePath = '/uploads/' + req.file.filename;
    const newBook = new suscripcion({title, author, isbn, imagePath, sobreti});
    console.log(newBook)
    await newBook.save();
    res.json({'message': '¡Suscripción guardada correctamente!'});
});

router.delete('/:id', async (req, res) => {
    const suscripcion = await suscripcion.findByIdAndDelete(req.params.id);
    await unlink(path.resolve('./backend/public/' + suscripcion.imagePath));
    res.json({message: 'Suscripcion Eliminada'});
});


module.exports = router;