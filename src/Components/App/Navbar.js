import React, { useState } from 'react';
import styled from 'styled-components';

import MobileMenu from '../Navbar/MobileMenu';

import logo from '../Navbar/images/logo.svg';
import DesktopMenu from '../Navbar/DesktopMenu';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 94) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <Wrapper navbar={navbar}>
      <img src={logo} alt="logo icon" className="logo" />
      <MobileMenu />
      <DesktopMenu />
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 94px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  z-index: 100;
  background: ${props => (props.navbar ? 'rgba(62, 191, 255, 0.5)' : '')};

  box-shadow: ${props => props.navbar && '0px 10px 20px rgba(0, 0, 0, 0.3)'};

  .logo {
    filter: ${props =>
      props.navbar && 'drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))'};
  }

  @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    background-color: rgba(62, 191, 255, 0.5);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }
`;

export default Navbar;
