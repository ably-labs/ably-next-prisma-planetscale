import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import CommentDetail from './CommentDetail';

export default function CommentsList({ comments }) {

  if(comments.length === 0) {
    return (
      <Grid
        sx={{ py: 2 }}
      >
        <Typography
          variant="body1"
          sx={{ textAlign: 'center' }}
        >
          No comments at the moment
        </Typography>
      </Grid>
    )
  }

  return (
    <Grid
      sx={{ py: 2 }}
    >
    {
      comments.map((comment, index) => {
       return(
         <CommentDetail key={`comment-${index}`} comment={comment} />
       )
     })
    }
    </Grid>
  )
}
