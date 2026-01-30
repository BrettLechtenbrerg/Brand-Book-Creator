import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brand Book Creator - Define Your Brand DNA",
  description: "Create your complete brand identity with 15 essential sections. Part of The Master's Edge Business Program by Total Success AI.",
  authors: [{ name: "Total Success AI" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Inter', sans-serif" }}>{children}</body>
    </html>
  );
}
