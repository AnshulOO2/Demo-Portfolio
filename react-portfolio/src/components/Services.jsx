function Services() {
  const services = [
    {
      num: "01",
      title: "Art Direction",
      desc: "Visual storytelling and creative strategy that defines the look and feel of your brand across every touchpoint.",
      delay: "0s"
    },
    {
      num: "02",
      title: "Web Design (UX/UI)",
      desc: "User-centred interfaces designed with purpose — balancing aesthetic beauty with seamless, intuitive experience.",
      delay: ".08s"
    },
    {
      num: "03",
      title: "Web Development",
      desc: "Clean, performant code that brings your design to life — responsive, accessible, and built to last.",
      delay: ".16s"
    }
  ];

  return (
    <section id="services">
      <div className="sec-hdr reveal">
        <span className="sec-n">[ 02 ]</span>
        <h2 className="sec-t">Services</h2>
      </div>
      <div className="svc-grid">
        {services.map((svc, idx) => (
          <div key={idx} className="svc-item reveal" style={{ transitionDelay: svc.delay }}>
            <p className="sn">{svc.num}</p>
            <h3 className="st">{svc.title}</h3>
            <p className="sd">{svc.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
