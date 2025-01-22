## INTRODUCTION
This is an API for a todo list application giving you the functionalities to:
1. Get all todos available in the database.
2. Get a single todo based of its id.
3. Add a todo to the database.
4. Update a todo.
5. Delete a todo

## Table of contents
- [Prerequisites](#prerequistes)
- [Installation](#installation)'
- [Usage](#usage)


## Prerequisites,tools and technologies
[Nodejs v18>]([url](https://nodejs.org/en/download))
[Postman]([url]((https://www.postman.com/downloads/)) or [Insomnia]([url]((https://insomnia.rest/))
Expressjs
[MongoDb]([url](https://www.mongodb.com/products/platform/atlas-database))



## Installation
1. Clone the project 
 ```git clone https://github.com/BuckanianCodes/civic-todo.git

2. Install Dependencies
 ```npm install
3. Create a Mongodb account(if you dont have any) and create a new deployment and get the connection string.
   
4. Create a .env file and store your connection string named MONGO_URI = connection string

## Usage
Run the project 
```npm run start

## Testing Enpoints
1. Get all todos
   Endpoint - http://localhost:8080/api/alltodos
![image](https://github.com/user-attachments/assets/5596149c-3111-48f5-ab7f-802b741a617b)

2. Get a single todo
  Endpoint - http://localhost:8080/api/id
![image](https://github.com/user-attachments/assets/67863600-eacf-4044-84c4-c4ecc3e00064)

3. Add a todo
   Endpoint - http://localhost:8080/api/add
![image](https://github.com/user-attachments/assets/85d8a245-a7c9-4f9b-9377-1da798367f0f)

4. Update a todo
   Endpoint - http://localhost:8080/api/updateTodo/id
![image](https://github.com/user-attachments/assets/c45896be-e1a2-43ea-86d6-163540f6a85a)

5. Delete todo
   Endpoint - http://localhost:8080/api/delete/id
![image](https://github.com/user-attachments/assets/fcbca7b6-79d1-4e63-91c3-dad516b4ac6e)

