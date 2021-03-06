import styled from 'styled-components';

import Content from '../Header/Content';

import mobileBg from '../Header/images/image-header-mobile.jpg';
import desktopBg from '../Header/images/image-header-desktop.jpg';

const Header = () => {
  return (
    <Wrapper>
      <Content />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  height: 80%;
  overflow: hidden;
  background: url(${mobileBg}) bottom center/cover;

  @media only screen and (min-width: 624px) {
    background: url(${desktopBg}) bottom center/cover;

    min-height: 100%;
  }
`;

export default Header;
