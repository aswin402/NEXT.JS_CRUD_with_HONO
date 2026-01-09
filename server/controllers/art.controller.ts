import prisma from "../lib/prisma";
import { saveImage } from "../utils/upload";

export const getArts = async (c:any)=>{
  try {
    const arts= await prisma.art.findMany();
    return c.json(arts,201)
  } catch (error) {
    console.error(error);
  }
};

export const getArtbyId = async (c:any)=>{
  try {
  const id=c.req.param("id");
  const art= await prisma.art.findUnique({
    where:{id: Number(id)},
  });
  return c.json(art,201)
  } catch (error) {
    console.error(error);
  }
};

export const createArt = async (c: any) => {
  try {
    const formData = await c.req.formData();

    console.log("FORMDATA:", [...formData.entries()]);

    const artname = formData.get("artname");
    const artist = formData.get("artist");
    const price = Number(formData.get("price"));
    const description =
      (formData.get("description") as string) || "art description";

    if (!artname || !artist || isNaN(price)) {
      return c.json({ message: "Invalid fields" }, 400);
    }

    let imageUrl: string | null = null;
    const file = formData.get("image");

    if (file && typeof file === "object" && "arrayBuffer" in file) {
      imageUrl = await saveImage(file);
    }

    const art = await prisma.art.create({
      data: {
        artname: artname as string,
        artist: artist as string,
        price,
        description,
        imageUrl,
      },
    });

    return c.json(art, 201);
  } catch (error) {
    console.error("CREATE ART ERROR:", error);
    return c.json({ error: String(error) }, 500);
  }
};



export const updateArt= async (c:any)=>{
  try {
    const {id}=c.req.param();
  const body = await c.req.json();
  const {artname,artist,price,description}=body;
  const art= await prisma.art.update({
    where:{id:parseInt(id)},
    data:{artname,artist,price,description: description || "art description"},
  });
  return c.json(art,201)
  } catch (error) {
    console.error(error);
  }
};

export const deleteArt= async (c:any)=>{
  try {
    const {id}=c.req.param();
  const art= await prisma.art.delete({
    where:{id:parseInt(id)},
  });
  return c.json(art,201)
  } catch (error) {
    console.error(error);
  }
};

export const uploadArtImage = async (c: any) => {
  try {
    const { id } = c.req.param();
    const formData = await c.req.formData();
    const file = formData.get("image");

    // SAFE CHECK (NO instanceof File)
    if (!file || typeof file !== "object" || !("arrayBuffer" in file)) {
      return c.json({ message: "Image file required" }, 400);
    }

    const imageUrl = await saveImage(file);

    const art = await prisma.art.update({
      where: { id: Number(id) },
      data: { imageUrl },
    });

    return c.json(art);
  } catch (error) {
    console.error("UPLOAD ERROR:", error);
    return c.json({ message: "Image upload failed" }, 500);
  }
};
