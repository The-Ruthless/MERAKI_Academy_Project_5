import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import "./profile.css";
import {
  Menu,
  MenuItem,
  SubMenu,
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import "react-pro-sidebar/dist/css/styles.css";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import TwitterIcon from "@material-ui/icons/Twitter";
import logo from "./logo.gif";
import MyProfile from "./profilePages/index";
import EditProfile from "./profilePages/editprofile";
import MyAds from "./profilePages/myads";
import MyfavoriteAds from "./profilePages/myfavoriteads";

const Profile = () => {
  const [toMyAds, setToMyAds] = useState();

  return (
    <div id="parent">
      <div id="sidebarr">
        <ProSidebar style={{ backgroundColor: "red" }} id="poro">
          <SidebarHeader justify="center">
            <br />
            <br />
            <img
              justify="center"
              width="200"
              height="200"
              src={logo}
              alt="loading..."
            />
            <br />
            <br />
            <br />
          </SidebarHeader>
          <SidebarContent>
            <Menu className="omar" iconShape="square">
              <MenuItem icon={<AccountCircleRoundedIcon color="black" />}>
                <Link to="/profile"></Link>My Profile
              </MenuItem>
              <br />

              <MenuItem icon={<AddCircleRoundedIcon color="white" />}>
                <Link to="/profile/myads"></Link>My Ads
              </MenuItem>
              <br />

              <MenuItem icon={<FavoriteRoundedIcon color="black" />}>
                <Link to="/Profile/MyfavoriteAds"></Link>My Favorites Ads
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            Contact US :
            <br />
            <TwitterIcon color="black" /> THE WORTHLESS.COM
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </SidebarFooter>
        </ProSidebar>
      </div>

      <div id="div2">
        <Route exact path="/Profile" render={() => <MyProfile />} />
        <Route exact path="/Profile/edit" render={() => <EditProfile />} />
        <Route exact path="/Profile/MyAds" render={() => <MyAds />} />
        <Route
          exact
          path="/Profile/MyfavoriteAds"
          render={() => <MyfavoriteAds />}
        />
      </div>
    </div>
  );
};

export default Profile;
