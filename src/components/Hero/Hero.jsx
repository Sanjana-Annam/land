import "./hero.css";
import HeroContent from "./HeroContent";
import ContactForm from "../ContactForm/ContactForm";
import Header from "../Header/Header";



const Hero = () => {
  return (
    <>
      <Header />

      <section className="hero" id="home">
        <div className="hero-overlay"></div>

        <div className="hero-inner">
          <HeroContent />
          <ContactForm />
          
        </div>
      </section>
    </>
  );
};

export default Hero;
