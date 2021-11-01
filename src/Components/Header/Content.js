import styled from 'styled-components';

import arrow from './images/icon-arrow-down.svg';

const Content = () => {
  return (
    <Wrapper>
      <h2>we are creatives</h2>
      <img src={arrow} alt="arrow icon" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-inline: 1em;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-family: 'Fraunces', serif;
  font-size: 1.7em;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 5px;
  color: var(--clr-main-bg);

  h2 {
    margin-top: 1.5em;
    margin-bottom: 1em;
  }
`;

export default Content;
