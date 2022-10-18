import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import NavItem from "./NavItem";

const MENU_LIST = [
    { text: "Home", href: "/" },
    { text: "About Us", href: "/about" },
    { text: "Contact", href: "/contact" },
  ];

const Navbar = () => {
    const [navActive, setNavActive] = useState(null);
    const [activeIdx, setActiveIdx] = useState(-1);
  return (
   <header>
     <nav>
        <Link href="/"><img src={Logo} alt="logo" /></Link>
     </nav>
   </header>
  )
}

export default Navbar