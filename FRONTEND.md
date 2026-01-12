# frontend dev 

## fisrt 

i have first developed backedend api were i know what are the routes we will use on the frontend so it will be handy
i have checked api runing and GET,POST,DELETE,PUT methods CRUD operations and it was fine and worked well 
then i have started creating the frontend

## my dev experience

for developing frontend is really time consuming work. We have to design the webpage,selecting themes,components,logics,fonts,spacing.....
its kinda hell torture but its really good experience tho.

### styles
#### shadcin ui
* Using shadcin ui+tailwinds its really very very best feature like scss+bootstrap but i really love this things 
* shadcin ui 2.0 the new update that brings us to use different types of themes,styles for the component first i have used base ui and using that ui components sometimes it shows some errors like (asChild propetry not defined in the component) its really make me sick and i have jumped to Radix ui that really good because of no errors i don't why that error comes i have searched the docs and used gpt but still can't find the solution.
* And also it provides us to select us custom preset like component library,style,base color,theme,icon library,font,radius,menu assets
* i really loved using shadcin ui one of the best ui library   
[shadcin ui](https://ui.shadcn.com/)

#### tailwinds
* tailwnds is very usefull tool that literly reduce more time for design a website. I have used scss before but ater using tailwinds its fun and lot easier 
* And really tailwinds+shadcin ui topnotch 
* for setup tailwinds visit tailwinds official website for next.js it comes with tailwinds so its default 

#### UI
* for ui i have done my best 
* i have used shadcin block components for most of the Ui like hero,features like that its very handfull 
* for logics i have used gpt its really better using gpt for logic side i had think many ways for building logics i finally came up with an idea of using others project docs+there code to use it on my code modifing that but the thing is most case i find they have used next.js routers so its hard to think about that

#### Where i need logic
-- API fetch data from the backend
* for arts page i need to show the art so from the api first i need to connect the api to the frontend so i had use lib/api.ts were the api connection logics are determined so its not have much logic its just connecting api and fetch data like that only thats simple
* artsCard we need to use that api function getArt for fetch all the arts data and show it on the frontend like from apiUrl we use like API_URL/art.data here we were using api from api.ts there we fetch data from the api and we have use art that is an type and .data means like art.imageUrl like that we will use

-- InverntoyTable
* for this i were used my whole brain to think about the logic for crud opperation on frontend  from the lib/api.ts were we defined the api logics and crud function we use that functions here for the operations



