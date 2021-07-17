import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import PlaceAdvCat from "./PlaceAdvCat";
import AddInfo from "./AdvInfo";

function Placeadv({ setRedirect }) {
  const [icons, setIcons] = useState();
  useEffect(() => {
    setRedirect("");
  }, []);
  return (
    <div>
      <Route
        exact
        path="/placeadv"
        render={() => <PlaceAdvCat setIcons={setIcons} />}
      />
      <Route
        exact
        path="/placeadv/subcatrgory"
        render={() => <AddInfo icons={icons} setIcons={setIcons} />}
      />
    </div>
  );
}

export default Placeadv;
