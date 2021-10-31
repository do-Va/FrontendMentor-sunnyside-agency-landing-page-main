import styled from 'styled-components';

import Navbar from '../Header/Navbar';
import Content from '../Header/Content';

import mobileBg from '../Header/images/image-header-mobile.jpg';
import desktopBg from '../Header/images/image-header-desktop.jpg';

const Header = () => {
  return (
    <Wrapper>
      <Navbar />
      <Content />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  background: url(${mobileBg}) bottom center/cover;

  @media only screen and (min-width: 571px) {
    background: url(${desktopBg}) bottom center/cover;
    min-height: 100%;
  }
`;

export default Header;
