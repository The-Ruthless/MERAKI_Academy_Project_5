import React ,{useState,useEffect} from 'react';
import { Link,Redirect } from 'react-router-dom';

import "./profilePages.css"
import Button from '@material-ui/core/Button';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ClearIcon from '@material-ui/icons/Clear';
const axios = require("axios")


const MyOneAds = ({title,image,price,location,date}) => {

   



  return <div id="OM_my_one_ads">

        <img id="myads_image" src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" />

        <h2 id="myads_title">{title}</h2>

        <h2 id="myads_price">{price} JD</h2>

        <p id="myads_date">{date}</p>

        <h2 id="myads_location"><LocationOnIcon/>{location}</h2>

        <ClearIcon style={{ fontSize: 30 }} id="x_clear" />

        
		
        <hr id="hr_myAds"/>
	</div>
};

export default MyOneAds;
