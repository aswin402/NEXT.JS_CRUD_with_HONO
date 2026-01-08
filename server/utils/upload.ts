import { writeFile } from "fs/promises";
import { v4 as uuid } from "uuid";
import path from "path";

export const saveImage = async (file: File) => {
  const buffer = Buffer.from(await file.arrayBuffer());
  const fileName = `${uuid()}-${file.name}`;
  const uploadPath = path.join(process.cwd(), "uploads", fileName);

  await writeFile(uploadPath, buffer);

  return `/uploads/${fileName}`;
};
