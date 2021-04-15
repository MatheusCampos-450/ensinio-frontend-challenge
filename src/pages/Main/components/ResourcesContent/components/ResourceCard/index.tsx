import React from 'react';
import ResourceCardContent from './styles';

interface IResourceCardProps {
  Id: number;
  Title: string;
  Description: string;
  Img: string;
}

const ResourceCard: React.FC<IResourceCardProps> = ({
  Id,
  Title,
  Description,
  Img,
}: IResourceCardProps) => {
  return (
    <ResourceCardContent key={Id}>
      <h3>
        <img src={Img} alt="" />
        {Title}
      </h3>
      <p>{Description}</p>
    </ResourceCardContent>
  );
};

export default ResourceCard;
