# frontend/Dockerfile
# Etapa 1: Construcción
FROM node:20-alpine as build

WORKDIR /app

# Copiamos dependencias e instalamos
COPY package*.json ./
RUN npm install

# Copiamos el resto del código y construimos la app para producción
COPY . .
RUN npm run build

# Etapa 2: Servidor Web de Producción
FROM nginx:alpine

# Copiamos los archivos estáticos generados por Vite (carpeta dist) al directorio de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto web
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]