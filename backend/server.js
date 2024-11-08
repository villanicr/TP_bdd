const express = require('express');
const mongoose = require('mongoose');
const { Client } = require('pg'); // Cliente de PostgreSQL

// Crear una aplicación Express
const app = express();

// Definir un puerto en el que se escuchará la aplicación
const port = process.env.PORT || 3000;

// Middleware para manejar JSON
app.use(express.json());

// Conectar a la base de datos MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://mongo:27017/mydatabase', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Conectar a la base de datos PostgreSQL
const client = new Client({
  host: 'postgres',   // Nombre del servicio en Docker Compose
  port: 5432,
  user: 'user',   // Usuario predeterminado
  password: 'password', // Contraseña predeterminada
  database: 'mydatabase'
});

client.connect()
  .then(() => console.log('Conectado a PostgreSQL'))
  .catch(err => console.error('Error al conectar a PostgreSQL:', err));

// Crear una ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola Mundo!');
});

// Iniciar el servidor Express
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
