import { useState } from "react";
import AuthLayout, { Field, PasswordField } from "../components/AuthLayout.jsx";

export default function SignUp() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: "",
    terms: false,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const validate = () => {
    const next = {};
    if (!form.firstName.trim()) next.firstName = "Enter your first name.";
    if (!form.lastName.trim()) next.lastName = "Enter your last name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email))
      next.email = "Enter a valid email address.";
    if (form.password.length < 8) next.password = "Use at least 8 characters.";
    if (form.confirm !== form.password) next.confirm = "Passwords don't match.";
    if (!form.terms) next.terms = "Accept the terms to continue.";
    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;

    setLoading(true);
    try {
      // TODO: call your sign-up API here, e.g.
      // await fetch("/api/register", { method: "POST", body: JSON.stringify(form) });
      console.log("Sign up", form);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = () => {
    // TODO: start your Google sign-in here
    // e.g. window.location.href = "/api/auth/google";
    console.log("Google sign-up");
  };

  return (
    <AuthLayout
      title="Create your account"
      subtitle="It takes a minute. Then you can save listings and get in touch."
      footer={
        <>
          Already have an account?{" "}
          <a className="auth__link" href="/login">
            Log in
          </a>
        </>
      }
    >
      <form className="auth__form" onSubmit={handleSubmit} noValidate>
        <div className="auth__row">
          <Field
            id="firstName"
            label="First name"
            autoComplete="given-name"
            value={form.firstName}
            onChange={handleChange}
            error={errors.firstName}
          />
          <Field
            id="lastName"
            label="Last name"
            autoComplete="family-name"
            value={form.lastName}
            onChange={handleChange}
            error={errors.lastName}
          />
        </div>

        <Field
          id="email"
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        />

        <PasswordField
          id="password"
          label="Password"
          autoComplete="new-password"
          hint="At least 8 characters."
          value={form.password}
          onChange={handleChange}
          error={errors.password}
        />

        <PasswordField
          id="confirm"
          label="Confirm password"
          autoComplete="new-password"
          value={form.confirm}
          onChange={handleChange}
          error={errors.confirm}
        />

        <div>
          <label className="auth__check">
            <input
              type="checkbox"
              name="terms"
              checked={form.terms}
              onChange={handleChange}
            />
            <span>
              I agree to the{" "}
              <a className="auth__link" href="/terms">
                Terms
              </a>{" "}
              and{" "}
              <a className="auth__link" href="/privacy">
                Privacy Policy
              </a>
              .
            </span>
          </label>
          {errors.terms && <p className="auth__error">{errors.terms}</p>}
        </div>

        <button className="auth__btn" type="submit" disabled={loading}>
          {loading ? "Creating account..." : "Create account"}
        </button>
      </form>

      <div className="auth__alt">
        <div className="auth__divider">or</div>

        <button
          type="button"
          className="auth__btn auth__btn--outline auth__btn--google"
          onClick={handleGoogle}
        >
          <svg
            className="auth__google-icon"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              fill="#EA4335"
              d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
            />
            <path
              fill="#4285F4"
              d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
            />
            <path
              fill="#FBBC05"
              d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
            />
            <path
              fill="#34A853"
              d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
            />
          </svg>
          Sign up with Google
        </button>
      </div>
    </AuthLayout>
  );
}
