import React, { Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <Fragment>
      <div className="px-10 py-6 flex flex-col w-[300px] gap-16">
        <NavLink to="/">
          <img src="/assets/images/Logo.svg" alt="Logo" />
        </NavLink>

        <nav className="navbar">
          <NavbarItem link="/">Overview</NavbarItem>
          <NavbarItem link="/create-word">Create Word</NavbarItem>
          <NavbarItem link="/manage-word">Manage Word</NavbarItem>
          <NavbarItem link="/test-ui-styles">Test</NavbarItem>
        </nav>
      </div>
    </Fragment>
  );
};

const NavbarItem = ({ link, children, className }) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        `navbar__link ${className} ${isActive ? "active" : ""}`
      }
    >
      {children}
    </NavLink>
  );
};

export default Sidebar;
