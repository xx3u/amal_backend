# amal_backend

# Установка приложения

1. Если впервые устанавливаете приложение, то надо склонировать проект, используя команды 
  ```
  git clone git@github.com:xx3u/amal_backend.git
  ```
  Если данное приложение имеется, то можно запуллить последние изменения, используя команды `git pull`.

2. Установить зависимости проекта `npm install`;

3. Дополнительно установить postgresql, например, используя ссылку: [Install PostgreSQL](https://www.postgresqltutorial.com/install-postgresql/);

4. Создать базу данных в postgres. Можно использовать shell psql:
  ```
  postgres=# CREATE DATABASE amal_dev;
  ```
  Либо можно использовать pgAdmin tool: `Databases` и выбрать `Create > Database…`.

5. Внести свои данные в файл `.env.example` и убрать `.example`. Например:
  ```
  PORT=5432
  DB_HOST= '127.0.0.1'
  DB_USERNAME='postgres'
  DB_PASSWORD='pass'
  DB_NAME='amal_dev'
  ```

6. Установить глобально ОРМ Sequelize:
```
$ npm install sequelize-cli -g
```
7. Запустить миграции при помощи команды:
```
$ sequelize db:migrate
```
8. Если существуют фикстурные данные в папке `src -> database -> seeders`, то можно запустить данные при помощи команды: 
```
$ sequelize db:seed:all
```
9. Подключиться к своей базе через shell psql и проверить существование таблицы с помощью следующих команд:
```
postgres=# \c amal_dev
You are now connected to database "amal_dev" as user "postgres". 

amal_dev=# \dt
             List of relations
 Schema |     Name      | Type  |  Owner
--------+---------------+-------+----------
 public | SequelizeMeta | table | postgres
 public | Students      | table | postgres
(2 rows)
```

Если вы запустили seed,  то сможете просмотреть фикстурные данные таблицы:
```
amal_dev=# select * from public."Students";
 id | firstName | lastName | middleName | grade | language | school |   parentsContacts    | stream | address | telephone |     email     |         createdAt          |         updatedAt
----+-----------+----------+------------+-------+----------+--------+----------------------+--------+---------+-----------+---------------+----------------------------+----------------------------
  1 | John      | Doe      |            |    10 | ENG      | 71     | grandpa, +77777777   | SAT    |         |           |               | 2021-06-26 11:48:11.255+06 | 2021-06-26 11:48:11.255+06
  2 | Jane      | Doe      |            |     5 | KZ       | 121    | mother, +77017777    | NISH   |         |           |               | 2021-06-26 11:48:11.255+06 | 2021-06-26 11:48:11.255+06
(2 rows)
```
Основные команды sequelize указаны ниже. 

10. Для запуска сервера в dev используйте команду `npm run dev`. На `http://localhost:8080/` вы получите следуюший ответ:
```
{
  "message": "Hello World!"
}
```
Далее следующий раздел по описанию API endpoints.

---------------------------------------------------------------------------------------------------------------------------------------
# Описание API Endpoints 
## Students
* GET /students - получение списка всех студентов;
```
[
  {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "middleName": null,
    "grade": 10,
    "language": "ENG",
    "school": "71",
    "parentsContacts": "grandpa, +77777777",
    "stream": "SAT",
    "address": null,
    "telephone": null,
    "email": null,
    "createdAt": "2021-06-26T05:48:11.255Z",
    "updatedAt": "2021-06-26T05:48:11.255Z"
  },
  {
    "id": 2,
    "firstName": "Jane",
    "lastName": "Doe",
    "middleName": null,
    "grade": 5,
    "language": "KZ",
    "school": "121",
    "parentsContacts": "mother, +77017777",
    "stream": "NISH",
    "address": null,
    "telephone": null,
    "email": null,
    "createdAt": "2021-06-26T05:48:11.255Z",
    "updatedAt": "2021-06-26T05:48:11.255Z"
  }
]
```
* POST /students - создание нового студента;

Через postman можно отправить post запрос на `http://localhost:8080/students` при этом обязательными полями являются:
```
{
    "firstName": "test2",
    "lastName": "test",
    "grade": 5,
    "language": "KZ",
    "parentsContacts": "father",
    "stream": "SAT"
}
```
Вы получите в ответ нового студента:
```
{
    "id": 5,
    "firstName": "test2",
    "lastName": "test",
    "grade": 5,
    "language": "KZ",
    "parentsContacts": "father",
    "stream": "SAT",
    "updatedAt": "2021-06-28T11:35:18.991Z",
    "createdAt": "2021-06-28T11:35:18.991Z",
    "middleName": null,
    "school": null,
    "address": null,
    "telephone": null,
    "email": null
}
```
* GET /students/:id - получение данных конкретного студента по primary key (pk). Например, get запрос на `http://localhost:8080/students/2`:
```
{
  "id": 2,
  "firstName": "Jane",
  "lastName": "Doe",
  "middleName": null,
  "grade": 5,
  "language": "KZ",
  "school": "121",
  "parentsContacts": "mother, +77017777",
  "stream": "NISH",
  "address": null,
  "telephone": null,
  "email": null,
  "createdAt": "2021-06-26T05:48:11.255Z",
  "updatedAt": "2021-06-26T05:48:11.255Z"
}
```
* PUT /students/:id - изменение данных по конкретному студенту. Например, у нашего предыдущего студента не указан email. 

При отправке put запроса на `http://localhost:8080/students/2` с данными:
```
{
    "email": "jane.doe@test.com"
}
```
Мы получим в ответ студента с обновленными данными:
```
{
    "id": 2,
    "firstName": "Jane",
    "lastName": "Doe",
    "middleName": null,
    "grade": 5,
    "language": "KZ",
    "school": "121",
    "parentsContacts": "mother, +77017777",
    "stream": "NISH",
    "address": null,
    "telephone": null,
    "email": "jane.doe@test.com",
    "createdAt": "2021-06-26T05:48:11.255Z",
    "updatedAt": "2021-06-28T11:40:54.488Z"
}
```

---------------------------------------------------------------------------------------------------------------------------------------
### Основные команды sequelize:
#### Создание модели
При помощи команды `model:create` генерируются 2 файла: __model__ - файл модели и соответствующий __migration__ - файл миграции.
```
sequelize model:create --name User --attributes first_name:string,last_name:string,bio:text
```
Отметки `--name` и `--attributes` говорят программе создать новую модель под названием `User`, у которой имеются 3 свойства и типы данных:
  - `first_name`, type: `string`
  - `last_name`, type: `string`
  - `bio`, type: `text`
#### Запуск миграций
```
sequelize db:migrate
```
#### Создание фикстурных данных
Для создания фикстурных данных, используйте команду:
```
sequelize seed:create --name my-seed-file
```
Для запуска фикстурных данных используйте:
```
sequelize db:seed:all
```
#### Изменение таблиц и запуск миграций
```
sequelize migration:create --name update-name-fields-for-student
```
#### Отмена миграций
Отмена последней миграции:
```
sequelize db:migrate:undo
```
Отмена конкретной миграции с указанием наименования в --to:
```
sequelize db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js
```


Перед тем как проверять другую ветку на работоспособность, вызвать след команды:

npx sequelize-cli db:seed:undo:all
npx sequelize-cli db:migrate:undo:all
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
