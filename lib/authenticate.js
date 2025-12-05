import jwtDecode from "jwt-decode";

const TOKEN_KEY = "token";

// Save JWT
export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

// Retrieve JWT
export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

// Remove JWT
export function removeToken() {
  localStorage.removeItem(TOKEN_KEY);
}

// Check if logged in
export function isAuthenticated() {
  const token = getToken();
  if (!token) return false;

  try {
    const decoded = jwtDecode(token);
    const now = Date.now() / 1000;
    return decoded.exp && decoded.exp > now;
  } catch {
    return false;
  }
}

// Decode user from token
export function getUserInfo() {
  const token = getToken();
  if (!token) return null;

  try {
    return jwtDecode(token);
  } catch {
    return null;
  }
}

// REGISTER USER
export async function registerUser(user) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Registration Failed");
  }

  return await res.json();
}

// LOGIN USER
export async function loginUser(user) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Login Failed");
  }

  const { token } = await res.json();
  setToken(token);
  return token;
}
