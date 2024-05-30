FROM node:18-apline
WORKDIR /app
COpy . .    
RUN npm install --omit=dev
RUN npm build
CMD ["npm", "start"]
