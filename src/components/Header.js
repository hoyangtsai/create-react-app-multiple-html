import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  display: block;
  height: 30px;
  background-color: chartreuse;
`;

const Nav = styled.nav`
  padding-left: 60px;
  a {
    display: inline-block;
    vertical-align: middle;
    width: 100px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <Link to={`${process.env.PUBLIC_URL}/layout1`}>Layout1</Link>
        <Link to={`${process.env.PUBLIC_URL}/layout.html`}>Layout2</Link>
      </Nav>
    </StyledHeader>
  )
}

export default Header;