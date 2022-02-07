import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Content from '../components/Content';
import Comments from '../components/Comments';

const Home = ({ comments = [] }) => {
  return (
    <div>
      <CssBaseline />
        <Container maxWidth="lg">
        <Header/>
        <Grid container spacing={5} sx={{ mt: 3 }}>
          <Grid
            item
            xs={12}
            sx={{
              py: 3,
            }}
          >
            <Content />
            <Divider variant="middle" sx={{
              my: 3,
            }}/>
            <Comments initialComments={comments}/>
          </Grid>
        </Grid>
        <Footer/>
      </Container>
    </div>
  )
}

export default Home;
