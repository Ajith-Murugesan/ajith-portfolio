"use client";

import { useEffect, useRef } from "react";

export function SiteFooter() {
  const yearRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (yearRef.current) {
      yearRef.current.textContent = String(new Date().getFullYear());
    }
  }, []);

  return (
    <footer className="site-footer">
      <div className="container">
        <a className="brand" href="#home" aria-label="Back to top">AM<span>.</span></a>
        <p>© <span ref={yearRef} /> Ajith M. Built with intent.</p>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
