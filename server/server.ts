import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import artRouter from "./routes/art.route";
const app = new Hono();


app.use(
  "/uploads/*",
  serveStatic({ root: "./" })
);

app.route("/art", artRouter);
app.get("/", (c) => c.text(`server is running! port${process.env.PORT}`));


export default {
  port: process.env.PORT||3001,
  fetch: app.fetch
}