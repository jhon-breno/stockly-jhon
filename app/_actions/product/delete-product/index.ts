"use server";

import { db } from "@/app/_lib/prisma";
import { revalidatePath } from "next/cache";
import { deleteProductSchema } from "./schema";

export const DeleteProduct = async ({ id }: deleteProductSchema) => {
  deleteProductSchema.parse({ id });
  await db.product.delete({
    where: {
      id,
    },
  });

  //await new Promise((resolve) => setTimeout(resolve, 1000));

  revalidatePath("/products");
};
