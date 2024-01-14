import React from "react";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <Navbar fluid rounded className=" bg-purple-300">
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          src="/src/assets/react.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/home" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="/service">
          Service
        </Navbar.Link>
        <Navbar.Link as={Link} to="/about">
          About
        </Navbar.Link>
        <Navbar.Link as={Link} to="/contact">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
