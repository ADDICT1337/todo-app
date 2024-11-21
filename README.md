# TODO-APP

Простой todo-приложение, которое позволяет добавлять и удалять задачи. Этот проект упакован в Docker-контейнер для упрощенного развертывания.

## Требования

- Docker
- Node.js (для разработки)
- npm или yarn (для установки зависимостей)

### Клонируйте репозиторий

### Для установки зависимостей используйте команду:

npm install

### Запуск приложения в Docker
a. Соберите Docker образ
Для сборки Docker-образа используйте команду:

docker build -t todo-app .

b. Запустите Docker контейнер
После успешной сборки контейнера, запустите его с пробросом порта 3000:

docker run -p 3000:3000 todo-app