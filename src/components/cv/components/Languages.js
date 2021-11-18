import React from 'react';

const languages = (props) => {
  const myLanguages = (
    <div>
      {props.languages.map((langua) =>
        <div className='item w33' key={langua.name}>
          <h3>{langua.name}</h3>
          <div className='skills'>
            <span style={{width: langua.percentage, height: '7px', top:-3.5, left:-4}}></span>
          </div>
        </div>
      )}
    </div>
  );
  return (
    <div className='title'>
      <i className='fa fa-globe'></i>
      <h2 className="font-bold">{props.title}</h2><br/>
      {myLanguages}
    </div>
  )
};

export default languages;
