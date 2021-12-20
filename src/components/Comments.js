import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const Comments = ({ comments }) => {
  const [clicked, setClicked] = useState(false);
  const [renderComments, setRenderComments] = useState([]);

  const hideComments = (event) => {
    setClicked(!clicked);
    clicked === true ? setRenderComments([]) : setRenderComments(comments);
  };

  useEffect(() => {
    setRenderComments(comments);
  }, [comments]);

  const commentsList = renderComments.map((comment) => {
    return (
      <div key={comment.id} className="comment">
        <h4>{comment.user}</h4>
        <p>{comment.comment}</p>
      </div>
    );
  });

  return (
    <div>
      <button onClick={hideComments}>Hide Comments</button>
      <h2>{comments.length} Comments</h2>
      {commentsList}
    </div>
  );
};

export default Comments;
