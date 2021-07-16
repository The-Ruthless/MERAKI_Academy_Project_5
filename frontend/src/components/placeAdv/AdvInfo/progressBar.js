import React, { useEffect } from "react";
import { useStorage } from "../../../hooks/useStorage";
import "./advinfo.css";

function ProgressBar({ file, setFile, setImages, images }) {
  const { url, progress } = useStorage(file);
  console.log(progress, url);

  useEffect(() => {
    if (url) {
      setFile(null);
      setImages([...images, url]);
    }
  }, [url]);

  return (
    <div style={{ width: progress - 5 + "%" }} className="progress-bar"></div>
  );
}

export default ProgressBar;
