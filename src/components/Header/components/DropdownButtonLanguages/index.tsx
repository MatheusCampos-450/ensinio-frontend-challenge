import React, { useState } from 'react';

import BrIcon from 'assets/br-icon.svg';
import EsIcon from 'assets/es-icon.svg';
import EuaIcon from 'assets/eua-icon.svg';
import CheckedIcon from 'assets/checked-icon.svg';
import PolygonDropdown from 'assets/polygon_dropdown.svg';

import DropdownButtonLanguagesContainer from './styles';

export const DropdownButtonLanguages = () => {
  const [languageSelected, setLanguageSelected] = useState('PT');
  const [isVisibleDropdown, setIsVisibleDropdown] = useState(false);

  const handleVisibleDropdown = () => {
    // eslint-disable-next-line no-undef
    let dropdown: NodeJS.Timeout;

    const StartTimeout = () => {
      dropdown = setTimeout(() => {
        setIsVisibleDropdown(false);
      }, 3000);
    };

    const StopTimeout = () => {
      clearTimeout(dropdown);
    };

    return {
      startTimeout: StartTimeout,
      stopTimeout: StopTimeout,
    };
  };

  const HandleTimeout = handleVisibleDropdown();

  return (
    <DropdownButtonLanguagesContainer languageSelected={languageSelected}>
      <button
        type="button"
        onMouseEnter={() => {
          setIsVisibleDropdown(true);
        }}
        onMouseLeave={HandleTimeout.startTimeout}
      >
        {languageSelected}
        <img className="PolygonDropdown" src={PolygonDropdown} alt="" />
      </button>

      {isVisibleDropdown && (
        <button
          className="DropdownContent"
          type="button"
          onMouseEnter={() => {
            HandleTimeout.stopTimeout();
            setIsVisibleDropdown(true);
          }}
          onMouseLeave={() => {
            setIsVisibleDropdown(false);
          }}
        >
          <button
            className="LanguageButton"
            id="PT"
            type="button"
            onClick={() => {
              setLanguageSelected('PT');
            }}
          >
            <div className="Button">
              <div className="Language">
                <img className="FlagImage" src={BrIcon} alt="" />
                PT
              </div>
              {languageSelected === 'PT' && (
                <img className="CheckedImage" src={CheckedIcon} alt="" />
              )}
            </div>
          </button>

          <button
            className="LanguageButton"
            id="EN"
            type="button"
            onClick={() => {
              setLanguageSelected('EN');
            }}
          >
            <div className="Button">
              <div className="Language">
                <img className="FlagImage" src={EuaIcon} alt="" />
                EN
              </div>
              {languageSelected === 'EN' && (
                <img className="CheckedImage" src={CheckedIcon} alt="" />
              )}
            </div>
          </button>

          <button
            className="LanguageButton"
            id="ES"
            type="button"
            onClick={() => {
              setLanguageSelected('ES');
            }}
          >
            <div className="Button">
              <div className="Language">
                <img className="FlagImage" src={EsIcon} alt="" />
                ES
              </div>
              {languageSelected === 'ES' && (
                <img className="CheckedImage" src={CheckedIcon} alt="" />
              )}
            </div>
          </button>
        </button>
      )}
    </DropdownButtonLanguagesContainer>
  );
};
