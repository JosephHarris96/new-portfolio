import React from 'react';
import './Skills.css';
import { assets, assetNames } from '../../assets/assets';

const Skills = () => {
  return (
    <div className="skills-container">
        <div className="skills-list">
            {assetNames.map((assetName, index) => (
                <img className="skills-images" key={index} src={assets[assetName]} alt={assetName} />
            ))}
        </div>
    </div>
  );
}

export default Skills;
