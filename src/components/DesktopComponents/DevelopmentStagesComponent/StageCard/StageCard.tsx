import React from 'react';
import { IStage } from '../../../../types/IStage';

import './StageCard.scss';

interface props {
  stage: IStage
  stageCardWidth: string;
  stageCardHeight: string;
}

export const StageCard: React.FC<props> = ({ stage, stageCardWidth, stageCardHeight }) => {
  return (
    <div
      className="stageCard"
      key={stage.id}
      style={{
        width: stageCardWidth,
        height: stageCardHeight,
        backgroundSize: `${stageCardWidth} ${stageCardHeight}`,
      }}
    >
      <div className="stageCard__textContainer">
        <p className="stageCard__textContainer__title">{stage.title}</p>
        <p className="stageCard__textContainer__description">{stage.description}</p>
      </div>
      {stage.images.map((image, i) => {
        return (
          <img
            className={`stageCard__imageGroup imageGroup imageGroup--${stage.imagesGroup} imageGroup--${stage.imagesGroup}--${i}`}
            src={image}
            alt=""
            key={image}
          />
        );
      })}
    </div>
  );
};
