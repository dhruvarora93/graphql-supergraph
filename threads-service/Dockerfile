FROM node:18-bullseye-slim
WORKDIR /usr/src/app

COPY . .
RUN yarn add typescript
RUN yarn install && yarn build 

EXPOSE 8002
CMD ["node", "./dist/main.js"]

