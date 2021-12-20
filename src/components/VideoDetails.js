import Comments from "./Comments";

const VideoDetails = ({
  title,
  views,
  created,
  upvotes,
  downvotes,
  comments,
  voteHandler,
}) => {
  return (
    <>
      <h1>{title}</h1>
      <div>
        <span>Views: {views} | </span>
        <span>Uploaded {created}</span>
      </div>
      <div>
        <button onClick={voteHandler} className="upvotes">
          {upvotes} ⬆
        </button>
        <button onClick={voteHandler} className="downvotes">
          {downvotes} ⬇
        </button>
        <Comments comments={comments} />
      </div>
    </>
  );
};

export default VideoDetails;
