import React from 'react';
import './Work.css';

import { workContent } from '../../assets/assets';

const Work = () => {
    console.log(workContent);
    return (
        <div className="work-container">
            <div className="work-heading">
                <h2>My Recent Work</h2>
                <p>Here are a few pieces of work I have done. Interested to see more? <a>Email Me</a></p>
            </div>
            <div className="work-cards">
                {workContent.map((workItem, index) => (
                    <div key={index} className="work-card">
                        <div className="image-container">
                            <img src={workItem.work_image} alt={workItem.work} />
                        </div>
                        <div className="work">
                        <p>{workItem.work_details}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Work;
