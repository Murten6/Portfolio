import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex gap-4 p-4 bg-gray-900">
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contacts</Link>
    </nav>
  );
}
