function About() {
  return (
    <section id="about">
      <div className="reveal">
        <h2 className="a-head">About<br />Me</h2>
        <div className="a-stats">
          <div><p className="a-sn">1+</p><p className="a-sl">Years<br />Experience</p></div>
          <div><p className="a-sn">20+</p><p className="a-sl">Projects<br />Delivered</p></div>
        </div>
        <div className="a-resume reveal" style={{ marginTop: '50px', transitionDelay: '.1s' }}>
          <a href="#connect" className="a-resume-btn" data-cursor="hover">LET'S TALK ↗</a>
        </div>
      </div>
      <div className="a-txt reveal" style={{ transitionDelay: '.12s' }}>
        <p>I'm a creative designer specialising in web design, UX/UI, and art direction. I work with brands of all sizes to craft digital experiences that are visually memorable and strategically sound.</p>
        <p>My approach blends sharp aesthetic sensibility with a deep understanding of how people use digital products — resulting in work that looks great and performs even better.</p>
        <p>Beyond the screen, you'll find me exploring typography archives, shooting 35mm film, and chasing the perfect espresso pull. I believe real inspiration comes from living life offline.</p>
        <p>Currently available for freelance projects and collaborations.</p>
        
        <div className="a-caps-wrapper">
          <span className="a-caps-title">CORE CAPABILITIES</span>
          <div className="a-caps">
            <span className="a-cap">UI / UX Design</span>
            <span className="a-cap">Art Direction</span>
            <span className="a-cap">Prototyping</span>
            <span className="a-cap">Figma</span>
            <span className="a-cap">React</span>
            <span className="a-cap">Framer</span>
            <span className="a-cap">Creative Coding</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
