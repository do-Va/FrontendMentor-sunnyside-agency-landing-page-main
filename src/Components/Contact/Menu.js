import styled from 'styled-components';

const Menu = () => {
  return (
    <Wrapper>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#services">Services</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  gap: 3em;

  li {
    a {
      color: var(--clr-gd-text);
      opacity: 0.7;
      transition: color 0.2s linear;

      &:hover {
        color: var(--clr-main-bg);
      }
    }
  }
`;

export default Menu;
