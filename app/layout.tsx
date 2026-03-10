import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LEA Labs | Brand Strategy & Growth Systems",
  description:
    "LEA Labs is a brand strategy, growth systems & digital influence consultancy based in Dubai. Engineering brand perception.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Exo+2:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-void text-off-white antialiased">{children}</body>
    </html>
  );
}
