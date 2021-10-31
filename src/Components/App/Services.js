import styled from 'styled-components';

import Service from '../Services/Service';
import { services } from '../../constants';

const Services = () => {
  return (
    <Wrapper id="services">
      {services.map(service => {
        return <Service key={service.id} {...service} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 820px) {
    flex-direction: row;
  }
`;

export default Services;
