# amal_backend

# Установка приложения

1. Если впервые устанавливаете приложение, то надо склонировать проект, используя команды `git clone git@github.com:xx3u/amal_backend.git`
Если данное приложение имеется, то можно запуллить последние изменения, используя команды `git pull`.
2. Установить зависимости проекта `npm install`;
3. Дополнительно установить postgresql, например, используя ссылку: (https://www.postgresqltutorial.com/install-postgresql/);
4. Создать базу данных в postgres. Можно использовать shell psql:
  `postgres=# CREATE DATABASE amal_dev;`
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
  4 | test      | test     | test       |     7 | KZ       | 121    | mother, +77017777123 | NISH   |         |           | test@test.com | 2021-06-26 17:56:57.007+06 | 2021-06-26 18:33:13.186+06
(3 rows)
```
Основные команды sequelize указаны ниже. 


## Endpoints STUDENTS

* GET /students - list of all students;
* POST /students - create new student;
* GET /students/:id - get certain student by primary key(pk);
* PUT /students/:id - update information for certain student;

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