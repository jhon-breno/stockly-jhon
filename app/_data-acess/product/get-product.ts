import "server-only";

import { db } from "@/app/_lib/prisma";
import { Product } from "@prisma/client";
import { cache } from "react";

export const getProducts = async (): Promise<Product[]> => {
  console.log("Feyching products...");
  return db.product.findMany({});
};

export const caschedGetProducts = cache(getProducts);
