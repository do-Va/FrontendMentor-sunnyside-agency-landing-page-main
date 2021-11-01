import styled from 'styled-components';

import Menu from '../Contact/Menu';
import Social from '../Contact/Social';

import Logo from '../Contact/images/logo.svg';

const Contact = () => {
  return (
    <Wrapper id="contact">
      <img src={Logo} alt="sunnyside logo" />
      <Menu />
      <Social />
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-footer-bg);

  img {
    margin: 3em 0 2em;
    width: 160px;
    filter: invert(25%) sepia(64%) saturate(377%) hue-rotate(116deg)
      brightness(40%) contrast(86%);
  }
`;

export default Contact;
