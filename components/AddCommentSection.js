import React, { useState } from "react";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

export default function AddCommentSection({ submitComment }) {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  const addComment = () => {
    //Publish message
    submitComment(username, comment);
    //Reset form
    setUsername("");
    setComment("");
  };

  return (
    <FormControl>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            id="username"
            name="username"
            label="Username"
            variant="outlined"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="comment"
            name="comment"
            label="Comment"
            variant="outlined"
            multiline
            rows={4}
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={addComment}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </FormControl>
  );
}
