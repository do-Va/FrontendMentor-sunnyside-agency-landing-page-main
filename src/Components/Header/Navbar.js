import React from 'react';
import styled from 'styled-components';

import MobileMenu from './Navbar/MobileMenu';

import logo from './images/logo.svg';
import DesktopMenu from './Navbar/DesktopMenu';

const Navbar = () => {
  return (
    <Wrapper>
      <img src={logo} alt="logo icon" className="logo" />
      <MobileMenu />
      <DesktopMenu />
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  z-index: 100;
`;

export default Navbar;
