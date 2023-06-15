import styled from "styled-components";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

function HeroBlock() {
  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(".my-reveal-effect", {
      origin: "top",
      distance: "60px",
      duration: 2000,
      reset: true,
      delay: 100,
    });
  }, []);

  return (
    <HeroSection className="my-reveal-effect">
      <h1>
        Hi, I&#39;m <br />
        <span>Frani Bizi</span> <br />
        Frontend Developer
      </h1>
      <p>
        Passionate about user experience and equipped with strong design skills.
        Creates responsive and elegant interfaces that transform creative
        concepts into interactive applications.
      </p>
      <a href="mailto:bizifrani@icloud.com">Get in touch</a>
    </HeroSection>
  );
}

const HeroSection = styled.div`
  padding-inline: 20px;
  max-width: 960px;
  margin-inline: auto;
  margin-block: 180px;
  padding-bottom: 80px;

  h1 {
    font-size: 70px;
    font-weight: 600;
    margin-bottom: 20px;
    line-height: 1.2;
  }
  p {
    font-size: 22px;
    margin-bottom: 40px;
    line-height: 1.5;
    color: #22262d;
  }
  span {
    color: #e84855;
  }

  a {
    padding: 16px 18px;
    background-color: #e84855;
    color: #fff;
    border: 1px solid #e84855;
    border-radius: 4px;
    font-size: 18px;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  a:hover {
    background-color: #fff;
    color: #e84855;
    border: 1px solid #e84855;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  @media (max-width: 991px) {
    h1 {
      font-size: 60px;
    }
    p {
      font-size: 18px;
    }
  }

  @media (max-width: 871px) {
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 36px;
      margin-bottom: 16px;
    }
    p {
      font-size: 16px;
    }
    a {
      font-size: 16px;
    }
  }
  @media (max-width: 460px) {
    margin-top: 95px;
    margin-bottom: 1px;
  }
`;

export default HeroBlock;
