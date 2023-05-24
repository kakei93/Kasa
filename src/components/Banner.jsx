import '../styles/Banner.css'

function Banner({ titre, home }) {
    return (
      <div className={home ? "banner-home" : "banner-about"}>
        <div className="banner-sombre"></div>
        <span className="banner-txt">{titre}</span>
      </div>
    );
  }

export default Banner