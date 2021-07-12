import React,{useState} from 'react';
import { Link,Redirect } from 'react-router-dom';

import "./profilePages.css"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
const axios = require("axios")


const EditProfile = () => {
      
    //save the user information in local storage

    const userInform = JSON.parse(localStorage.getItem("userInform"))

    const[full_name,setFull_name] = useState(userInform.full_name)
    const[age,setAge] = useState(userInform.age)
    const[gender,setGender] = useState(userInform.gender)
    const[nationality,setNationality] = useState(userInform.nationality)
    const[phone_number,setPhone_number] = useState(userInform.phone_number)
    const[current_location,setCurrent_location] = useState(userInform.current_location)

    const[toProfile,setToProfile]=useState()


    const updateUserInform = ()=>{
     axios.put("http://localhost:5000/register/1",{full_name,age,gender,nationality,phone_number,current_location}).then((result)=>{
		}).catch((err)=>{
			throw err
		})

        setToProfile("1")
    }







	return <div id="OM_editprofile">
       
	   <h1 id="edit_pro_header">Edit Profile</h1>
	   <hr id="hr_edit_profile"/>

	   <div id="edit_user_inform">

	  <div id="edit_inform">

        
		<TextField onChange={(e)=>setFull_name(e.target.value)}  defaultValue={userInform.full_name} className="om_input_edit_profile" type="text"  placeholder="Full Name" id="obada" label="Full Name" variant="outlined"></TextField>
	     
		

		
		<TextField onChange={(e) => setAge(e.target.value)}  defaultValue={userInform.age} className="om_input_edit_profile" type="number"  placeholder="Age" id="outlined-basic" label="Age" variant="outlined"></TextField>
			
	
		
		<TextField onChange={(e) => setNationality(e.target.value)} defaultValue={userInform.nationality} className="om_input_edit_profile" type="text"  placeholder="Nationality" id="outlined-basic" label="Nationality" variant="outlined"></TextField>
			
		

		
		<TextField onChange={(e) => setPhone_number(e.target.value)} defaultValue={userInform.phone_number}  className="om_input_edit_profile" type="text"  placeholder="Phone Number" id="outlined-basic" label="Phone Number" variant="outlined"></TextField>
		
	    <FormControl variant="outlined" >
          <InputLabel id="demo-simple-select-outlined-label">{userInform.gender}</InputLabel>
          <Select onChange={(e) => setGender(e.target.value)}
          labelId="demo-simple-select-outlined-label"
          id="location_select"
          label="Gender"
          >
          <MenuItem value={userInform.gender}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Male"}>Male</MenuItem>
          <MenuItem value={"Female"}>Female</MenuItem>
           </Select>
        </FormControl>


		
		<FormControl variant="outlined" >
          <InputLabel id="demo-simple-select-outlined-label">{userInform.current_location}</InputLabel>
          <Select onChange={(e) => setCurrent_location(e.target.value)}
		 
          labelId="demo-simple-select-outlined-label"
          id="location_select"
          label="Location"
          >
          <MenuItem value={userInform.current_location}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Amman"}>Amman</MenuItem>
          <MenuItem value={"Zarqa"}>Zarqa</MenuItem>
          <MenuItem value={"Irbid"}>Irbid</MenuItem>
		  <MenuItem value={"Aqaba"}>Aqaba</MenuItem>
		  <MenuItem value={"Jerash"}>Jerash</MenuItem>
		  <MenuItem value={"Ma'an"}>Ma'an</MenuItem>
		  <MenuItem value={"Tafila"}>Tafila</MenuItem>
		  <MenuItem value={"Karak"}>Karak</MenuItem>
		  <MenuItem value={"Mafraq"}>Mafraq</MenuItem>
		  <MenuItem value={"Madaba"}>Madaba</MenuItem>
		  <MenuItem value={"Ajloun"}>Ajloun</MenuItem>
           </Select>
        </FormControl>
        

		<Button onClick={updateUserInform} id="edit_profile_but" variant="contained" color="black" component="span">
            Update
		
        </Button>

	  </div>
	   </div>

       {toProfile?<Redirect to="/Profile" /> : null}



		
		

		
		
	</div>
};

export default EditProfile;
