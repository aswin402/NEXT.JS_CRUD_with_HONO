import { Hono } from "hono";
import { getArts, getArtbyId, createArt, updateArt, deleteArt, uploadArtImage} from "../controllers/art.controller";

const artRouter = new Hono();

artRouter.get("/", getArts);
artRouter.get("/:id", getArtbyId);
artRouter.post("/", createArt);
artRouter.put("/:id", updateArt);
artRouter.delete("/:id", deleteArt);
artRouter.post("/:id/image", uploadArtImage);

export default artRouter;