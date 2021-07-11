import React ,{useState} from 'react'
import { Route } from "react-router-dom";
import PlaceAdvCat from "./PlaceAdvCat"
import AddInfo from "./AdvInfo"


function Placeadv() {
    const [icons , setIcons] = useState()
    return (
        <div>
       <Route  exact path="/placeadv" render={() => <PlaceAdvCat setIcons={setIcons}  />} />
       <Route exact path="/placeadv/subcatrgory" render={() => <AddInfo icons={icons} />} />
       </div>  
    )
}

export default Placeadv
