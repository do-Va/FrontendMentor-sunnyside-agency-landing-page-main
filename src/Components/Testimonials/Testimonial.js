import styled from 'styled-components';

import imgThomas from './images/image-thomas.jpg';
import imgJennie from './images/image-jennie.jpg';
import imgEmily from './images/image-emily.jpg';

const Testimonial = ({ name, title, comment, pic }) => {
  let picture =
    pic === 'imgThomas'
      ? imgThomas
      : pic === 'imgJennie'
      ? imgJennie
      : imgEmily;

  return (
    <Wrapper>
      <img src={picture} alt={name} />
      <p className="comment">{comment}</p>
      <p className="name">{name}</p>
      <p className="title">{title}</p>
    </Wrapper>
  );
};

const Wrapper = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-inline: 1.3em;
  margin-bottom: 4em;
  max-width: 395px;

  img,
  .comment {
    margin-bottom: 2em;
  }

  img {
    width: 75px;
    height: 75px;
    border-radius: 50%;
  }

  .comment {
    color: var(--clr-primary-f);
    line-height: 1.5;
  }

  .name {
    font-family: 'Fraunces', serif;
    font-weight: 900;
    color: var(--clr-main-f);
    margin-bottom: 1em;
  }

  .title {
    color: var(--clr-tertiary-f);
    font-size: 0.8em;
  }
`;

export default Testimonial;
