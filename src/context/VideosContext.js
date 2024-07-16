import { createContext, useEffect, useState } from "react";

import videoDados from "../mocks/videos.json";

export const VideosContext = createContext();

export const VideosProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    JSON.stringify(videoDados);
    setVideos(videoDados.cards);
  }, [videos]);

  return (
    <VideosContext.Provider value={{ videos, setVideos }}>
      {children}
    </VideosContext.Provider>
  );
};
