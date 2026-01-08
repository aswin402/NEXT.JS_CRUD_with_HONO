# Example website for crud 

## used tech

* next.js 
* Hono
* Bun
* Prisma
* Postgresql
* tailwindcss
* shadcin ui
* ts

## server-side

for developing server for the this project i used hono+bun+prisma+postgresql its realy an experiment using new tech but actually it good 

### Remeber to add this on package.json

```json
"server": "bun server/server.ts",
```
because next.js don't auto start server if we use hono (i have asked gpt it says this and i really searched for tutorial cant't find anything related) 

### Prisma 

set up prisma for this project use documentation thats really better(recommended don't use ai)

(prisma)[https://www.prisma.io/docs]

### controllers

Here this is the heart of the server were the logics for the routes funcion are defined 

### routes 
 
define routes for the api

### lib/prisma.ts

were the prismaclient is defined you can just copy paste via prisma docs 

```ts
     log: [
    { emit: 'event', level: 'query' },
    { emit: 'event', level: 'error' },
    { emit: 'event', level: 'info' },
    { emit: 'event', level: 'warn' },
  ],
```
extra added for logs

### server.ts

its the entry point for the server

### imageUpload 

required packages
* bun add uuid

we need to create uploads/ dir 
then we need to wtite some codes on utils/upload.ts were it convert uploaded file into arrayBuffer then it will save to the disk and return the file path 
later we need to write some logic codes on the controller 
then finally we need to set the route 
then way to go


