import { getToken } from "./authenticate";

// All functions must be async and use the JWT token in the Authorization header [cite: 97, 99]

export async function getFavourites() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/favourites`, {
    headers: { Authorization: `JWT ${getToken()}` } // [cite: 99, 106]
  });

  // If successful (status 200), return the data (res.json()) [cite: 100]
  if (res.status === 200) return res.json();
  
  // If not successful (status not 200), return an empty array [cite: 101]
  return []; 
}

export async function addToFavourites(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/favourites/${id}`,
    {
      method: "PUT", // PUT request to /favourites/id [cite: 104]
      headers: { Authorization: `JWT ${getToken()}` } // [cite: 99]
    }
  );

  if (res.status === 200) return res.json();
  return [];
}

export async function removeFromFavourites(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/favourites/${id}`,
    {
      method: "DELETE", // DELETE request to /favourites/id [cite: 105]
      headers: { Authorization: `JWT ${getToken()}` } // [cite: 99]
    }
  );

  if (res.status === 200) return res.json();
  return [];
}
