import { NavLink } from "@remix-run/react";

export default function Nav() {
  return (
    <nav className="bg-slate-800 flex p-4 m-4 justify-between">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "font-bold text-3xl" : "")}
      >
        Taz Dev
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "font-bold" : "")}
      >
        Blog
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) => (isActive ? "font-bold" : "")}
      >
        Projects
      </NavLink>
    </nav>
  );
}
