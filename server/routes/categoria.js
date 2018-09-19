const express = require('express');

let { verificaToken } = require('../middlewares/autenticacion');

let app = express();

let Categoria = require('../models/categoria');


// ============================
// Mostrar todas las categorias
// ============================
app.get('/categoria', (req, res) => {
    Categoria.find({ estado: true }, 'nombre email role estado google img')

    .skip(0)
        .limit(20)
        .exec((err, categorias) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            Usuario.count({ estado: true }, (err, contar) => {
                res.json({
                    ok: true,
                    categorias,
                    total: contar
                });
            });


        });

});


// ============================
// Mostrar una categoria por id
// ============================
app.get('/categoria/:id', (req, res) => {
    categoria.findbyid();
});


// ============================
// Crear una nueva categoria
// ============================
app.post('/categoria', verificaToken, (req, res) => {
    let body = req.body;

    let categoria = new Categoria({
        descripcion: body.descripcion,
        usuario: req.usuario._id
    });
    categoria.save((err, categoriaDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (!categoriaDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            categoria: categoriaDB
        });
    });
});

// ============================
// Actualiza una categoria
// ============================
app.put('/categoria/:id', verificaToken, (req, res) => {

});

// ============================
// Elimina una categoria
// ============================
app.delete('/categoria', (req, res) => {


});





module.exports = app;