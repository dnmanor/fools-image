import React, { useState } from "react";
import Menu from "../components/header/header";
import { Search } from "baseui/icon";
import { getAntonyms } from "../utils/words";
import { searchImages } from "../utils/api";
import { Input } from "baseui/input";
import ImageCard from "../components/image-card/imagecard";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";

const Home = () => {
  const [keyword, setKeyword] = React.useState("");
  const [pics, setPics] = useState([]);

  const itemProps = {
    height: "scale1000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const handleClick = async () => {
    const response = await getAntonyms(keyword);
    const searchTerm = response[0];
    // console.log(searchTerm);
    const images = await searchImages(searchTerm);
    // console.log(images);
    setPics(images);
  };

  return (
    <div>
      <Menu />
      <React.Fragment>
        <Input
        overrides={{Root:{style:{
          width: '60%',
          margin: '2% 20%'
        }}}}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search a picture"
          endEnhancer={
            <Search
              size="18px"
              onClick={handleClick}
            />
          }
          clearable
        />
      </React.Fragment >
      <div style={{padding: '30px'}}>
      <FlexGrid
        flexGridColumnCount={[1, 2, 4]}
        flexGridColumnGap="scale800"
        flexGridRowGap="scale800"
        
      >
        {pics.map((pic) => (
          <FlexGridItem>
            <ImageCard Image={pic.urls.full} credit={pic.user.name} />;
          </FlexGridItem>
        ))}
      </FlexGrid>
      </div>
     
    </div>
  );
};

export default Home;
