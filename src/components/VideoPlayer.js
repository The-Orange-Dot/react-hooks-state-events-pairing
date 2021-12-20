import { useEffect, useState } from "react";
import VideoDetails from "./VideoDetails";

const VideoPlayer = ({ video }) => {
  const [videoLoaded, setVideoLoaded] = useState({
    id: "",
    title: "",
    embedUrl: "",
    views: "",
    createdAt: "",
  });

  //Loads data once page is loaded
  useEffect(() => {
    return setVideoLoaded({
      id: 1,
      title: "React Today and Tomorrow and 90% Cleaner React With Hooks",
      embedUrl: "https://www.youtube.com/embed/dpw9EHDh2bM",
      views: 730707,
      createdAt: "Oct 26, 2018",
    });
  }, []);

  //Functions and handlers go here!!

  const hideComments = (event) => {
    console.log(event);
  };

  //
  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);
  const voteHandler = (event) => {
    event.target.className === "upvotes"
      ? setUpvotes(upvotes + 1)
      : setDownvotes(downvotes + 1);
  };

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={videoLoaded.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <VideoDetails
        title={videoLoaded.title}
        views={videoLoaded.views}
        created={videoLoaded.createdAt}
        upvotes={upvotes}
        downvotes={downvotes}
        comments={video.comments}
        hideComments={hideComments}
        voteHandler={voteHandler}
      />
    </div>
  );
};

export default VideoPlayer;
