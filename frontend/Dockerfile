# Usamos la imagen oficial de Node.js como base
FROM node:20

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos de la aplicación al contenedor
COPY package.json package-lock.json ./

# Instalar las dependencias de Node.js (React)
RUN npm install

# Copiar el resto de los archivos de la aplicación
COPY . .

# Construir la aplicación React
RUN npm run build

# Exponer el puerto en el que React servirá la aplicación
EXPOSE 3000

# Iniciar el servidor de desarrollo de React
CMD ["npm", "start"]
