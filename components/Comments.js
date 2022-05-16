import React, { useState } from "react";
import { useChannel } from "@ably-labs/react-hooks";

import Typography from "@mui/material/Typography";

import CommentsList from "./CommentsList";
import AddCommentSection from "./AddCommentSection";

export default function Comments({ initialComments = [] }) {
  const [comments, setComments] = useState(initialComments);

  const [channel] = useChannel("comment-channel", (message) => {
    // Add new incoming comment to the list of comments
    setComments((comments) => {
      return [...comments, message.data];
    });
  });

  const submitComment = async (username, comment) => {
    try {
      const body = { username, comment };
      await fetch(`${process.env.NEXT_PUBLIC_DEV_HOST}/api/comment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      channel.publish({
        name: "comment",
        data: {
          username,
          comment,
        },
      });
    } catch (error) {
      console.error("An error occurred when creating a comment: ", error);
    }
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Comments ({comments.length})
      </Typography>
      <CommentsList comments={comments} />
      <AddCommentSection submitComment={submitComment} />
    </React.Fragment>
  );
}
