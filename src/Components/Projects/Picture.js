import styled from 'styled-components';

import mobCone from './images/image-mobile-gallery-cone.jpg';
import deskCone from './images/image-desktop-gallery-cone.jpg';

import mobOrange from './images/image-mobile-gallery-orange.jpg';
import deskOrange from './images/image-desktop-gallery-orange.jpg';

import mobMilk from './images/image-mobile-gallery-milkbottles.jpg';
import deskMilk from './images/image-desktop-gallery-milkbottles.jpg';

import mobSugar from './images/image-mobile-gallery-sugar-cubes.jpg';
import deskSugar from './images/image-desktop-gallery-sugarcubes.jpg';

const Picture = ({ imgs, name }) => {
  const mobImgs = { mobCone, mobOrange, mobMilk, mobSugar };
  const deskImgs = { deskCone, deskOrange, deskMilk, deskSugar };

  return (
    <Wrapper>
      <source media="(min-width: 750px)" srcSet={deskImgs[imgs.desk]} />
      <img src={mobImgs[imgs.mob]} alt={name} />
    </Wrapper>
  );
};

const Wrapper = styled.picture`
  img {
    width: 100%;
    height: 100%;
  }
`;

export default Picture;
