import { useState } from "react";
import AuthLayout, { Field, PasswordField } from "../components/AuthLayout.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";

export default function SignUp() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: "",
    terms: false,
  });
  const navigate = useNavigate();

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
  const name = `${form.firstName} ${form.lastName}`;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;

    setLoading(true);
    try {
      // TODO: call sign-up API here, e.g.

      const data = await axios.post(
        "http://localhost:5001/api/users/register",
        {
          name,
          email: form.email,
          password: form.password,
        },
      );

      console.log("Successfully created the user", form);
      navigate(`/verify-account?email=${form.email}`);
    } catch (error) {
      console.log(error);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async (credential) => {
    setLoading(true);
    try {
      const data = await axios.post("http://localhost:5001/api/users/google", {
        credential: credential,
      });

      console.log("Successfully created or logged in the user");

      navigate("/");
    } catch (error) {
      setErrors(error?.response?.data.message);
    } finally {
      setLoading(false);
    }
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
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            handleGoogle(credentialResponse.credential);
          }}
          onError={() => {
            setErrors("Google sign-in failed. Please try again.");
          }}
        />
      </div>
    </AuthLayout>
  );
}
