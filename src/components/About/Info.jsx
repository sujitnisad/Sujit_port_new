const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="uil uil-star about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">2+ Years Experience</span>
      </div>

      <div className="about__box">
        <i className="uil uil-airplay about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">10+ Projects</span>
      </div>
      <div className="about__box">
        <i className="uil uil-star about__icon"></i>
        <h3 className="about__title">Solved</h3>
        <span className="about__subtitle">500+ DSA problems</span>
      </div>
    </div>
  );
};

export default Info;
