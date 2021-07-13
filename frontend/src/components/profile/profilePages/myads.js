import React ,{useState,useEffect} from 'react';
import { Link,Redirect } from 'react-router-dom';
import "./profilePages.css"
import Button from '@material-ui/core/Button';
import MyOneAds from "./myoneads"
import { useSelector } from "react-redux";
const jwt = require("jsonwebtoken");
const axios = require("axios")



const MyAds = () => {

    const [userAds , setUserAds] = useState([])

    const state = useSelector((statetree) => {
		return {
		  token: statetree.token.token,
		  parsedToken: statetree.token.parsedToken,
		};
	});

    

    const getUserAds = ()=>{
        if(state.token){
            const userToken = jwt.decode(state.token)
    

        axios.get(`http://localhost:5000/advertisements/user/${userToken.userId}`).then((result)=>{
            setUserAds(result.data)
            

        }).catch( (err)=>{
            throw err
        })
      }
    }


    


    useEffect(()=>{
        getUserAds()
    },[])



	



	return <div id="OM_MyAds">


	   <h1 id="myads_header">My Advertisements</h1>
	   <hr id="hr_myads"/>

	   <div id="myads_div">


      {userAds?userAds.map((elem)=>{
          return <MyOneAds  title = {elem.title} price = {elem.price} location = {elem.location} image = {elem.image}  />
       }) : null }


       





	
          

	  


    


		   
	   </div>



		
		

		
		
	</div>
};

export default MyAds;