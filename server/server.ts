import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { cors } from "hono/cors";
import artRouter from "./routes/art.route";
const app = new Hono();

app.use('*', cors({
  origin: '*',
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
  fetch: app.fetch,
  port: process.env.PORT ||5000
}


