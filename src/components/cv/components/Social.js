import React from 'react';
import { AiFillInstagram, AiFillGithub } from 'react-icons/ai';
import { ImLinkedin } from 'react-icons/im';

const Social = (props) => {
  const socialNetworks = (
    <ul>
      {props.social.map((socialNetwork) =>
        <li key={socialNetwork.name}>
          <a href={socialNetwork.url} target='_blank' rel="noopener noreferrer">
            {socialNetwork.name!='instagram' ? socialNetwork.name=='github' ? <AiFillGithub size={30} /> : <ImLinkedin size={28} />: <AiFillInstagram size={30} />}
          </a>
        </li>
      )}
    </ul>
  );
  return (
    <div className="social">
      {socialNetworks}
    </div>
  )
};

export default Social;
