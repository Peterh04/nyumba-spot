import { useState } from "react";
import AuthLayout, { Field } from "../components/AuthLayout.jsx";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      // TODO: call your reset-password API here, e.g.
      // await fetch("/api/forgot-password", { method: "POST", body: JSON.stringify({ email }) });
      console.log("Reset link for", email);
      setSent(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Reset your password"
      subtitle="Enter the email you signed up with and we'll send you a link to reset it."
      footer={
        <>
          Remembered it?{" "}
          <a className="auth__link" href="/login">
            log in
          </a>
        </>
      }
    >
      {sent && (
        <p className="auth__alert auth__alert--success" role="status">
          If an account exists for {email}, a reset link is on its way.
        </p>
      )}

      <form className="auth__form" onSubmit={handleSubmit} noValidate>
        <Field
          id="email"
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={error}
        />

        <button className="auth__btn" type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send reset link"}
        </button>
      </form>
    </AuthLayout>
  );
}
