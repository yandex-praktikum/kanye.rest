# [kanye.rest](https://kanye.rest)

Аналог сервиса Kanye.rest, написанный на Express.
Используется в качестве примера веб-приложения в уроке по докеризации сервисов в курсе "Веб-разработчик плюс" 
Яндекс.Практикум. 

## Сборка и запуск в Docker
### Сборка образа
Выполните команду:
```
docker build . -t practicum/kanye-rest-express
```
или воспользуйтесь скриптом docker:build (`npm run docker:build`)

### Запуск контейнера
Выполните команду:
```
docker run -p3000:3000 -it -rm --name=kanye-rest-express practicum/kanye-rest-express
```
или воспользуйтесь скриптом docker:run (`npm run docker:run`)

## Примеры использования API
При запуске приложения командой `npm run docker:run` приложение будет доступно на порту 8081, при запуске без Docker - на 3000

### `GET` [https://localhost:8081](https://localhost:8081)

```json
{
    "quote": "I feel like I'm too busy writing history to read it."
}
```

или

### `GET` [https://localhost:8081/text](https://localhost:8081/text)

```text
The world is our office
```

## Лицензия
MIT
