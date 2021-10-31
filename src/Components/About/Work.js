import styled from 'styled-components';

import MobStandOut from './images/image-mobile-stand-out.jpg';
import DeskStandOut from './images/image-desktop-stand-out.jpg';

import MobTransform from './images/image-mobile-transform.jpg';
import DeskTransform from './images/image-desktop-transform.jpg';

const Work = ({ title, desc, imgs, clr }) => {
  let mob = imgs.mob === 'MobTransform' ? MobTransform : MobStandOut;
  let desk = imgs.desk === 'DeskTransform' ? DeskTransform : DeskStandOut;

  return (
    <Wrapper color={clr}>
      <picture>
        <source media="(min-width: 700px)" srcSet={desk} sizes="egg" />
        <img src={mob} alt="egg" />
      </picture>
      <figcaption>
        <div className="container">
          <h3>{title}</h3>
          <p>{desc}</p>
          <a href="#">Learn more</a>
        </div>
      </figcaption>
    </Wrapper>
  );
};

const Wrapper = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;

  picture {
    img {
      width: 100%;
      height: 100%;
    }
  }

  figcaption {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 3em 1.5em;
    color: var(--clr-secondary-f);

    .container {
      & > *:not(:last-child) {
        margin-bottom: 1em;
      }

      p {
        line-height: 1.5;
      }

      h3,
      a {
        font-family: 'Fraunces', serif;
        color: var(--clr-main-f);
      }

      h3 {
        font-size: 1.8em;
        font-weight: 900;
      }

      a {
        position: relative;
        text-transform: uppercase;
        font-weight: 900;
        font-size: 0.9em;

        &::after {
          content: '';
          width: 115%;
          height: 10px;
          position: absolute;
          bottom: -3px;
          left: -7.5px;
          border-radius: 50px;
          background: var(${props => props.color});
          opacity: 0.2;
          z-index: -1;
        }
      }
    }
  }

  @media only screen and (min-width: 820px) {
    flex-direction: row;
    justify-content: center;

    &:nth-child(1) {
      picture {
        order: 1;
      }
    }

    picture {
      width: 50%;
    }

    figcaption {
      width: 50%;
      text-align: left;

      .container {
        h3 {
          font-size: 2.25em;
          max-width: 460px;
        }

        p {
          max-width: 446.5px;
        }
      }
    }
  }
`;

export default Work;
