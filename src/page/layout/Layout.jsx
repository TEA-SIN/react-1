import React from "react";
import NavbarComponent from "../../NavbarComponent";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <NavbarComponent />
      </header>
      <Outlet />
    </>
  );
}
