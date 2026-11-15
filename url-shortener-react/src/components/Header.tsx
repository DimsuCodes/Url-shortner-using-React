import ThemeToggle from "./ThemeToggle";



function Header() {
  return (
    <header>
      <nav>
        <h1>Shortly</h1>

        <ul className="navLinks">
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#resources">Resources</a></li>
        </ul>
        <div className="navAuth">
          <ThemeToggle />
          <a href="#login">Login</a>
          <a href="#signup" className="signUpButton">Sign Up</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
