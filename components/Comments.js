import React, { useState } from 'react';

import Typography from '@mui/material/Typography';

import CommentsList from './CommentsList';
import AddCommentSection from './AddCommentSection';

export default function Comments({initialComments = []}) {
  const [comments, setComments] = useState(initialComments);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Comments ({comments.length})
      </Typography>
      <CommentsList comments={comments} />
      <AddCommentSection />
    </React.Fragment>
  )
}
