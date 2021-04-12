import styled from 'styled-components';

const DropdownButtonSolutionsContainer = styled.div`
  display: inline-block;
  position: relative;

  button {
    display: flex;
    align-items: center;

    background: none;
    color: white;
    border: none;
    transition: 300ms;

    margin: 0 1.25rem;

    img {
      margin-left: 0.75rem;
    }

    &:hover {
      color: var(--soft-black);
    }
  }

  .DropdownContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    min-width: 37rem;

    padding: 2.25rem 2.5rem;
    margin-top: 2.2rem;

    background: var(--background);
    border-radius: 0.375rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    z-index: 1;
    position: absolute;
    cursor: default;

    h1 {
      font-family: Inter;
      font-size: 1rem;
      font-style: normal;
      font-weight: 600;
      letter-spacing: 0.15em;
      text-align: left;

      color: var(--soft-purple);

      width: 100%;
      margin-bottom: 1.5rem;
    }

    .SolutionsContent {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2.5rem;

      .SolutionCard {
        display: flex;

        img {
          height: 2.5rem;
          margin: 0;
        }

        .CardContent {
          display: flex;
          flex-direction: column;

          margin-left: 1rem;

          h2 {
            font-family: Inter;
            font-size: 0.88rem;
            font-style: normal;
            font-weight: 600;
            line-height: 1.188rem;
            letter-spacing: 0.005em;
            text-align: left;

            color: var(--black);

            margin: 0;
          }

          p {
            font-family: Inter;
            font-size: 0.813rem;
            font-style: normal;
            font-weight: 400;
            line-height: 1.25rem;
            text-align: left;

            color: var(--soft-black);
            margin: 0;
          }
        }
      }
    }
  }
`;

export default DropdownButtonSolutionsContainer;
