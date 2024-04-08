const express = require('express');
const app = express();

// Ruta principal
app.get('/', (req, res) => {
  res.send('Lab04 Nubes');
});

// Ruta para mostrar 3 clientes
app.get('/clientes', (req, res) => {
  const clientes = [
    { id: 1, nombre: 'Juan', apellido: 'Pérez' },
    { id: 2, nombre: 'María', apellido: 'González' },
    { id: 3, nombre: 'Carlos', apellido: 'López' }
  ];
  res.json(clientes);
});

// Ruta para mostrar 3 productos
app.get('/productos', (req, res) => {
  const productos = ['Computadora', 'Televisor', 'Celular'];
  res.json(productos);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});
