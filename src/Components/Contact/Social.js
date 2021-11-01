import styled from 'styled-components';

import Twitter from './images/icon-twitter.svg';
import Pinterest from './images/icon-pinterest.svg';
import Instagram from './images/icon-instagram.svg';
import Facebook from './images/icon-facebook.svg';

const Social = () => {
  return (
    <Wrapper>
      <li>
        <a href="#">
          <img src={Facebook} alt="facebook icon" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={Instagram} alt="instagram icon" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={Twitter} alt="twitter icon" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={Pinterest} alt="pinterest icon" />
        </a>
      </li>
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  gap: 1.3em;
  margin-block: 1em;

  img {
    width: 100% !important;
    filter: invert(25%) sepia(64%) saturate(377%) hue-rotate(116deg)
      brightness(70%) contrast(86%) !important;
    transition: filter 0.2s linear;

    &:hover {
      filter: invert(98%) sepia(2%) saturate(0%) hue-rotate(178deg)
        brightness(180%) contrast(102%) !important;
    }
  }
`;

export default Social;
