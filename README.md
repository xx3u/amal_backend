# amal_backend
## Sequelize

Sequelize is an Object-Relation Mapping (ORM) library that allows you to treat your relational database schemas as objects in your JavaScript applications.

# Install sequelize cli globally:
```
$ npm install sequelize-cli -g
```
# Creating models and migrations
Using `sequelize-cli` you can easily create and manage your models and migrations. It has a useful command called `model:create`, which will generate 2 files for you: a __model__ file and a corresponding __migration__ file.

__Example Usage__
```
sequelize model:create --name User --attributes first_name:string,last_name:string,bio:text
```

Notice the `--name` and `--attributes` _flags_. these let us tell the program that we want to create a new model called `User`, that has 3 properties and their types:
  - `first_name`, type: `string`
  - `last_name`, type: `string`
  - `bio`, type: `text`

# Save all files and run migration:
```
sequelize db:migrate
```

# Seeding your database

When developing databases with it a team, it can be important that everyone is working with the same data. Or you might have information that you want to enter in your database initally, like admin accounts or something like that. You can do this with Seeders.

```
sequelize seed:create --name my-seed-file
```

You can seed your database with this data by running this sequelize-cli command:

```
sequelize db:seed:all
```

# Changes in tables and run migrations:
```
sequelize migration:create --name update-name-fields-for-student
```

# Undoing Migrations
You can use db:migrate:undo, this command will revert most recent migration.
```
sequelize db:migrate:undo
```
You can revert back to initial state by undoing all migrations with db:migrate:undo:all command. You can also revert back to a specific migration by passing its name in --to option.
```
sequelize db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js
```

## Endpoints STUDENTS

* GET /students - list of all students;
* POST /students - create new student;
* GET /students/:id - get certain student by primary key(pk);
* PUT /students/:id - update information for certain student;