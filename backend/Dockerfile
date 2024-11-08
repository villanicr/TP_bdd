# Usamos la última imagen estable de Node.js
FROM node:20

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiamos los archivos package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instalamos las dependencias del proyecto
RUN npm install

# Copiamos el resto del código fuente de tu aplicación al contenedor
COPY . .

# Exponemos el puerto en el que la API estará escuchando (puede ser 3000, por ejemplo)
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "server.js"]