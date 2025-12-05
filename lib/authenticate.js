const API_URL = "https://web422-a3-user-api-smoky.vercel.app/api/user";

export async function authenticateUser(userName, password) {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ userName, password })
  });

  if (!response.ok) throw new Error(await response.text());
  return response.json();
}

export async function registerUser(userData) {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData) // MUST include password2 here
  });

  if (!response.ok) throw new Error(await response.text());
  return response.json();
}

export function setToken(token) {
  localStorage.setItem("token", token);
}

export function getToken() {
  return localStorage.getItem("token");
}

export function removeToken() {
  localStorage.removeItem("token");
}

export function isAuthenticated() {
  return !!getToken();
}
