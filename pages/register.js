import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { registerUser } from "@/lib/authenticate";

export default function Register() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [serverError, setServerError] = useState("");

  async function onSubmit(data) {
    setServerError("");

    if (data.password !== data.confirmPassword) {
      setServerError("Passwords do not match");
      return;
    }

    try {
      await registerUser({
        userName: data.userName,
        password: data.password,
        email: data.email || null
      });

      router.push("/login?register=success");
    } catch (err) {
      setServerError(err.message || "Registration failed");
    }
  }

  return (
    <Card className="p-4 shadow-sm">
      <h2 className="mb-3 text-center">Register</h2>

      {serverError && <p className="alert alert-danger">{serverError}</p>}

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
          <Form.Label>Email (Optional)</Form.Label>
          <Form.Control
            {...register("email")}
            type="email"
            placeholder="Enter email"
          />
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

        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            {...register("confirmPassword", { required: true })}
            type="password"
            placeholder="Confirm password"
          />
          {errors.confirmPassword && <small className="text-danger">Confirm your password</small>}
        </Form.Group>

        <div className="d-grid">
          <Button type="submit" variant="primary">Create Account</Button>
        </div>
      </Form>

      <p className="mt-3 text-center">
        Already have an account? <Link href="/login">Login</Link>
      </p>
    </Card>
  );
}
