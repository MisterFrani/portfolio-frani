import styled from "styled-components";
import { Link } from "react-scroll";

function RightNav({ open, handleLinkClick }) {
  return (
    <Ul open={open}>
      <li>
        <NavBarLink
          to="projects"
          smooth={true}
          duration={400}
          spy={true}
          exact="true"
          offset={-60}
          onClick={handleLinkClick}
        >
          Projects
        </NavBarLink>
      </li>
      <li>
        <a
          href={"https://github.com/MisterFrani"}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
        >
          GitHub
        </a>
      </li>
      <li>
        <a
          href={"https://www.linkedin.com/in/frani-bizi/"}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
        >
          Linkedin
        </a>
      </li>
      <li>
        <a href={"mailto:bizifrani@icloud.com"}>Contact</a>
      </li>
    </Ul>
  );
}

const Ul = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  color: #161515;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  text-decoration: none;
  list-style: none;
  padding: 0;
  margin: 0;
  transition: all 0.3s ease-in-out;

  li {
    padding: 18px 17px;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: rgb(148, 148, 148);
    }
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #fff;
    color: #161515;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 58px;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    padding-left: 40px;
    transition: transform 0.3s ease-in-out;
    z-index: 10;

    li {
      padding: 14px 10px;
    }
  }
`;

const NavBarLink = styled(Link)`
  color: #22262d;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: rgb(148, 148, 148);
  }
`;

export default RightNav;
