"use server"

import { api } from "@/services/api";

export const getCategories = async () => {
  const res = await fetch(`${api}/api/categories`, {
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24,
      tags: ["categories"]
    },
  });

  const data = await res.json();
   if (!data.success) {
     throw new Error("Failed to fetch categories.");
   }

  return data.data;
};
