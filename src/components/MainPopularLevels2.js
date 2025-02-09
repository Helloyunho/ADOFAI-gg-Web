import LevelInfo2 from './LevelInfo2';
import axios from "axios";
import React, { useEffect, useState } from "react";

const MainPopularLevels2 = () => {
  const [levelData, getLevelData] = useState([]);

  useEffect(() => {
    getAllLevelData();
  }, []);

  const getAllLevelData = () => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/v1/levels`, {
      params: {
        offset: 0,
        amount: 10,
				sort: 'RECENT_DESC'
      }
    })
    .then((response) => {
      getLevelData(response.data.results);
    })
    .catch(error => console.error(`Error: ${error}`));
  }
  return (
    <div>
      <div className="content-title">
        <h1 style={{ flexBasis: '80%', textAlign: 'left' }}>Recent Ranked Levels</h1>
        <h3 style={{ flexBasis: '20%', textAlign: 'right', paddingTop: '20px' }}><a href="levels">See All ▹</a></h3>
      </div>
      <div className="main-popular-levels">
        {
          levelData.map((i, index) => (
            <LevelInfo2 levelData={i} key={index} />
          ))
        }
      </div>
    </div>
  );
}

export default MainPopularLevels2;