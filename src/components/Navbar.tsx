
import React from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#" },
  { name: "Contact", href: "#" },
  { name: "About", href: "#" }
];

const Navbar: React.FC = () => (
  <nav className="w-full z-20 absolute top-0 left-0 flex items-center justify-between px-8 py-4 bg-white/5 backdrop-blur-md border-b border-white/10 shadow-md rounded-b-2xl">
    <div className="text-white font-extrabold text-xl tracking-wider drop-shadow-md select-none">LOGO</div>
    <ul className="flex gap-8 items-center">
      {navLinks.map((link) => (
        <li key={link.name}>
          <a className="text-white/90 text-lg font-medium hover:text-primary/90 transition-all duration-200 story-link" href={link.href}>{link.name}</a>
        </li>
      ))}
    </ul>
    <Button variant="outline" className="border-white/70 text-white font-semibold px-6 py-2 rounded-full hover:bg-white/10 hover:border-white shadow-none bg-transparent">Login</Button>
  </nav>
);

export default Navbar;
