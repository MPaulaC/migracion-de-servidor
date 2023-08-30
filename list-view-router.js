const express = require('express');
const listViewRouter = express.Router();
const tasks = require('./data');
const authMiddleware = require('./auth'); // Importa el middleware

// ...

// Rutas protegidas
listViewRouter.get('/protected', authMiddleware, (req, res) => {
    // El middleware verifica el token y el usuario está disponible en req.user
    res.json({ message: 'Ruta protegida', user: req.user });
});

// ...
