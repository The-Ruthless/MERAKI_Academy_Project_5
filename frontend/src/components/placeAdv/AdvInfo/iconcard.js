import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './advinfo.css'





const Iconcard = ({icon,text,id,onClick}) => {








	return <div   onClick={onClick} id={id} className="subcate_icons" >
    <FontAwesomeIcon  id="submotors_icon" size="3x" icon={icon}  />
    <h3  className="subOM_cat_motors">{text}</h3>
    </div>


};

export default Iconcard;
