import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/register", label: "Registration" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="site-header">
      <nav className="container navigation" aria-label="Main navigation">
        <NavLink className="brand" to="/" aria-label="EduPortal home">
          EduPortal
        </NavLink>
        <div className="nav-links">
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
