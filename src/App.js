import { useEffect, useState } from "react";
import "./App.css";
import VideoCard from "./components/VideoCard";
import db from "./firebase";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) => {
      setVideos(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          item: doc.data(),
        }))
      );
    });
  }, [videos]);

  return (
    <div className="app">
      <div className="app__top">
        <img src="logo192.png" alt="App Logo" className="app__logo" />
        <h1>Stories App</h1>
      </div>
      <div className="app__videos">
        {videos.map((video) => (
          <VideoCard
            url={video.item.url}
            channel={video.item.channel}
            avatarSrc={video.item.avatarSrc}
            song={video.item.song}
            likes={video.item.likes}
            shares={video.item.shares}
            key={video.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
