function Navbar() {
  return (
    <>
      <div className="top-bar"></div>
      <nav className="hero-enter">
        <a href="#" className="nav-logo">Anshul<br />Siwach</a>
        <ul className="nav-links">
          <li><a href="#about">About Me</a></li>
          <li><a href="#works">Works</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#connect">Connect</a></li>
        </ul>
        <a className="nav-cta" href="#connect">Contact Me</a>
      </nav>
    </>
  );
}

export default Navbar;
