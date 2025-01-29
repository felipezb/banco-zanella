# Use a imagem base do Node.js
FROM node:alpine

# Crie e defina o diretório de trabalho
WORKDIR /app

# Copie o arquivo package.json e o arquivo de lock
COPY package.json package-lock.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todo o restante do código fonte para o diretório de trabalho
COPY . .

# Exponha a porta que o Next.js usará
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "run", "dev"]
