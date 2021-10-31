import styled from 'styled-components';

import mobPhotography from './images/image-mobile-photography.jpg';
import deskPhotography from './images/image-desktop-photography.jpg';

import mobGraphicDesign from './images/image-mobile-graphic-design.jpg';
import deskGraphicDesign from './images/image-desktop-graphic-design.jpg';

const Service = ({ title, desc, imgs, clr }) => {
  let mob = imgs.mob === 'mobPhotography' ? mobPhotography : mobGraphicDesign;
  let desk =
    imgs.desk === 'deskPhotography' ? deskPhotography : deskGraphicDesign;

  return (
    <Wrapper color={clr}>
      <picture>
        <source media="(min-width: 540px)" srcSet={desk} />
        <img src={mob} alt="" />
      </picture>
      <figcaption>
        <div className="container">
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </figcaption>
    </Wrapper>
  );
};

const Wrapper = styled.figure`
  position: relative;
  width: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }

  figcaption {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    inset: 0;
    padding: 1em;
    text-align: center;
    color: var(${props => props.color});

    .container {
      transform: translateY(150px);
      max-width: 510px;

      h3 {
        font-family: 'Fraunces', serif;
        font-weight: 900;
        text-transform: capitalize;
        margin-bottom: 1em;
        font-size: 1.4em;
      }

      p {
        font-size: 0.85em;
        line-height: 1.5;
      }
    }
  }

  @media only screen and (min-width: 820px) {
    min-height: 396.5px;

    figcaption {
      .container {
        transform: translateY(100px);
      }
    }
  }

  @media only screen and (min-width: 1250px) {
    figcaption {
      .container {
        transform: translateY(150px);
      }
    }
  }
`;

export default Service;
