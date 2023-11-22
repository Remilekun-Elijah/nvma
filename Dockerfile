FROM node:16.17.0

# RUN mkdir -p /app
WORKDIR /app

RUN env

COPY package*.json .

RUN npm install

ENV SKIP_PREFLIGHT_CHECK=true

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
