import React, { useRef, useState } from "react";
import "./VideoCard.css";
import VideoHeader from "./VideoHeader";
import VideoFooter from "./VideoFooter";

const VideoCard = ({ url, channel, avatarSrc, song, likes, shares }) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="videoCard">
      <VideoHeader />
      <video
        src={url}
        className="videoCard__player"
        alt="Short Video App"
        loop
        ref={videoRef}
        onClick={handleVideoPress}
      />
      <VideoFooter
        channel={channel}
        likes={likes}
        shares={shares}
        avatarSrc={avatarSrc}
        song={song}
      />
    </div>
  );
};

export default VideoCard;
