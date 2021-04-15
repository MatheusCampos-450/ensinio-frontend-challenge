import React, { useEffect, useState } from 'react';
import api from 'services/api';

import ArrowIcon from 'assets/arrow-icon.svg';
import LineIcon from 'assets/line.svg';
import RocketIcon from 'assets/rocket-icon.svg';

import ResourceCard from './components/ResourceCard';

import ResourcesContentContainer from './styles';

interface IResourceInformationData {
  id: number;
  title: string;
  description: string;
  img_url: string;
}

const ResourcesContent = () => {
  const [resourceInformation, setResourceInformation] = useState([]);

  useEffect(() => {
    api.get('items').then(response => {
      return setResourceInformation(response.data);
    });
  }, []);

  return (
    <ResourcesContentContainer>
      <div className="Resources">
        <header className="ResourcesHeader">
          <h2>
            <img src={LineIcon} alt="" />
            PENSAMOS EM CADA DETALHE
          </h2>
          <p>Conheça alguns dos nossos recursos ⚡</p>
        </header>
        <h1>Queremos que o aluno se sinta confortável enquanto aprende</h1>
        <div className="ResourcesContent">
          {resourceInformation.map((item: IResourceInformationData) => {
            return (
              <ResourceCard
                Id={item.id}
                Title={item.title}
                Description={item.description}
                Img={item.img_url}
                key={item.id}
              />
            );
          })}
        </div>
        <footer>
          <h4>
            <img src={RocketIcon} alt="" />
            Veja todos os outros recursos disponíveis para te ajudar
          </h4>
          <a href="/">
            Ver mais
            <img src={ArrowIcon} alt="" />
          </a>
        </footer>
      </div>
    </ResourcesContentContainer>
  );
};

export default ResourcesContent;
