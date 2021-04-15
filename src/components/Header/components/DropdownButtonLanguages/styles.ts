import styled from 'styled-components';

interface IDropdownButtonLanguagesProps {
  languageSelected: string;
}

const DropdownButtonLanguagesContainer = styled.div<IDropdownButtonLanguagesProps>`
  display: inline-block;
  position: relative;

  button {
    display: flex;
    align-items: center;

    font-size: 1rem;

    background: none;
    color: white;
    border: none;
    transition: 300ms;

    width: 2.375rem;

    margin-left: 1.25rem;

    .PolygonDropdown {
      margin: 0 0 0 0.75rem;
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

    width: 8.625rem;
    margin: 2.2rem 0 0 -2rem;

    background: var(--background);
    border-radius: 0.375rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    z-index: 1;
    position: absolute;
    cursor: default;

    .LanguageButton {
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 1rem;

      background: linear-gradient(
        90deg,
        #5f41d9 -880.48%,
        rgba(95, 65, 217, 0) 100%
      );

      height: 3rem;
      width: 100%;

      color: var(--soft-gray);
      font-family: Inter;
      font-size: 1rem;
      font-style: normal;
      font-weight: 500;
      text-align: left;

      margin: 0;

      &:first-child {
        border-radius: 0.375rem 0.375rem 0 0;
      }

      &:last-child {
        border-radius: 0 0 0.375rem 0.375rem;
      }

      .Button {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        width: 6.125rem;

        .Language {
          .FlagImage {
            margin: 0 0.625rem 0 0;
          }
        }

        .CheckedImage {
          margin: 0;
        }
      }
    }

    #PT {
      background: ${Props =>
        Props.languageSelected !== 'PT' &&
        `
        var(--background);
      `};

      .Button {
        justify-content: ${Props =>
          Props.languageSelected === 'PT' &&
          `
          space-between;
        `};
      }
    }

    #EN {
      background: ${Props =>
        Props.languageSelected !== 'EN' &&
        `
        var(--background);
      `};

      .Button {
        justify-content: ${Props =>
          Props.languageSelected === 'EN' &&
          `
          space-between;
        `};
      }
    }

    #ES {
      background: ${Props =>
        Props.languageSelected !== 'ES' &&
        `
        var(--background);
      `};

      .Button {
        justify-content: ${Props =>
          Props.languageSelected === 'ES' &&
          `
          space-between;
        `};
      }
    }
  }
`;

export default DropdownButtonLanguagesContainer;
