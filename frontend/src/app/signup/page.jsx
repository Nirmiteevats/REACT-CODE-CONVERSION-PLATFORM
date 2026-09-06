"use client";

import axios from "axios";
import { useFormik } from "formik";
import Link from "next/link";
import toast from "react-hot-toast";

export default function SignUpPage() {
  
  const signupForm = useFormik({
        initialValues: {
          name: "",
          email: "",
          password: "",
          confirmPassword: "",

        },
        onSubmit: (values) => {
            console.log(values);

            axios.post("http://localhost:5000/user/add", values)
                .then((response) => {
                    toast.success("Account created successfully!");
                    console.log(response.data);

                }).catch((err) => {
                    if (err.response.status === 401) {
                        toast.error("Invalid email or password!");
                    } else {
                        console.log(err);
                        toast.error("Some error occurred. Please try again later.");
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
            JOIN CODECONVERT
          </p>

          <h1>
            Your code.
            <br />
            <span>Converted better.</span>
          </h1>

          <p>
            Create your account and start transforming React
            code with a modern developer workspace.
          </p>


          <div className="signup-benefits">

            <div>✓ Save your conversion history</div>

            <div>✓ Access your projects anywhere</div>

            <div>✓ Copy and download converted code</div>

          </div>

        </div>

      </div>


      <div className="auth-right">

        <div className="auth-box">

          <Link href="/" className="back-home">
            ← Back to home
          </Link>

          <h2>Create Account 🚀</h2>

          <p className="auth-subtitle">
            Start your React code conversion journey
          </p>


          <form onSubmit={signupForm.handleSubmit}>

            <label>Full Name</label>

            <input
              type="text"
              id="name"
              onChange={signupForm.handleChange}
              value={signupForm.values.name}
              placeholder="Enter your full name"
              required
            />


            <label>Email Address</label>

            <input
              type="email"
              id="email"
              onChange={signupForm.handleChange}
              value={signupForm.values.email}
              placeholder="Enter your email"
              required
            />


            <label>Password</label>

            <input
              type="password"
              id="password"
              onChange={signupForm.handleChange}
              value={signupForm.values.password}
              placeholder="Create a password"
              required
            />


            <label>Confirm Password</label>

            <input
              type="password"
              id="confirmPassword"
              onChange={signupForm.handleChange}
              value={signupForm.values.confirmPassword}
              placeholder="Confirm your password"
              required
            />


            <button
              type="submit"
              className="auth-btn"
            >
              Create Account →
            </button>

          </form>


          <p className="terms">
            By creating an account, you agree to our
            Terms & Conditions and Privacy Policy.
          </p>


          <p className="switch-auth">
            Already have an account?
            <Link href="/login">
              {" "}Login
            </Link>
          </p>

        </div>

      </div>

    </main>
  );
}