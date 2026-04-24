function Marquee() {
  const spanData = [
    "Art Direction", "Web Design", "UX / UI", "Branding", "Web Development",
    "Art Direction", "Web Design", "UX / UI", "Branding", "Web Development",
    "Art Direction", "Web Design", "UX / UI", "Branding", "Web Development",
    "Art Direction", "Web Design", "UX / UI", "Branding", "Web Development"
  ];

  return (
    <div className="marquee-wrap">
      <div className="marquee-inner">
        {spanData.map((text, idx) => (
          <span key={idx}>
            {text}
            {idx < spanData.length - 1 && <span className="dot">✦</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
