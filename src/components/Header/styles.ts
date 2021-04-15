import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 5.625rem;

  background: rgba(0, 0, 0, 0.03);
  backdrop-filter: blur(8px);

  position: fixed;
  z-index: 2;

  .logoImage {
    height: 2.5rem;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 90rem;
    width: 100%;

    .MobileMenuButton {
      display: none;
      background: none;
      border: none;
    }

    .menu {
      display: flex;
      align-items: center;

      a {
        font-size: 1rem;

        color: white;
        transition: 200ms;

        &:hover {
          color: var(--soft-black);
        }
      }

      .ButtonsMenu {
        a {
          margin: 0 1.25rem;

          &:nth-child(5) {
            margin-right: 3rem;
          }
        }
      }
    }

    .login {
      display: flex;
      align-items: center;

      .Separator {
        margin-right: 3.156rem;
      }

      a {
        display: flex;
        align-items: center;

        margin: 0 1.25rem 0 0;

        img {
          margin: 0 0.656rem 0 0;
        }

        &:last-child {
          margin-right: 0;
        }
      }

      .StartNow {
        margin: 0 1.25rem;
        transition: 200ms;

        &:hover {
          background-color: white;
          color: var(--soft-black);
        }
      }
    }
  }

  @media (max-width: 1560px) {
    .header {
      padding: 0 3.3rem;
    }
  }

  @media (max-width: 1350px) {
    .header {
      padding: 0 4rem;
    }
  }

  @media (max-width: 980px) {
    .header {
      .MobileMenuButton {
        display: flex;
      }

      .menu {
        display: none;
      }
    }
  }
`;

export default HeaderContainer;
