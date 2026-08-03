# backend/Dockerfile
FROM node:20-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto en el que correrá Express
EXPOSE 3000

# Comando para iniciar el servidor
CMD ["node", "index.js"]