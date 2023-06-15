import styled from "styled-components";
import Burger from "./Burger";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <HeaderContainer>
      <Nav>
        <a href="/">
          <LogoImg src={logo}></LogoImg>
        </a>

        <Burger />
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  width: 1280px;
  margin: 0 auto;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  background-color: #fff;
`;
const LogoImg = styled.img`
  padding: 15px 0;
  width: 40px;
`;
export default Navbar;
