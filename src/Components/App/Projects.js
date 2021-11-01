import styled from 'styled-components';

import { projects } from '../../constants';
import Picture from '../Projects/Picture';

const Projects = () => {
  return (
    <Wrapper>
      {projects.map(project => {
        return <Picture key={project.id} {...project} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(151px, 1fr));
  overflow: hidden;

  @media only screen and (min-width: 450px) {
    grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  }

  @media only screen and (min-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  @media only screen and (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  @media only screen and (min-width: 820px) {
    grid-template-columns: repeat(auto-fit, minmax(205px, 1fr));
  }
`;

export default Projects;
