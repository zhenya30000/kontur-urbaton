# Используем базовый образ Node.js
FROM node:latest as build

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json (или yarn.lock) в рабочую директорию
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install
# Или если используете Yarn:
# RUN yarn

# Копируем все файлы из текущей директории в рабочую директорию контейнера
COPY /client .

# Собираем приложение React
RUN npm run build
# Или если используете Yarn:
# RUN yarn build

# Создаем образ Nginx для раздачи статических файлов React
FROM nginx:latest

# Копируем собранные статические файлы React из предыдущего образа
COPY --from=build /app/build /usr/share/nginx/html

# Открываем порт 80 (по умолчанию для Nginx)
EXPOSE 3000

# Команда для запуска Nginx
CMD ["nginx", "-g", "daemon off;"]
