import styled from 'styled-components';

const ResourceCardContent = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 20rem;
  width: 100%;

  h3 {
    display: flex;
    flex-direction: column;

    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.563rem;
    letter-spacing: 0.005em;
    text-align: left;
    color: var(--black);

    margin: 0 0 0.75rem 0;

    img {
      height: 2.5rem;
      width: 2.5rem;

      margin-bottom: 1.5rem;
    }
  }

  p {
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    text-align: left;

    margin: 0;
  }

  @media (max-width: 950px) {
    padding: 0 1rem;
  }

  @media (max-width: 750px) {
    max-width: 44rem;

    h3 {
      display: flex;
      flex-direction: row;
      align-items: center;

      margin: 2rem 0 1rem 0;

      img {
        margin: 0 1rem 0 0rem;
      }
    }
  }
`;

export default ResourceCardContent;
