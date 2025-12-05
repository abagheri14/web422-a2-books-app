import { useState } from "react";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { favouritesAtom } from "@/store";
import { authenticateUser } from "@/lib/authenticate";
import { getFavourites } from "@/lib/userData";
import { Button, Form, Alert } from "react-bootstrap";
import PageHeader from "@/components/PageHeader"; // Assuming you use PageHeader here

export default function Login() {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState("");
  const [favouritesList, setFavouritesList] = useAtom(favouritesAtom);

  async function updateAtom() {
    setFavouritesList(await getFavourites());
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setWarning(""); // Clear previous warning

    // Use the correctly imported function
    const success = await authenticateUser(user, password);
    
    if (success) {
      await updateAtom();
      router.push("/");
    } else {
      setWarning("Invalid login.");
    }
  };

  return (
    <>
      <PageHeader text="Login" subtext="Sign in to your account" />
      {warning && <Alert variant="danger">{warning}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control 
            type="text" 
            value={user} 
            onChange={(e) => setUser(e.target.value)} 
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit">Login</Button>
      </Form>
    </>
  );
}
