"use server";
export async function fetchAPI(path: string) {
  const baseUrl = process.env.STRAPI_API_URL || "http://localhost:1337";

  const res = await fetch(`${baseUrl}${path}`, {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
    // next: { revalidate: 0 }, // Cache 60s pour performance & SEO
  });
  if (!res.ok) {
    throw new Error(`Erreur lors du fetch Strapi : ${res.statusText}`);
  }

  const json = await res.json();
  return json;
}
