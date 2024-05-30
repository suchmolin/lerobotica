FROM node:20-apline
WORKDIR /src/app
COPY . .    
RUN npm install
RUN npm build
CMD ["npm", "start"]
