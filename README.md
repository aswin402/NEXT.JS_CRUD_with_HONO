# Art Gallery -Example website for crud 

A modern, responsive Art Gallery frontend built using Next.js App, Tailwind CSS, and shadcn/ui.
This application consumes a REST API to display, manage, and interact with art collections.

## used tech

* next.js 
* Hono
* Bun
* Prisma
* Postgresql
* tailwindcss
* shadcin ui
* ts

## Image

* HOME
[hero](/screenshots/hero.png)

* Arts
[Arts](/screenshots/arts.png)

* AboutPage
[AboutPage](/screenshots/aboutPage.png)

* ContactUs
[ContactUs](/screenshots/contactus.png)

* inventoryPage
[inventoryPage](/screenshots/inventory.png)

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

-> server ->readme.md for more details about server

# 🎨 Art Gallery Admin & Frontend

A modern Art Gallery frontend built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.  
This project provides a clean public UI along with an **Admin Inventory Dashboard** to manage artworks (Create, Read, Update, Delete).

---

## 🚀 Tech Stack

- **Next.js 14 (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **next-themes** (Dark / Light / System mode)
- **Lucide Icons**
- **REST API integration** (Backend: Hono + Prisma + PostgreSQL)

---

## ✨ Features Implemented

### 🌐 Public UI
- Modern landing page
- Clean navigation bar
- Call-to-action buttons (Get Started)
- Responsive design
- Dark / Light / System theme toggle

---

### 🧑‍💼 Admin Panel

#### 📦 Inventory Management
- View all artworks in a table
- Search artworks by **art name** or **artist**
- Display columns:
  - ID
  - Art Name
  - Artist
  - Price
- Optimized table UI using **shadcn Table**

#### ➕ Add Art
- Navigate to add-art page
- Submit new artwork to backend

#### ✏️ Edit Art
- Click **Edit** button on inventory
- Opens an edit popup/modal
- Pre-filled form with existing data
- Update art details (name, artist, price)
- Saves changes via API

#### 🗑️ Delete Art
- Delete confirmation dialog
- Safe delete using **AlertDialog**
- Instantly updates UI after deletion

---

## 🌓 Theme Support

- Default theme: **System**
- Toggle between:
  - Light
  - Dark
  - System
- Implemented using `next-themes`
- Simple button toggle (no dropdown)

---

## 🧱 Component-Based Architecture

To keep code clean and maintainable, the UI is split into reusable components:

```css
components/
├─ ui/ → shadcn components
├─ inventory/
│ ├─ inventory-table.tsx
│ ├─ inventory-search.tsx
│ ├─ delete-dialog.tsx
│ └─ edit-art-dialog.tsx
├─ theme/
│ └─ mode-toggle.tsx
```


---

## 🔄 How It Works

### 1️⃣ Fetching Data
- On page load, artworks are fetched from:

GET http://localhost:5000/art


### 2️⃣ Searching
- Client-side filtering using `useState`
- Searches by:
  - art name
  - artist name

### 3️⃣ Editing Art
- Click **Edit**
- Modal opens with form
- On submit:


GET http://localhost:5000/art/:id

- UI updates instantly

### 4️⃣ Deleting Art
- Click **Delete**
- Confirmation dialog appears
- On confirm:

DELETE http://localhost:5000/art/:id

- Art removed from UI without page reload

---

## 📁 Environment Setup

```bash
npm install 
npm run dev
```

Make sure backend is running at:

http://localhost:5000




