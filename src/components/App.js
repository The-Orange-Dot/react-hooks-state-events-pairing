import video from "../data/video.js";
import VideoPlayer from "./VideoPlayer.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div>
      <VideoPlayer video={video} />
    </div>
  );
}

export default App;
