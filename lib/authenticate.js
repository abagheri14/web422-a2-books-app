import jwtDecode from "jwt-decode";

const TOKEN_KEY = "token";

// Save JWT safely
export function setToken(token) {
  if (typeof window !== "undefined") {
    localStorage.setItem(TOKEN_KEY, token);
  }
}

// Retrieve JWT safely
export function getToken() {
  if (typeof window !== "undefined") {
    return localStorage.getItem(TOKEN_KEY);
  }
  return null;
}

// Remove JWT
export function removeToken() {
  if (typeof window !== "undefined") {
    localStorage.removeItem(TOKEN_KEY);
  }
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

// Decode current user
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
