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

export const createArt= async (c:any)=>{
  try {
    const body = await c.req.json();
  const {artname,artist,price,description}=body;
  const art= await prisma.art.create({
    data:{artname,artist,price,description: description || "art description"},
  });
  return c.json(art,201)
  } catch (error) {
    console.error(error);
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

    if (!file || !(file instanceof File)) {
      return c.json({ message: "Image file required" }, 400);
    }

    const imageUrl = await saveImage(file);

    const art = await prisma.art.update({
      where: { id: parseInt(id) },
      data: { imageUrl },
    });

    return c.json(art, 200);
  } catch (error) {
    console.error(error);
    return c.json({ message: "Image upload failed" }, 500);
  }
};