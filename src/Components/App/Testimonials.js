import styled from 'styled-components';

import Testimonial from '../Testimonials/Testimonial';
import { testimonials } from '../../constants';

const Testimonials = () => {
  return (
    <Wrapper>
      <h2>Client testimonials</h2>
      <div className="container">
        {testimonials.map(testimonial => {
          return <Testimonial key={testimonial.id} {...testimonial} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h2 {
    margin-block: 4em;
    font-size: 0.85em;
    font-family: 'Fraunces', serif;
    text-transform: uppercase;
    color: var(--clr-tertiary-f);
    font-weight: 700;
    letter-spacing: 5px;

    @media only screen and (min-width: 820px) {
      font-size: 1.2em;
    }
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

export default Testimonials;
