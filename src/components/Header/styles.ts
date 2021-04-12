import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 5.625rem;

  background: rgba(0, 0, 0, 0.03);
  backdrop-filter: blur(8px);

  position: fixed;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 90rem;
    width: 100%;

    .menu {
      display: flex;
      align-items: center;

      a {
        margin: 0 1.25rem;
        color: white;
        transition: 200ms;

        &:hover {
          color: var(--soft-black);
        }
      }

      .login {
        display: flex;
        align-items: center;

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
  }
`;

export default HeaderContainer;
