import { useEffect, useRef, useState } from "react";
import AuthLayout from "../components/AuthLayout.jsx";

const CODE_LENGTH = 6;
const RESEND_SECONDS = 30;

export default function VerifyAccount() {
  const params = new URLSearchParams(window.location.search);
  const email = params.get("email") || "";

  const [digits, setDigits] = useState(Array(CODE_LENGTH).fill(""));
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [seconds, setSeconds] = useState(RESEND_SECONDS);
  const [resent, setResent] = useState(false);
  const inputs = useRef([]);

  // Focuses on the first box on load
  useEffect(() => {
    inputs.current[0]?.focus();
  }, []);

  // Resend countdown
  useEffect(() => {
    if (seconds <= 0) return;

    const time = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(time);
  }, [seconds]);

  // Put a string of digits into the boxes starting at starts
  const fillFrom = (start, str) => {
    const chars = str
      .replace(/\D/g, "")
      .slice(0, CODE_LENGTH - start)
      .split("");
    if (!chars.length) return;
    setDigits((prev) => {
      const next = [...prev];
      chars.forEach((c, i) => (next[start + i] = c));
      return next;
    });
    const last = Math.min(start + chars.length, CODE_LENGTH - 1);
    inputs.current[last]?.focus();
  };

  const handleChange = (i, e) => {
    const value = e.target.value.replace(/\D/g, "");
    setError("");
    if (!value) {
      setDigits((prev) => prev.map((d, idx) => (idx === i ? "" : d)));
      return;
    }
    // One digit typed, or several (autofill / paste)
    fillFrom(i, value);
  };

  const handleKeyDown = (i, e) => {
    if (e.key === "Backspace" && !digits[i] && i > 0) {
      e.preventDefault();
      setDigits((prev) => prev.map((d, idx) => (idx === i - 1 ? "" : d)));
      inputs.current[i - 1]?.focus();
    } else if (e.key === "ArrowLeft" && i > 0) {
      inputs.current[i - 1]?.focus();
    } else if (e.key === "ArrowRight" && i < CODE_LENGTH - 1) {
      inputs.current[i + 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    fillFrom(0, e.clipboardData.getData("text"));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const code = digits.join("");
    if (code.length < CODE_LENGTH) {
      setError("Enter the 6-digit code from your email.");
      return;
    }

    setLoading(true);
    try {
      console.log("Verify", { email, code });
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (seconds > 0) return;
    setError("");
    setDigits(Array(CODE_LENGTH).fill(""));
    inputs.current[0]?.focus();
    // TODO: call resend-code API here
    console.log("Resend code to", email);
    setSeconds(RESEND_SECONDS);
    setResent(true);
  };

  return (
    <AuthLayout
      title="Verify your email"
      subtitle={
        <>
          We sent a 6-digit code to{" "}
          <span className="w" aria-label="email">
            {email || "your email address"}
          </span>
          . Enter it below to activate your account.
        </>
      }
      footer={
        <>
          Wrong email?{" "}
          <a className="auth__link" href="/signup">
            Sign up again
          </a>
        </>
      }
    >
      <form className="auth__form" onSubmit={handleSubmit} noValidate>
        {resent && (
          <p className="auth__alert auth__alert--success" role="status">
            A new code has been sent.
          </p>
        )}

        <div className="auth__field">
          <span className="auth__label" id="code-label">
            Verification code
          </span>
          <div
            className="auth__code"
            role="group"
            aria-labelledby="code-label"
            onPaste={handlePaste}
          >
            {digits.map((digit, idx) => (
              <input
                key={idx}
                ref={(el) => (inputs.current[idx] = el)}
                className={`auth__input auth__code-input ${
                  error ? "auth__input--error" : ""
                }`}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                autoComplete={idx === 0 ? "one-time-code" : "off"}
                aria-label={`Digit ${idx + 1}`}
                value={digit}
                onChange={(e) => handleChange(idx, e)}
                onKeyDown={(e) => handleKeyDown(idx, e)}
                onFocus={(e) => e.target.select()}
              />
            ))}
          </div>
          {error && <p className="auth__error">{error}</p>}
        </div>

        <button className="auth__btn" type="submit" disabled={loading}>
          {loading ? "Verifying..." : "Verify account"}
        </button>

        <p className="auth__resend">
          Didn&apos;t get the code?{" "}
          {seconds > 0 ? (
            <span className="auth__hint">Resend in {seconds}s</span>
          ) : (
            <button
              type="button"
              className="auth__link auth__link-btn"
              onClick={handleResend}
            >
              Resend code
            </button>
          )}
        </p>
      </form>
    </AuthLayout>
  );
}
