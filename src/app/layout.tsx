import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ajith M | Full Stack Engineer",
    template: "%s | Ajith M",
  },
  description:
    "Portfolio of Ajith M, a Full Stack Engineer specializing in .NET Core, React.js, Angular, and AWS.",
  metadataBase: new URL("https://ajith-portfolio.vercel.app"),
  openGraph: {
    title: "Ajith M | Full Stack Engineer",
    description:
      "Portfolio of Ajith M, a Full Stack Engineer specializing in .NET Core, React.js, Angular, and AWS.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary",
    title: "Ajith M | Full Stack Engineer",
    description:
      "Portfolio of Ajith M, a Full Stack Engineer specializing in .NET Core, React.js, Angular, and AWS.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
