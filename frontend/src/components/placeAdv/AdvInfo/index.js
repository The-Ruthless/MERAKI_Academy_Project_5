import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./advinfo.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import Iconcard from "./iconcard.js";
import ProgressBar from "./progressBar";
import ClearIcon from "@material-ui/icons/Clear";
import { useSelector } from "react-redux";
const axios = require("axios");
const jwt = require("jsonwebtoken");

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

const Category = ({ icons }) => {
  const state = useSelector((statetree) => {
    return {
      token: statetree.token.token,
      parsedToken: statetree.token.parsedToken,
    };
  });

  const [back, setBack] = useState(null);

  const [titleMes, settitleMes] = useState(null);
  const [phoneMes, setPhoneMes] = useState(null);
  const [priceMes, setpriceMes] = useState(null);
  const [locMes, setLocMes] = useState(null);

  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [phone_number, setPhone_number] = useState();
  const [description, setDescription] = useState();
  const [location, setLocation] = useState();
  const [sub_category_id, setSubcategoryid] = useState();

  /* Upload Image *********************************************************************/
  const [file, setFile] = useState();
  const [error, setError] = useState();

  const [images, setImages] = useState([]);
  const [fiveImages, setFiveImages] = useState(false);
  const [toMyadv, setToMyAdv] = useState(false);

  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    if (images.length > 4) {
      setFiveImages(true);
    } else {
      let selected = e.target.files[0];
      if (selected && types.includes(selected.type)) {
        setFile(selected);
        setError("");
      } else {
        setFile(null);
        setError("Please select an image file (png or jpeg)");
      }
    }
  };

  const clearImage = (e) => {
    const arr = [...images];
    arr.splice(e.target.id, 1);
    setImages([...arr]);
    setFiveImages(false);
  };

  const placeAd = () => {
    if (!title) {
      settitleMes(1);
    } else {
      settitleMes(null);
    }

    if (!price) {
      setpriceMes(1);
    } else {
      setpriceMes(null);
    }

    if (!phone_number) {
      setPhoneMes(1);
    } else {
      setPhoneMes(null);
    }

    if (!location) {
      setLocMes(1);
    } else {
      setLocMes(null);
    }

    if (title && price && phone_number && location) {
      axios
        .post("http://localhost:5000/advertisement/create", {
          title,
          description,
          image: images[0],
          price,
          phone_number,
          location,
          sub_category_id,
          user_id: jwt.decode(state.token).userId,
        })
        .then((response) => {
          setToMyAdv(true);
          images.forEach((elem) => {
            addImage(response.data.insertId, elem);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const addImage = (id, url) => {
    axios
      .post("http://localhost:5000/Image", {
        image_url: url,
        adv_id: id,
      })
      .then((result) => {})
      .catch((err) => {
        throw err;
      });
  };

  const backFun = () => {
    setBack(5);
  };

  const classes = useStyles();
  const classes1 = useStyles();

  return (
    <div id="OM_subc">
      <div id="OM_sub_head">
        <h2 id="OM_subc_h2">You’re almost there!</h2>
        <h3 id="OM_subc_h3">
          Include as much details and pictures as possible, and set the right
          price!
        </h3>
      </div>

      <div id="subcat_icons">
        {JSON.parse(localStorage.getItem("icons")).map((elem, i) => {
          return (
            <Iconcard
              onClick={(e) => {
                setSubcategoryid(e.target.id);
              }}
              id={elem.id}
              icon={elem.icon}
              text={elem.text}
            />
          );
        })}
      </div>

      {sub_category_id == 1 ? (
        <h2 style={{ color: "#303f9f" }}>{icons[0].text}</h2>
      ) : sub_category_id == 2 ? (
        <h2 style={{ color: "#303f9f" }}>{icons[1].text}</h2>
      ) : null}
      {sub_category_id == 3 ? (
        <h2 style={{ color: "#303f9f" }}>{icons[0].text}</h2>
      ) : sub_category_id == 4 ? (
        <h2 style={{ color: "#303f9f" }}>{icons[1].text}</h2>
      ) : sub_category_id == 5 ? (
        <h2 style={{ color: "#303f9f" }}>{icons[2].text}</h2>
      ) : null}
      {sub_category_id == 6 ? (
        <h2 style={{ color: "#303f9f" }}>{icons[0].text}</h2>
      ) : sub_category_id == 7 ? (
        <h2 style={{ color: "#303f9f" }}>{icons[1].text}</h2>
      ) : null}
      {sub_category_id == 8 ? (
        <h2 style={{ color: "#303f9f" }}>{icons[0].text}</h2>
      ) : sub_category_id == 9 ? (
        <h2 style={{ color: "#303f9f" }}>{icons[1].text}</h2>
      ) : sub_category_id == 10 ? (
        <h2 style={{ color: "#303f9f" }}>{icons[2].text}</h2>
      ) : null}
      {sub_category_id == 11 ? (
        <h2 style={{ color: "#303f9f" }}>{icons[0].text}</h2>
      ) : sub_category_id == 12 ? (
        <h2 style={{ color: "#303f9f" }}>{icons[1].text}</h2>
      ) : null}

      <div id="OM_subc_inputs">
        <div className="input_div">
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            className="om_input_place"
            type="text"
            placeholder="Title"
            id="outlined-basic"
            label="Title"
            variant="outlined"
          ></TextField>
          {titleMes ? (
            <h4 className="om_mes_place">Please Fill Out This Field</h4>
          ) : null}
        </div>

        <div id="upldiv" className={classes.root}>
          <div id="uploaded_img_div">
            {images
              ? images.map((elem, i) => {
                  return (
                    <div className="images_div">
                      <ClearIcon
                        onClick={clearImage}
                        id={i}
                        fontSize="200"
                        style={{ color: "red", size: "50px" }}
                        className="clear_image"
                      />
                      <img className="uploaded_image" src={elem} />
                    </div>
                  );
                })
              : null}
          </div>

          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            onChange={changeHandler}
            disabled={fiveImages}
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button
              id="om_upload_input"
              variant="contained"
              color="primary"
              component="span"
            >
              Add Picture &nbsp;
              <PhotoCamera />
            </Button>
          </label>

          {error && <div className="error">{error}</div>}
          {fiveImages && (
            <div className="error">Please Don't exceed 5 images</div>
          )}

          {file && <div>{file.name}</div>}
          {file && (
            <ProgressBar
              images={images}
              setImages={setImages}
              file={file}
              setFile={setFile}
            />
          )}
        </div>

        <div className="input_div">
          <TextField
            onChange={(e) => setPrice(e.target.value)}
            className="om_input_place"
            type="number"
            placeholder="Price"
            id="outlined-basic"
            label="Price"
            variant="outlined"
          ></TextField>
          {priceMes ? (
            <h4 className="om_mes_place">Please Fill Out This Field</h4>
          ) : null}
        </div>

        <div className="input_div">
          <TextField
            onChange={(e) => setPhone_number(e.target.value)}
            className="om_input_place"
            type="text"
            placeholder="PhoneNumber"
            id="outlined-basic"
            label="PhoneNumber"
            variant="outlined"
          ></TextField>
          {phoneMes ? (
            <h4 className="om_mes_place">Please Fill Out This Field</h4>
          ) : null}
        </div>

        <div>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            id="om_textarea"
            rows="4"
            cols="50"
            placeholder="Description here"
          ></textarea>
        </div>

        <div className="input_div1">
          <FormControl variant="outlined" className={classes1.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Location
            </InputLabel>
            <Select
              onChange={(e) => setLocation(e.target.value)}
              labelId="demo-simple-select-outlined-label"
              id="location_select"
              label="Location"
            >
              <MenuItem value="">
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
          {locMes ? <h4 id="loc_mes">Please Chose location</h4> : null}
        </div>

        <Grid id="grid_button" container spacing={2} justify="center">
          <Grid item>
            <Button
              onClick={backFun}
              size="large"
              variant="contained"
              color="primary"
            >
              Back
            </Button>
          </Grid>

          {back ? <Redirect to="/placeAdv" /> : null}

          <Grid item>
            <Button
              onClick={placeAd}
              size="large"
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </div>
      {toMyadv ? <Redirect to="/profile/myads" /> : null}
    </div>
  );
};

export default Category;
