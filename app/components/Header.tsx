import { Link } from "remix";

import Logo from "./Logo.tsx";

export default function Header() {
  return (
    <header className="remix-app__header">
      <div className="container remix-app__header-content">
        <Link to="/" title="Logo" className="remix-app__header-home-link">
          <Logo />
        </Link>
        <nav aria-label="Main navigation" className="remix-app__header-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
