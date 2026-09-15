"use server";

const api = process.env.NEXT_PUBLIC_API_URL;

export const getHomeStats = async () => {
  if (!api) {
    throw new Error("NEXT_PUBLIC_API_URL is not configured.");
  }

  const res = await fetch(`${api}/api/home/stats`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch home statistics.");
  }

  const data = await res.json();

  if (!data.success) {
    throw new Error(data.message || "Failed to fetch home statistics.");
  }

  return data.data;
};

