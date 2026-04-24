function Works() {
  const works = [
    {
      img: "https://community.spotify.com/t5/image/serverpage/image-id/187160i400339190307C48B?v=v2",
      name: "Project One",
      tags: "Branding · Web Design",
      delay: "0s"
    },
    {
      img: "https://www.devicemag.com/wp-content/uploads/2022/12/netflix-home-screen-1-1-2000x1125.webp",
      name: "Project Two",
      tags: "UX/UI · Development",
      delay: ".08s"
    },
    {
      img: "https://kartikraiyani03.github.io/Portfolio/l1.png",
      name: "Project Three",
      tags: "Art Direction",
      delay: ".13s"
    },
    {
      img: null,
      name: "Project Four",
      tags: "Identity · Strategy",
      delay: ".18s",
      comingSoon: true
    }
  ];

  return (
    <section id="works">
      <div className="sec-hdr reveal">
        <span className="sec-n">[ 01 ]</span>
        <h2 className="sec-t">Selected Works</h2>
      </div>
      <div className="works-grid">
        {works.map((work, idx) => (
          <div 
            key={idx} 
            className={`work-item reveal ${work.comingSoon ? 'coming-soon' : ''}`}
            style={{ transitionDelay: work.delay }}
          >
            <div className="work-thumb">
              {work.comingSoon ? (
                <div className="loading-bar"></div>
              ) : (
                <img className="work-img" src={work.img} alt={work.name} />
              )}
            </div>
            <div className="work-ov">
              <p className="work-nm">{work.name}</p>
              <p className="work-tg">{work.tags}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Works;
