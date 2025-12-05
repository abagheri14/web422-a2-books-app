import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { loginUser, setToken } from "@/lib/authenticate";
import { Card, Button, Form } from "react-bootstrap";
import { useState } from "react";

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();
  const [serverError, setServerError] = useState("");

  async function onSubmit(data) {
    setServerError("");

    try {
      const token = await loginUser({
        userName: data.userName,
        password: data.password
      });

      setToken(token);
      router.push("/favourites");
      
    } catch (err) {
      setServerError(err.message || "Login failed");
    }
  }

  return (
    <Card className="p-4 shadow-sm">
      <h2 className="mb-3 text-center">Login</h2>

      {router.query.register === "success" && (
        <p className="alert alert-success">Account created — please log in.</p>
      )}

      {serverError && (
        <p className="alert alert-danger">{serverError}</p>
      )}

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            {...register("userName", { required: true })}
            type="text"
            placeholder="Enter username"
          />
          {errors.userName && <small className="text-danger">Username is required</small>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            {...register("password", { required: true })}
            type="password"
            placeholder="Enter password"
          />
          {errors.password && <small className="text-danger">Password is required</small>}
        </Form.Group>

        <div className="d-grid">
          <Button type="submit" variant="primary">Login</Button>
        </div>
      </Form>
    </Card>
  );
}
