import "../styles/hero.css";
import esferasPrimordialesPNG from "../assets/img/esferas-primordiales.png"
import dbUltraLogo from "../assets/img/db-ultra-logo.png"

const Hero = () => {
  return (
    <section className="hero-pro">
      {/* Background shapes */}
      <div className="bg-shape yellow"></div>
      <div className="bg-shape dark"></div>

      {/* Floating dragon balls */}
      <div className="dragon-ball ball-1"></div>
      <div className="dragon-ball ball-2"></div>

      <div className="hero-content">
        <div className="hero-left">
          <h1>
            <span>MR4H4</span><br></br>PRESENTA:
          </h1>
          <img className="imagen-png" src={dbUltraLogo} alt="esferas-primordiales"></img>
          <p>
            El trono del todo está vacío.<br></br>
            Un nuevo poder ha despertado.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("manga")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Leer Manga
          </button>
        </div>

        <div className="hero-right">
            <img className="imagen-png" src={esferasPrimordialesPNG} alt="esferas-primordiales"></img>
        </div>
      </div>
    </section>
  );
};

export default Hero;