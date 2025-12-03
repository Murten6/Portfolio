import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mijn Portfolio",
  description: "Portfolio van [jouw naam]",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-screen">
      <body className="h-screen w-screen m-0 p-0 overflow-hidden">
        {/* De scroll-container zit in de page */}
        {children}
      </body>
    </html>
  );
}
