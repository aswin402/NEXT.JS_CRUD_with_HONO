# SERVER

## FULL FLOW (Frontend → Backend → DB → uploads)

```css
Frontend (Next.js)
  ↓ sends multipart/form-data
Backend (Hono)
  ↓ reads formData()
  ↓ saves image to /uploads
  ↓ stores image path in DB
Database (Prisma)
```

## backend structure

* Hono + Bun backend
* Prisma + PostgreSQL
* Art CRUD
* Image upload → saved locally → path stored in DB
* Images served to frontend

## BACKEND STRUCTURE
```css
project-root/
├── uploads/                     # 🖼 Uploaded images (runtime files)
│   └── uuid-image.png
│
├── server/                      # 🚀 Backend (Hono)
│   ├── controllers/
│   │   └── art.controller.ts    # Request logic (CRUD + upload)
│   │
│   ├── routes/
│   │   └── art.route.ts         # API routes
│   │
│   ├── utils/
│   │   └── upload.ts            # Image save helper
│   │
│   ├── lib/
│   │   └── prisma.ts            # Prisma client instance
│   │
│   └── server.ts                # Hono app + middleware
│
├── prisma/
│   ├── schema.prisma            # DB schema
│   └── migrations/
│
├── .env                         # Environment variables
├── package.json
├── bun.lock
└── README.md
```

# HOW EVERYTHING WORKS

## server/server.ts (ENTRY POINT)

### Purpose

* Create Hono app
* Register routes
* Serve uploaded images

/uploads/* → maps to project-root/uploads
Browser can access images directly

## routes/art.route.ts (ROUTING LAYER)

### Purpose

* URL mapping
* No business logic

## controllers/art.controller.ts (BUSINESS LOGIC)

### Purpose

* Read request data
* Validate input
* Talk to Prisma
* Call image upload helper

## utils/upload.ts (IMAGE HANDLING)

### Purpose

* Convert uploaded file
* Save to disk
* Return path for DB

DB stores only /uploads/uuid-file.png


## lib/prisma.ts (DATABASE CLIENT)

### Purpose

* Single Prisma instance (best practice)

## prisma/schema.prisma (DATABASE MODEL)

## uploads/ (FILE STORAGE)

* NOT committed to git
* Only runtime files

# COMPLETE REQUEST FLOW

```bash
Frontend (Next.js)
   ↓ multipart/form-data
POST /art
   ↓
Controller reads File
   ↓
saveImage()
   ↓
uploads/uuid.png
   ↓
Prisma stores imageUrl
   ↓
Frontend loads image via /uploads/uuid.png

```

