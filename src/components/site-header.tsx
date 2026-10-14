"use client";

import { useEffect, useState } from "react";

const links = ["About", "Skills", "Experience", "Projects", "Awards", "Education", "Contact"] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <div className="container header-content">
        <a className="brand" href="#home" aria-label="Ajith M home">AM<span>.</span></a>
        <button className="menu-button" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen((value) => !value)}>
          {open ? "Close" : "Menu"}
        </button>
        <nav id="primary-navigation" className={`primary-navigation${open ? " is-open" : ""}`} aria-label="Primary navigation">
          {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>)}
        </nav>
      </div>
    </header>
  );
}
