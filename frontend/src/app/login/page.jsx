"use client";

import axios from "axios";
import { useFormik } from "formik";
import Link from "next/link";
import toast from "react-hot-toast";

export default function LoginPage() {
  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      console.log(values);

      axios.post("http://localhost:5000/user/authenticate", values)
        .then((response) => {
          toast.success("Login successful!");
          console.log(response.data);

        }).catch((err) => {
          if (err.response.status === 401) {
            toast.error("Invalid email or password!");
          } else {
            console.log(err);
            toast.error("An error occurred. Please try again later.");
          }
        });

    }
  })
  return (
    <main className="auth-page">

      <div className="auth-left">

        <Link href="/" className="auth-brand">
          <span>&lt;/&gt;</span> CodeConvert
        </Link>

        <div className="auth-message">

          <p className="small-title">
            WELCOME BACK
          </p>

          <h1>
            Convert code.
            <br />
            <span>Build faster.</span>
          </h1>

          <p>
            Sign in to access your code conversion workspace,
            saved projects and conversion history.
          </p>

        </div>

      </div>


      <div className="auth-right">

        <div className="auth-box">

          <Link href="/" className="back-home">
            ← Back to home
          </Link>

          <h2>Welcome Back 👋</h2>

          <p className="auth-subtitle">
            Sign in to continue to CodeConvert
          </p>


          <form onSubmit={loginForm.handleSubmit}>

            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              id="email"
              onChange={loginForm.handleChange}
              value={loginForm.values.email}
              required
            />


            <div className="password-label">

              <label>Password</label>

              <a href="#">
                Forgot Password?
              </a>

            </div>

            <input
              type="password"
              placeholder="Enter your password"
              id="password"
              onChange={loginForm.handleChange}
              value={loginForm.values.password}
              required
            />


            <button
              type="submit"
              className="auth-btn"
            >
              Login →
            </button>

          </form>


          <div className="divider">
            <span>OR</span>
          </div>


          <p className="switch-auth">
            Don't have an account?
            <Link href="/signup">
              {" "}Create Account
            </Link>
          </p>

        </div>

      </div>

    </main>
  );
}