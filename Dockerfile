FROM node:16-alpine

# создание директории приложения
WORKDIR /usr/src/app
# установка зависимостей
# символ астериск ("*") используется для того чтобы по возможности
# скопировать оба файла: package.json и package-lock.json
COPY package*.json ./

RUN npm i ---omit=dev
# Если вы создаете сборку для продакшн
# RUN npm ci --omit=dev

# копируем исходный код
COPY . .
EXPOSE 3000
CMD [ "node", "index.js" ]