function Hero() {
  const scrollToConnect = () => {
    window.location.href = '#connect';
  };

  return (
    <section id="hero">
      <p className="hero-counter hero-enter">1,618</p>
      <h1 className="hero-headline hero-enter">ANSHUL SIWACH</h1>
      <div className="hero-zone hero-enter">
        <div className="info-container">
          <p className="hero-young hero-enter">/ CREATIVE MIND</p>
          <div className="hero-services">
            <p>/ ART DIRECTION</p>
            <p>/ WEB DESIGN (UX/UI)</p>
            <p>/ WEB DEVELOPMENT</p>
          </div>
          <div className="photo-main" onClick={scrollToConnect}>
            <img src="/anshul1.png" alt="Anshul Siwach" />
          </div>
        </div>
        <div className="hero-location">B A S E D &nbsp; I N -&nbsp; N E W &nbsp; D E L H I</div>
      </div>
      <p className="hero-bio">
        I'M EXPERIENCED WEB AND UX/UI DESIGNER, WHO<br />
        DESIGN MEMORABLE WEB EXPERIENCES FOR BRANDS<br />
        OF ALL SIZES.
      </p>
    </section>
  );
}

export default Hero;
