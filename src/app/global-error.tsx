"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#000", color: "#fff", fontFamily: "system-ui, sans-serif" }}>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 1rem",
          }}
        >
          <div>
            <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}>
              Something went wrong
            </h1>
            <p style={{ color: "#999", marginBottom: "2rem" }}>
              A critical error occurred. Please refresh or try again.
            </p>
            <button
              onClick={reset}
              style={{
                padding: "0.625rem 1.25rem",
                background: "#f0dc82",
                color: "#000",
                border: "none",
                borderRadius: "6px",
                fontWeight: 600,
                cursor: "pointer",
                marginRight: "0.75rem",
              }}
            >
              Try again
            </button>
            <a
              href="/"
              style={{
                padding: "0.625rem 1.25rem",
                background: "transparent",
                color: "#f0dc82",
                border: "1px solid #f0dc82",
                borderRadius: "6px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Go home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
