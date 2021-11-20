import React from 'react';

const Education = (props) => {
  const myEducation = (
    <div>
      {props.education.map((edu) =>
        <div className='item' key={edu.degree}>
          <h3 className="font-bold">{edu.degree} @ {edu.institution} <span>{edu.startDate} - {edu.endDate}</span></h3>
          <p>{edu.description}</p>
        </div>
      )}
    </div>
  );
  return (
    <div className='title'>
      <i className='fa fa-graduation-cap'></i>
      <h2 className="font-bold">{props.title}</h2><br/>
      {myEducation}
    </div>
  )
};

export default Education;
