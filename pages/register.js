import { useState } from "react";
import { useRouter } from "next/router";
import { registerUser } from "@/lib/authenticate";
import { Button, Form, Alert } from "react-bootstrap";

export default function Register() {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [warning, setWarning] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      setWarning("Passwords do not match.");
      return;
    }

    const success = await registerUser(user, password, password2);
    if (success) {
      router.push("/login");
    } else {
      setWarning("Registration failed.");
    }
  };

  return (
    <>
      <h1>Register</h1>
      {warning && <Alert variant="danger">{warning}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" onChange={(e) => setUser(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" onChange={(e) => setPassword2(e.target.value)} />
        </Form.Group>
        <Button type="submit">Register</Button>
      </Form>
    </>
  );
}
