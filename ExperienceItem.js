//U99350821
import React from 'react';
import './ExperienceItem.css';

const ExperienceItem = ({ title, company, duration }) => {
  return (
    <div className="experience-item">
      <h3>{title}</h3>
      <p>{company}</p>
      <p>{duration}</p>
    </div>
  );
};

export default ExperienceItem;
import React from 'react';
import ExperienceItem from './ExperienceItem';
import './Experience.css';

const Experience = () => {
  const experienceData = [
    { title: 'Intern', company: 'Harris', duration: '2021 - 2023' }
  ];

  return (
    <div className="experience">
      <h2>Experience</h2>
      {experienceData.map((exp, index) => (
        <ExperienceItem key={index} title={exp.title} company={exp.company} duration={exp.duration} />
      ))}
    </div>
  );
};

export default Experience;
