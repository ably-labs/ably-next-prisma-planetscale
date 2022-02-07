import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function Content() {
  return (
    <React.Fragment>
      <Typography variant="h4" component="h1" gutterBottom>
        Sample blog post
      </Typography>
      <Typography variant="body1" gutterBottom>
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
        Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo.
        Nullam id dolor id nibh ultricies vehicula ut id elit.
      </Typography>
    </React.Fragment>
  )
}
