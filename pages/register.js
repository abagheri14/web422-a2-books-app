import { useState } from "react";
import { useRouter } from "next/router";
import { registerUser } from "@/lib/authenticate";
import { Button, Form, Alert } from "react-bootstrap";
import PageHeader from "@/components/PageHeader"; // Add this for consistency

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
    
    // Clear warning before new attempt
    setWarning(""); 
    
    // Use the updated registerUser that returns the full response object
    const res = await registerUser(user, password, password2);

    if (res.status === 200) {
      // Registration successful
      router.push("/login");
    } else {
      // Registration failed (422 is expected here)
      
      let message = "Registration failed.";
      
      // Try to get the detailed error message from the backend (if available)
      try {
        const data = await res.json();
        message = data.message || message;
      } catch (err) {
        // If res.json() fails, stick with generic message
      }

      setWarning(message);
    }
  };

  return (
    <>
      <PageHeader text="Register" subtext="Register for an account" /> 
      {warning && <Alert variant="danger">{warning}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" value={user} onChange={(e) => setUser(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email (Optional)</Form.Label>
          {/* Email field based on your previous screenshot */}
          <Form.Control type="email" /> 
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" value={password2} onChange={(e) => setPassword2(e.target.value)} />
        </Form.Group>
        <Button type="submit">Create Account</Button>
      </Form>
    </>
  );
}
