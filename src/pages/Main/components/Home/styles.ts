import Button from 'components/Button';
import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 46.875rem;
  background: linear-gradient(121.95deg, #5f41d9 11.25%, #41b5d9 92.27%);

  .HeaderImage {
    margin-top: -25px;
    max-width: 90rem;
    width: 90%;
  }

  .Home {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 90rem;
    width: 100%;
    height: 100%;

    align-items: flex-end;

    .Content {
      width: 26rem;

      h1 {
        display: flex;
        align-items: center;

        font-family: Archivo, 'sans-serif';
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 17px;
        letter-spacing: 0.15em;
        text-align: left;
        color: white;

        margin-bottom: 2.5rem;

        img {
          height: 1.5rem;
          margin-right: 1rem;
        }
      }

      h2 {
        font-family: Inter, 'sans-serif';
        font-size: 2.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: 3rem;
        text-align: left;

        color: white;

        margin-bottom: 2.5rem;
      }

      p {
        font-family: Inter, 'sans-serif';
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.7rem;
        text-align: left;
        color: white;

        margin-bottom: 3rem;
      }

      .Buttons {
        display: flex;
        align-items: center;
        margin-bottom: 7.625rem;

        .StartNowButton {
          transition: 200ms;

          &:hover {
            color: white;
            background: none;
            border: 0.11rem solid white;
          }
        }

        .VideoButton {
          width: auto;
          height: auto;

          margin-left: 2.75rem;
          padding: 0.5rem 1rem;

          &:hover {
            filter: brightness(0.9);
            background: rgba(0, 0, 0, 0.03);
            backdrop-filter: blur(30px);
          }

          img {
            height: 1.5rem;
            margin-right: 0.75rem;
          }
        }
      }
    }

    .Image {
      display: flex;
      justify-content: flex-end;
      max-height: 37rem;
      height: 100%;

      img {
        height: 100%;
      }
    }
  }

  @media (max-width: 1250px) {
    .HeaderImage {
      margin: -10px;
    }

    .Home {
      padding: 0 4rem;
    }
  }

  @media (max-width: 930px) {
    height: auto;

    .HeaderImage {
      margin: 0;
    }

    .Home {
      display: flex;
      flex-direction: column;

      align-items: center;

      .Content {
        max-width: 40rem;
        width: 100%;
        margin: 4.5rem 0 4rem 0;

        .Buttons {
          margin: 0;
        }
      }

      .Image {
        max-width: 31.25rem;
        width: 100%;

        img {
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 430px) {
    .Home {
      .Content {
        h2 {
          font-size: 2.4rem;
        }
      }
    }
  }
`;

export const HomeButton = styled(Button)`
  width: 11.5rem;
  height: 3.5rem;

  font-family: Inter, 'sans-serif';
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  text-align: left;
`;
