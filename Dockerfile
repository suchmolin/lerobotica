FROM node:14-apline
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .    
RUN npm build
EXPOSE 3000
CMD ["npm", "start"]
