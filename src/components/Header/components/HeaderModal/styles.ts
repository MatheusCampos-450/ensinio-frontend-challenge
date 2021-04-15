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
    font-weight: 500;

    font-size: 1.7rem;
    color: var(--soft-gray);
    border: 1px solid white;
    border-radius: 0;

    background: var(--background);

    width: 17rem;
    height: 3.5rem;

    transition: 200ms;

    &:first-child {
      border-radius: 1rem 1rem 0 0;
    }

    &:last-child {
      border-radius: 0 0 1rem 1rem;
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
      font-weight: 500;

      font-size: 1.7rem;
      color: var(--soft-gray);
      border: 1px solid white;
      border-radius: 0;

      background: var(--background);

      width: 17rem;
      height: 3.5rem;

      transition: 200ms;

      &:first-child {
        border-radius: 1rem 1rem 0 0;

        &:hover {
          color: var(--black);
          background: linear-gradient(
            90deg,
            #5f41d9 -880.48%,
            rgba(95, 65, 217, 0) 100%
          );
        }
      }

      &:last-child {
        border-radius: 0 0 1rem 1rem;
      }

      &:hover {
        color: var(--soft-black);
        background: white;

        border: none;
      }
    }
  }

  @media (min-width: 980px) {
    display: none;
  }
`;

export default HeaderModalContainer;
