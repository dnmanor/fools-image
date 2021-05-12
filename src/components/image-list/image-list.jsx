import React, { useState } from "react";
import ImageCard from "../image-card/imagecard";

const ImageList = () => {
  const [pics, setPics] = useState([]);

  return (
    <React.Fragment>
      <div>
        {pics.map((pic) => {
          <ImageCard Image={pic.urls.full} />;
        })}
      </div>
    </React.Fragment>
  );
};
export default ImageList;
