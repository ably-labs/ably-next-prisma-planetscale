import React from 'react';

import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function CommentDetail({comment}) {
  return (
    <React.Fragment>
      <Grid
        container
        spacing={2}
        direction="column"
        sx={{ py: 2 }}>
        <Grid item>{comment.comment}
        </Grid>
        <Grid item>
          <Typography
            variant="body2"
            component="span"
          >
          By&nbsp;
          </Typography>
          <Typography
            variant="body2"
            component="span"
            sx={{ fontWeight: 600}}
          >
          {comment.username}
          </Typography>
        </Grid>
      </Grid>
      <Divider />
    </React.Fragment>
  )
}
