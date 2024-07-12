import {
  Container,
  Typography,
  Grid,
  ThemeProvider,
  createTheme,
  Box,
} from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Arial, sans-serif',
    h2: {
      color: '#000000',
    },
  },
});

const styles = {
  root: {
    backgroundColor: '#ffffff',
    paddingBottom: '2rem',
  },
  section: {
    padding: '2rem 0',
    borderBottom: '1px solid #e0e0e0',
  },
  sectionTitle: {
    marginBottom: '1rem',
    color: '#000000',
  },
  image: {
    width: '100%',
    maxWidth: '400px',
    borderRadius: '8px',
  },
};

const About = () => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{...styles.root, marginTop: '3rem'}}>
        <Container maxWidth="lg" style={styles.section}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box textAlign="center" marginBottom={{xs: '2rem', md: 0}}>
                <img
                  src="https://st2.depositphotos.com/1760420/6591/i/450/depositphotos_65912143-stock-photo-man-writing-the-words-about.jpg"
                  alt="Our Vision"
                  style={styles.image}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                component="h2"
                style={styles.sectionTitle}
              >
                About Us
              </Typography>
              <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum pellentesque augue quam, vel fringilla metus
                fermentum at.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                component="h2"
                style={styles.sectionTitle}
              >
                Our Story
              </Typography>
              <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum pellentesque augue quam, vel fringilla metus
                fermentum at.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box textAlign="center" marginBottom={{xs: '2rem', md: 0}}>
                <img
                  src="https://st2.depositphotos.com/1760420/6591/i/450/depositphotos_65912143-stock-photo-man-writing-the-words-about.jpg"
                  alt="Our Story"
                  style={styles.image}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box textAlign="center" marginBottom={{xs: '2rem', md: 0}}>
                <img
                  src="https://st2.depositphotos.com/1760420/6591/i/450/depositphotos_65912143-stock-photo-man-writing-the-words-about.jpg"
                  alt="Our Mission"
                  style={styles.image}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                component="h2"
                style={styles.sectionTitle}
              >
                Our Mission:Simplifying Booking Facilities
              </Typography>
              <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum pellentesque augue quam, vel fringilla metus
                fermentum at.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default About;
