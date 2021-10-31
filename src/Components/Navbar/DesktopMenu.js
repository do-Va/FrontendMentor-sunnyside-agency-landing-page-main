import React from 'react';
import styled from 'styled-components';

const DesktopMenu = () => {
  return (
    <Wrapper>
      <ul className="links">
        <li className="link">
          <a href="#about">about</a>
        </li>
        <li className="link">
          <a href="#services">services</a>
        </li>
        <li className="link">
          <a href="#projects">projects</a>
        </li>
        <li className="link">
          <a href="#contact" className="btn">
            contact
          </a>
        </li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: none;

  .links {
    display: flex;
    align-items: center;
    gap: 1em;

    .link {
      position: relative;

      a {
        color: var(--clr-main-bg);
        text-transform: capitalize;
      }

      .btn {
        display: block;
        padding: 1em 2em;
        background: var(--clr-main-bg);
        color: var(--clmain-f);
        border-radius: 50px;
        text-transform: uppercase;
        transition: all 0.2s linear;
      }

      .btn:hover,
      .btn:focus {
        background: var(--clr-main-bg-opc);
        color: var(--clr-main-bg);
      }

      &:not(:last-child)::after {
        content: '';
        width: 100%;
        height: 2px;
        position: absolute;
        left: 0;
        bottom: -10%;
        background: var(--clr-main-bg);
        opacity: 0;
        transform: scale(0);
        transition: all 0.4s linear;
      }

      &:hover::after {
        opacity: 1;
        transform: scale(1);
      }
    }
  }

  @media only screen and (min-width: 700px) {
    display: block;
  }
`;

export default DesktopMenu;
