import styled from 'styled-components';

import Work from '../About/Work';
import { about } from '../../constants';

const About = () => {
  return (
    <Wrapper id="about">
      {about.map(work => {
        return <Work key={work.id} {...work} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default About;
