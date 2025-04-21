
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation, Link } from "react-router-dom";

const navLinks = [
  { name: "Home", to: "/home" },
  { name: "Services", to: "/services" },
  { name: "Contact", to: "/contact" },
  { name: "About", to: "/about" }
];

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation(); 

  return (
    <nav className="w-full z-20 absolute top-0 left-0 flex items-center justify-between px-8 py-4 bg-white/5 backdrop-blur-md border-b border-white/10 shadow-md rounded-b-2xl">
      <div className="text-white font-extrabold text-xl tracking-wider drop-shadow-md select-none cursor-pointer" onClick={() => navigate("/")}>
        LOGO
      </div>
      <ul className="flex gap-8 items-center">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`text-white/90 text-lg font-medium hover:text-primary/90 transition-all duration-200 story-link ${
                location.pathname === link.to ? "underline font-bold" : ""
              }`}
              to={link.to}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <Button
        variant="outline"
        className="border-white/70 text-white font-semibold px-6 py-2 rounded-full hover:bg-white/10 hover:border-white shadow-none bg-transparent"
        onClick={() => navigate("/login")}
      >
        Login
      </Button>
    </nav>
  );
};

export default Navbar;
