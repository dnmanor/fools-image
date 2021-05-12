import React, { useState } from "react";
import Menu from "../components/header/header";
import { Search } from "baseui/icon";
import { getAntonyms } from "../utils/words";
import { searchImages } from "../utils/api";
import { Input } from "baseui/input";

const Home = () => {
  const [keyword, setKeyword] = React.useState("");
  //   const [pics, setPics] = useState([]);

  const handleClick = async () => {
    
    const response = await getAntonyms(keyword);
    const searchTerm = response[0];
    console.log(searchTerm);
    await searchImages(searchTerm);
  };

  return (
    <div>
      <Menu />
      <React.Fragment>
        <Input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search a picture"
          endEnhancer={<Search size="18px" onClick={handleClick}/>}
          clearable
        />
      </React.Fragment>

      {/* <div className="cards-list">
        {pics.map((pic) => {
          <ImageCard Image={pic.urls.full} />;
        })}
      </div> */}
    </div>
  );
};

export default Home;
