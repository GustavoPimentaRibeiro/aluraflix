import { useContext } from "react";
import { VideosContext } from "../context/VideosContext";

export const useVideosContext = () => {
  const { videos, setVideos } = useContext(VideosContext);

  function editarVideo(id) {
    const videoAlterado = videos.filter((video) => video.id === id);

    console.log(videoAlterado);
  }

  function deletarVideo(id) {
    setVideos((videosAntigos) =>
      videosAntigos.filter((video) => video.id !== id)
    );
  }

  return {
    videos,
    editarVideo,
    deletarVideo,
  };
};
