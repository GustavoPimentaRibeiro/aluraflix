import { useContext } from "react";
import { VideosContext } from "../context/VideosContext";

export const useVideosContext = () => {
  const { videos } = useContext(VideosContext);

  function editarVideo(id) {
    const video = videos.filter((video) => video.id === id);

    console.log(video);
  }

  function deletarVideo(id) {
    const novosVideos = videos.filter((video) => video.id !== id);

    console.log(novosVideos);
  }

  return {
    videos,
    editarVideo,
    deletarVideo,
  };
};
