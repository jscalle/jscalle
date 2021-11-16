import React, { useState } from 'react';
import { FaPlus, FaSearchPlus, FaRegPlusSquare } from "react-icons/fa";
const diplomaNfts = 'https://firebasestorage.googleapis.com/v0/b/cvpersonal-d2b5a.appspot.com/o/diplomaNfts.pdf?alt=media&token=e8342dfd-8472-4d6c-bf7e-59d4466bbfc3'
const diplomaDefi = 'https://firebasestorage.googleapis.com/v0/b/cvpersonal-d2b5a.appspot.com/o/diplomaDefi.pdf?alt=media&token=2124dcfd-d929-43c3-abaf-034ad6cec608'

const Certificate = (props) => {
  const myCertificates = (
    <div>
      {props.certificate.map((cert) =>
        <div className='item' key={cert.name}>
          <h3>{cert.name} @ {cert.institution} <span>{cert.date}</span></h3>
          <div style={{position:'relative', display:'inline-flex' }}>
            <p>{cert.description}</p>
            {cert.certificate==='diplomaNfts'?<a style={{width:'150px'}} href={diplomaNfts} target="_blank"><FaRegPlusSquare size={30} /></a>
            :<a style={{width:'150px'}} href={diplomaDefi} target="_blank"><FaRegPlusSquare size={30} /></a>}
            </div>
        </div>
      )}
    </div>
  );
  return (
    <div className='title'>
      <i className='fa fa-trophy'></i>
      <h2>{props.title}</h2>
      {myCertificates}
    </div>
  )
};

export default Certificate;
