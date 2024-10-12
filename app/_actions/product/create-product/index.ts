"use server";

import { db } from "@/app/_lib/prisma";
import { revalidatePath } from "next/cache";
import { createProductSchema, CreateProductSchema } from "./schema";

export const createProduct = async (data: CreateProductSchema) => {
  createProductSchema.parse(data);
  await db.product.create({ data });

  //await new Promise((resolve) => setTimeout(resolve, 1000));

  revalidatePath("/products");
};
