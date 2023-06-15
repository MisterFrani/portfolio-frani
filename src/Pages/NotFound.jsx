import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function NotFound() {
  useEffect(() => {
    document.title = "404 Page Not - Frani Bizi ";
  }, []);

  return (
    <BoxCard>
      <h1>404 Not Found</h1>
      <p>The page you're looking for does not exist.</p>
      <p>
        "😱 Oops Road not found! Looks like you've taken a detour to an
        alternate timeline. Marty's DeLorean must be on a coffee break. Don't
        worry, we'll get you back to the future of my portfolio soon!"
      </p>
      <Link to="/">
        <button> Back to the futur </button>
      </Link>
    </BoxCard>
  );
}

const BoxCard = styled.div`
  padding-inline: 20px;
  max-width: 960px;
  margin-inline: auto;
  margin-block: 180px;
  /* padding-bottom: 600px */

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-block: 20px;
  }
  p {
    font-size: 1.5rem;
    font-weight: 400;
    margin-block: 20px;
  }

  button {
    margin-top: 20px;
    padding: 16px 18px;
    background-color: #e84855;
    color: #fff;
    border: 1px solid #e84855;
    border-radius: 4px;
    font-size: 18px;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #fff;
      color: #e84855;
      border: 1px solid #e84855;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  }
`;

export default NotFound;
