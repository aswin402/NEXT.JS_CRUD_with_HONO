import { writeFile, mkdir } from "fs/promises";
import { v4 as uuid } from "uuid";
import path from "path";

export const saveImage = async (file: any) => {
  const buffer = Buffer.from(await file.arrayBuffer());
  const fileName = `${uuid()}-${file.name}`;
  const uploadDir = path.join(process.cwd(), "uploads");

  // ensure uploads folder exists
  await mkdir(uploadDir, { recursive: true });

  const uploadPath = path.join(uploadDir, fileName);
  await writeFile(uploadPath, buffer);

  return `/uploads/${fileName}`;
};
