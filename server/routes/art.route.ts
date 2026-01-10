import { Hono } from "hono";
import { getArts, getArtbyId, createArt, updateArtById, deleteArt, uploadArtImage} from "../controllers/art.controller";

const artRouter = new Hono();

artRouter.get("/", getArts);
artRouter.get("/:id", getArtbyId);
artRouter.post("/", createArt);
artRouter.put("/:id", updateArtById);
artRouter.delete("/:id", deleteArt);
artRouter.post("/:id/image", uploadArtImage);

export default artRouter;