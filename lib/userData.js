import { getToken } from "./authenticate";

export async function getFavourites() {
  const token = getToken();
  if (!token) return []; // Security check: Do not proceed if token is missing

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/favourites`, {
    headers: { Authorization: `JWT ${token}` }
  });

  if (res.status === 200) return res.json();
  return [];
}

export async function addToFavourites(id) {
  const token = getToken();
  if (!token) return []; // Security check: Do not proceed if token is missing

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/favourites/${id}`,
    {
      method: "PUT",
      headers: { Authorization: `JWT ${token}` }
    }
  );

  if (res.status === 200) return res.json();
  return [];
}

export async function removeFromFavourites(id) {
  const token = getToken();
  if (!token) return []; // Security check: Do not proceed if token is missing

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/favourites/${id}`,
    {
      method: "DELETE",
      headers: { Authorization: `JWT ${token}` }
    }
  );

  if (res.status === 200) return res.json();
  return [];
}
