import "./index.css";
import LoginButton from "../buttons/loginButton.jsx";
import Arara from "../../assets/arara.png";

const Hero = ({ username }) => {
  return (
    <section className="hero">
      <div className="hero_text">
        <div className="hero_description">
          <p>Comunidade web brasileira</p>
        </div>
        <div className="hero_title">
          <h1>
            Acompanhe e discuta sobre os Objetivos de Desenvolvimento
            Sustentável no Brasil
          </h1>
          <p>
            Nós, imparcialmente e sem viés, centralizamos dados de fontes
            confiáveis para você tomar suas próprias conclusões
          </p>
          {username === "" && <LoginButton />}
        </div>
      </div>
      <div className="hero_image">
        <img src={Arara} alt="Arara-Azul na floresta" />
      </div>
    </section>
  );
};

export default Hero;
