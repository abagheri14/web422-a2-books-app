import { getToken } from "./authenticate";

// This is the simplest way to retrieve the current token for every request

export async function getFavourites() {
  // Retrieve token directly inside the request block
  const token = getToken();
  if (!token) return []; 

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/favourites`, {
    headers: { Authorization: `JWT ${token}` }
  });

  if (res.status === 200) return res.json();
  return [];
}

export async function addToFavourites(id) {
  // Retrieve token directly inside the request block
  const token = getToken();
  if (!token) return []; 

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
  // Retrieve token directly inside the request block
  const token = getToken();
  if (!token) return []; 

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
