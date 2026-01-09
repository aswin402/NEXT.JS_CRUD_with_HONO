import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { cors } from "hono/cors";
import artRouter from "./routes/art.route";
const app = new Hono();

app.use('*', cors({
  origin: 'http://localhost:3000',
  allowHeaders: ['*'],
  allowMethods: ['*'],
  exposeHeaders: ['*'],
  credentials: true,
}));

app.use(
  "/uploads/*",
  serveStatic({ root: "./" })
);

app.route("/art", artRouter);
app.get("/", (c) => c.text(`server is running! port${process.env.PORT}`));


export default {
  port: process.env.SERVER_PORT||5000,
  fetch: app.fetch
}