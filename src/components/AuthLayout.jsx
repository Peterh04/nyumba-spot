import { useState } from "react";
import "../styles/Auth.css";

import kilimaniArielView from "../assets/kilimani_ariel_view.png";
import EyeIcon from "../assets/icons/eye.svg?react";
import HideEyeIcon from "../assets/icons/hideEye.svg?react";

export default function AuthLayout({ title, subtitle, children, footer }) {
  return (
    <div className="auth">
      <aside className="auth__aside">
        <div className="auth_image_overlay">
          <img
            className="aside_img"
            aria-label="aside image"
            alt="kilimani ariel view"
            src={kilimaniArielView}
          ></img>
        </div>

        <div className="auth_aside_content">
          <a className="auth__logo" href={"/"}>
            Nyumba
            <span>Spot</span>
          </a>

          <div>
            <h2 className="auth__aside-title">
              Find it, list it, and get in touch with <span>confidence.</span>
            </h2>
            <ul className="auth__aside-list">
              <li>Browse verified listings in one place</li>
              <li>Save the ones you like and come back anytime</li>
              <li>Contact Landlords and Agents directly</li>
            </ul>
          </div>

          <p className="auth__aside-foot">
            &copy; {new Date().getFullYear()} {"Nyumba"}
            {"Spot"}
          </p>
        </div>
      </aside>

      <main className="auth__main">
        <div className="auth__card">
          <a className="auth__logo auth__mobile-logo" href={"/"}>
            {"Nyumba"}
            <span>{"Spot"}</span>
          </a>

          <h1 className="auth__title">{title}</h1>
          {subtitle && <p className="auth__subtitle">{subtitle}</p>}

          {children}

          {footer && <p className="auth__switch">{footer}</p>}
        </div>
      </main>
    </div>
  );
}

export function Field({
  id,
  label,
  error,
  hint,
  className = "",
  ...inputProps
}) {
  return (
    <div className="auth__field">
      <label className="auth__label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        className={`auth__input ${error ? "auth__input--error" : ""} ${className}`}
        aria-invalid={error ? "true" : "false"}
        {...inputProps}
      />
      {error ? (
        <p className="auth__error">{error}</p>
      ) : (
        hint && <p className="auth__hint">{hint}</p>
      )}
    </div>
  );
}

export function PasswordField({ id, label, error, hint, ...inputProps }) {
  const [show, setShow] = useState(false);

  return (
    <div className="auth__field">
      <label className="auth__label" htmlFor={id}>
        {label}
      </label>
      <div className="auth__input-wrap">
        <input
          id={id}
          name={id}
          type={show ? "text" : "password"}
          className={`auth__input auth__input--has-toggle ${
            error ? "auth__input--error" : ""
          }`}
          aria-invalid={error ? "true" : "false"}
          {...inputProps}
        />
        <button
          type="button"
          className="auth__toggle"
          onClick={() => setShow((show) => !show)}
          aria-label={show ? "Hide password" : "Show password"}
        >
          {show ? <EyeIcon className="fa" /> : <HideEyeIcon className="fa" />}
        </button>
      </div>
      {error ? (
        <p className="auth__error">{error}</p>
      ) : (
        hint && <p className="auth__hint">{hint}</p>
      )}
    </div>
  );
}
