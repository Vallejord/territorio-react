# Usar imagen Debian slim
FROM node:20-slim

WORKDIR /app

# Copiar solo package.json (sin lock file para evitar bug de npm ci)
COPY package.json ./

# Instalar con npm install (más compatible) y verificar
RUN npm install --production --no-audit --no-fund && \
    echo "=== Verificando instalación ===" && \
    ls -la node_modules/express && \
    ls -la node_modules/cors && \
    ls -la node_modules/nodemailer && \
    node -e "console.log('Testing express:', require.resolve('express'))" && \
    node -e "console.log('✅ Dependencies OK')"

# Copiar código fuente
COPY server.js ./

# Puerto que Cloud Run espera
ENV PORT=8080
EXPOSE 8080

# Comando de inicio
CMD ["node", "server.js"]
