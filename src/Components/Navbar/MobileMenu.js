import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import menu from './images/icon-hamburger.svg';

const MobileMenu = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const resize = () => {
    if (window.innerWidth >= 700) {
      setIsClicked(false);
    }
  };

  window.addEventListener('resize', resize);

  return (
    <Wrapper>
      <ul className={isClicked ? 'links show' : 'links'}>
        <li className="link" onClick={handleClick}>
          <a href="#about">about</a>
        </li>
        <li className="link" onClick={handleClick}>
          <a href="#services">services</a>
        </li>
        <li className="link" onClick={handleClick}>
          <a href="#projects">projects</a>
        </li>
        <li className="link" onClick={handleClick}>
          <a href="#contact" className="btn">
            contact
          </a>
        </li>
      </ul>
      <img src={menu} alt="menu icon" className="menu" onClick={handleClick} />
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  .links {
    position: absolute;
    top: 150%;
    left: 5%;
    width: 90%;
    display: none;
    flex-direction: column;
    align-items: center;
    background: var(--clr-main-bg);
    padding-block: 1em;

    &::after {
      content: '';
      position: absolute;
      border-top: 25px solid transparent;
      border-right: 25px solid var(--clr-main-bg);
      border-bottom: 0 solid transparent;
      right: 0;
      top: -7.5%;
    }

    .link {
      width: 100%;
      display: flex;
      justify-content: center;
      padding-block: 1em;
      transition: all 0.2s linear;

      a {
        color: var(--clr-primary-f);
        text-transform: capitalize;
        font-size: 1.2em;
        transition: all 0.2s linear;
      }

      .btn {
        display: block;
        padding: 1em 2em;
        background: var(--clr-yellow-line);
        color: var(--clmain-f);
        border-radius: 50px;
        text-transform: uppercase;
      }

      &:hover:not(:last-child) {
        background: var(--clr-yellow-line);

        a {
          color: #fff;
        }
      }
    }
  }

  .show {
    display: flex;
  }

  .menu {
    cursor: pointer;
    transition: transform 0.2s linear;
  }

  .menu:hover {
    transform: rotate(180deg);
  }

  @media only screen and (min-width: 700px) {
    display: none;
  }
`;

export default MobileMenu;
