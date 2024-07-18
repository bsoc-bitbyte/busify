import React from 'react';
import {
  Container,
  Typography,
  ThemeProvider,
  Box,
} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import aboutUsImage from '../../assets/about-us.png';
import ourMissionImage from '../../assets/our-mission.jpg';
import ourStoryImage from '../../assets/our-story.jpg';


const AboutUs = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const styles = {
    image: {
      width: isSmallScreen ? '24rem' : '32rem',
      borderRadius: '8px',
      marginBottom: '2rem',
    },
  };
  
  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor="#ffffff" pb="4rem" mt="3rem">
        <Container maxWidth="lg">
          <Box
            py="4rem"
            display="flex"
            flexDirection={{xs: 'column-reverse', md: 'row'}}
            alignItems="center"
          >
            <Box flex="1">
              <Typography variant="h3" component="h2" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body1">
                We are The programming club (TPC), a vibrant and diverse
                community of student developers at IIITDMJ. Our club is
                dedicated to fostering a peer-to-peer learning environment where
                members can grow together. At TPC, we believe in the power of
                collaboration and interaction among fellow developers. Our goal
                is to work on amazing projects, acquire new skills, and innovate
                by creating simple solutions to complex problems.
              </Typography>
            </Box>
            <Box flex="1" textAlign="center">
              <img src={aboutUsImage} alt="About Us" style={styles.image} />
            </Box>
          </Box>

          <Box
            py="4rem"
            display="flex"
            flexDirection={{xs: 'column-reverse', md: 'row-reverse'}}
            alignItems="center"
          >
            <Box flex="1">
              <Typography variant="h3" component="h2" gutterBottom>
                Our Story
              </Typography>
              <Typography variant="body1">
                In 2023, the BitByte members from the batch of 2021 came up with
                an idea of organizing a summer event called BitByte Summer of
                Code (BSOC). The goal was to inspire juniors to participate in
                open-source programs and gain experience by working on impactful
                projects. One of the key projects for this event was Busify.
                During the 2023 BSOC event, significant progress was made, with
                nearly half of the project completed. The work continued into
                BSOC 2024, with the 2023 batch making substantial contributions.
                We really wished that there would be someday when this project
                will actually be used by our institute as this project signifies
                the effort and collaboration of 2021, 2022 & 2023 batches. We
                believe Busify will serve as an inspiration for future batches,
                encouraging them to develop practical solutions to real-life
                problems.
              </Typography>
            </Box>
            <Box flex="1" textAlign="center" mb={{xs: '2rem', md: 0}}>
              <img src={ourStoryImage} alt="Our Story" style={styles.image} />
            </Box>
          </Box>

          <Box
            py="4rem"
            display="flex"
            flexDirection={{xs: 'column-reverse', md: 'row'}}
            alignItems="center"
          >
            <Box flex="1">
              <Typography variant="h3" component="h2" gutterBottom>
                Our Mission: Simplifying Booking Facilities
              </Typography>
              <Typography variant="body1">
                We aim to solve the problem of waiting in a long line for
                institute bus tickets by providing a centralized online booking
                system that allows students to reserve tickets in advance,
                saving both time and effort of juniors specially.
              </Typography>
            </Box>
            <Box flex="1" textAlign="center">
              <img
                src={ourMissionImage}
                alt="Our Mission"
                style={styles.image}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default AboutUs;