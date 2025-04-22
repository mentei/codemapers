FROM node:18-alpine

WORKDIR /app
COPY temp.js .

CMD ["node", "temp.js"]
