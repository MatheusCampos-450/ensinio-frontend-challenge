import styled from 'styled-components';

const ResourcesContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  padding: 6.688rem;

  .Resources {
    display: flex;
    flex-direction: column;

    max-width: 90rem;
    width: 100%;

    .ResourcesHeader {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-bottom: 1rem;

      h2 {
        display: flex;
        align-items: center;

        font-family: Archivo, 'sans-serif';
        font-size: 1rem;
        font-style: normal;
        font-weight: 600;
        letter-spacing: 0.15em;
        text-align: left;
        color: var(--purple);

        margin: 0;

        img {
          margin-right: 1rem;
        }
      }

      p {
        font-family: Inter, 'sans-serif';
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem;
        color: var(--soft-black);

        margin: 0;
      }
    }

    h1 {
      font-family: Archivo, 'sans-serif';
      font-size: 2rem;
      font-style: normal;
      font-weight: 400;
      line-height: 2.5rem;
      letter-spacing: 0.005em;
      text-align: left;

      color: var(--black);
    }

    .ResourcesContent {
      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 4.188rem 0;
    }

    footer {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h4 {
        font-family: Inter, 'sans-serif';
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
        line-height: 2rem;
        letter-spacing: 0em;
        text-align: left;

        color: var(--soft-black);

        margin: 0;

        img {
          height: 2rem;

          margin-right: 2rem;
        }
      }

      a {
        font-family: Inter, 'sans-serif';
        font-size: 1rem;
        font-style: normal;
        font-weight: 600;
        line-height: 1.25rem;
        text-align: left;
        color: var(--soft-purple);

        margin: 0;

        img {
          margin-left: 2rem;
          height: 1.5rem;
        }
      }
    }
  }

  @media (max-width: 750px) {
    padding: 4rem;

    .Resources {
      h1 {
        font-size: 1.5rem;
        margin: 0;
      }

      .ResourcesHeader {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        p {
          margin-top: 0.6rem;
        }
      }

      .ResourcesContent {
        display: flex;
        flex-direction: column;

        padding-top: 1rem;
      }
    }
  }

  @media (max-width: 700px) {
    .Resources {
      footer {
        display: flex;
        flex-direction: column;

        a {
          margin-top: 1rem;
        }
      }
    }
  }
`;

export default ResourcesContentContainer;
