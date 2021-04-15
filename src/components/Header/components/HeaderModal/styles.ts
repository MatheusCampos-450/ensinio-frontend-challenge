import styled from 'styled-components';

const HeaderModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  position: fixed;
  z-index: 1;

  background: #ccccccdd;
  backdrop-filter: blur(6px);

  .ButtonMenuMobile {
    font-weight: bold;

    font-size: 1.7rem;
    color: white;
    border: 2px solid white;

    background: linear-gradient(
      90deg,
      #5f41d9 -880.48%,
      rgba(95, 65, 217, 0) 100%
    );

    width: 17rem;
    height: 3.5rem;

    margin-top: 0.5rem;

    transition: 200ms;

    &:hover {
      color: var(--black);
      background: var(--background);
    }
  }

  .Menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .Login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 1.7rem;

    margin: 4rem 0 0 0;

    button {
      font-weight: bold;

      font-size: 1.7rem;
      color: var(--soft-gray);
      border: 2px solid white;

      background: white;

      width: 17rem;
      height: 3.5rem;

      transition: 200ms;

      &:last-child {
        font-weight: bold;

        background: var(--water-green);
        border: none;
        color: var(--soft-black);

        margin-top: 0.5rem;

        &:hover {
          color: var(--black);
          background: white;
        }
      }

      &:hover {
        color: var(--black);
        background: linear-gradient(
          90deg,
          #5f41d9 -880.48%,
          rgba(95, 65, 217, 0) 100%
        );
      }
    }
  }

  @media (min-width: 980px) {
    display: none;
  }
`;

export default HeaderModalContainer;
