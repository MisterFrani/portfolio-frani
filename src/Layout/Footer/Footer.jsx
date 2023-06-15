import styled from "styled-components";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <FooterBlock>
      <div className="cta-container">
        <h2>Any questions or projects?</h2>
        <a href="mailto:bizifrani@icloud.com" className="cta">
          Get in touch
        </a>
      </div>
      <div className="social">
        <a
          href={"https://github.com/MisterFrani"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub />
        </a>
        <span className="middle-dot">&middot;</span>
        <a
          href={"https://www.linkedin.com/in/frani-bizi/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLinkedin />
        </a>
        <span className="middle-dot">&middot;</span>
        <a
          href={"https://twitter.com/franibizi"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiTwitter />
        </a>
      </div>
      <p className="copyright">
        Designed and built by Frani Bizi © Copyright {date}
      </p>
    </FooterBlock>
  );
}

const FooterBlock = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  margin-top: 80px;
  padding-top: 80px;
  padding-bottom: 20px;
  background-color: #fafafa;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  user-select: none;
  color: #22262d;

  .cta-container {
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    align-items: baseline;
    gap: 20px;
  }
  @media (max-width: 460px) {
    .cta-container {
      flex-direction: column;
      align-items: center;
      margin-bottom: 25px;
    }
  }

  .cta {
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

  .cta:hover {
    background-color: #fff;
    color: #e84855;
    border: 1px solid #e84855;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .social {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0;

    a {
      font-size: 32px;
      padding-inline: 12px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      color: rgba(34, 38, 45, 0.7);

      &:hover {
        color: #e84855;
      }
    }
  }
  .middle-dot {
    font-size: 28px;
  }

  .copyright {
    color: rgba(34, 38, 45, 0.7);
  }
`;
