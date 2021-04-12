import React, { useState } from 'react';

import EADIcon from 'assets/ead.svg';
import AppIcon from 'assets/icon-app.svg';
import GameIcon from 'assets/icon-gamification.svg';
import SocialIcon from 'assets/icon-social.svg';
import PolygonDropdown from 'assets/polygon_dropdown.svg';

import DropdownButtonSolutionsContainer from './styles';

const DropdownButtonSolutions = () => {
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
    <DropdownButtonSolutionsContainer>
      <button
        type="button"
        onMouseEnter={() => {
          setIsVisibleDropdown(true);
        }}
        onMouseLeave={HandleTimeout.startTimeout}
      >
        Soluções
        <img src={PolygonDropdown} alt="" />
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
          <h1>SOLUÇÕES PRINCIPAIS</h1>

          <div className="SolutionsContent">
            <div className="SolutionCard">
              <img src={EADIcon} alt="" />
              <div className="CardContent">
                <h2>Crie uma Escola Online</h2>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>

            <div className="SolutionCard">
              <img src={SocialIcon} alt="" />
              <div className="CardContent">
                <h2>Comunidade e rede social</h2>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>

            <div className="SolutionCard">
              <img src={GameIcon} alt="" />
              <div className="CardContent">
                <h2>Gamificação</h2>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>

            <div className="SolutionCard">
              <img src={AppIcon} alt="" />
              <div className="CardContent">
                <h2>Aplicativo mobile</h2>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>
        </button>
      )}
    </DropdownButtonSolutionsContainer>
  );
};

export default DropdownButtonSolutions;
