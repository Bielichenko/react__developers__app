/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { IStage } from '../../../../types/IStage';
import './StageCardM.scss';

interface props {
  stage: IStage
}

export const StageCardM: React.FC<props> = ({ stage }) => {
  return (
    <div className="stageCardM" key={stage.id}>
      <div className="stageCardM__textContainer">
        <p className="stageCardM__textContainer__title">{stage.title}</p>
        <p className="stageCardM__textContainer__description">{stage.description}</p>
      </div>
      {stage.images.map((image, i) => {
        return (
          <img
            className={`stageCardM__imageGroupM imageGroupM imageGroupM--${stage.imagesGroup} imageGroupM--${stage.imagesGroup}--${i}`}
            src={image}
            alt=""
            key={image}
          />
        );
      })}
    </div>
  );
};
