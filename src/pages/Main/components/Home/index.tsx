import React from 'react';

import Devices from 'assets/devices.svg';
import MediaIcons from 'assets/media_icons.svg';
import Men from 'assets/men.png';
import PlayIcon from 'assets/play_icon.svg';

import { HomeContainer, HomeButton } from './styles';

const Home = () => {
  return (
    <HomeContainer>
      <img className="HeaderImage" src={MediaIcons} alt="" />
      <div className="Home">
        <div className="content">
          <h1>
            <img src={Devices} alt="" />
            PLATAFORMA ALL IN ONE
          </h1>

          <h2> Sua escola online poderosa e lucrativa</h2>

          <p>
            Tenha sua própria escola online 100% white label com rede social,
            gamificação, clube de assinaturas, ecommerce e sistema EAD completo.
          </p>
          <div className="Buttons">
            <HomeButton
              className="StartNowButton"
              color="var(--water-green)"
              colorText="var(--black)"
              border="none"
            >
              Começar agora
            </HomeButton>

            <HomeButton
              color="none"
              colorText="white"
              border="none"
              className="VideoButton"
            >
              <img src={PlayIcon} alt="" />
              Ver vídeo
            </HomeButton>
          </div>
        </div>
        <div className="image">
          <img src={Men} alt="" />
        </div>
      </div>
    </HomeContainer>
  );
};

export default Home;
