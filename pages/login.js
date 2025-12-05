import { useState } from "react";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { favouritesAtom } from "@/store";
import { authenticateUser } from "@/lib/authenticate";
import { getFavourites } from "@/lib/userData";
import { Button, Form, Alert } from "react-bootstrap";

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
      <h1>Login</h1>
      {warning && <Alert variant="danger">{warning}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" onChange={(e) => setUser(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button type="submit">Login</Button>
      </Form>
    </>
  );
}
