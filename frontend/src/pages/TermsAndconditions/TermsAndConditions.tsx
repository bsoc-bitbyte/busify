import React from 'react';
import {Container, Typography, Box, Link} from '@mui/material';

const styles = {
  container: {
    padding: '32px',
    backgroundColor: '#ffffff',
    color: '#000000',
    marginTop: '16px',
  },
  section: {
    marginBottom: '24px',
  },
  list: {
    paddingLeft: '20px',
  },
  image: {
    maxWidth: '20rem',
    height: 'auto',
    marginBottom: '24px',
  },
};

const TermsAndConditions = () => {
  return (
    <Box bgcolor="#ffffff" mt="3rem">
      <Container maxWidth="lg">
        <Box
          py="4rem"
          display="flex"
          flexDirection={{xs: 'column-reverse', md: 'row'}}
          alignItems="center"
        >
          <Box flex="1">
            <Typography
              variant="h2"
              style={{marginBottom: '3rem'}}
              gutterBottom
            >
              Terms and Conditions
            </Typography>
            <Typography variant="body2" paragraph>
              These Terms and Conditions govern your use of the Service provided
              by Busify. By accessing or using the Service, you agree to be
              bound by these Terms and Conditions. If you do not agree with any
              part of these terms, you may not access or use the Service.
            </Typography>
            <Typography variant="h5" component="h2">
              Interpretation and Definitions
            </Typography>
            <div style={styles.section}>
              <Typography variant="body2" paragraph>
                The words of which the initial letter is capitalized have
                meanings defined under the following conditions. The following
                definitions shall have the same meaning regardless of whether
                they appear in singular or in plural.
              </Typography>
              <Typography variant="body2" paragraph>
                "Service" refers to the website operated by Busify, accessible
                at{' '}
                <Link
                  href="https://busify.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://busify.vercel.app/
                </Link>
                .
              </Typography>
            </div>
          </Box>
          <Box
            flex="1"
            textAlign="center"
            sx={{marginBottom: {xs: '3rem', md: 0}}}
          >
            <img
              src="https://img.freepik.com/free-vector/flat-safer-internet-day-illustration_23-2151164065.jpg?w=740&t=st=1720945635~exp=1720946235~hmac=2df1b986e74e8b218fb60a4aa0eeaaf61509bb46c0edc6b6e524c5f9ea4872e4"
              alt="About Us"
              style={styles.image}
            />
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
              Use of Service
            </Typography>
            <Typography variant="body2" paragraph>
              Your access to and use of the Service is conditioned on your
              acceptance of and compliance with these Terms. These Terms apply
              to all visitors, users, and others who access or use the Service.
            </Typography>
            <Typography variant="body2" paragraph>
              By accessing or using the Service, you agree to be bound by these
              Terms. If you disagree with any part of the terms then you may not
              access the Service.
            </Typography>
            <Typography variant="body2" paragraph>
              You are granted a non-exclusive, non-transferable, revocable
              license to access and use the Service strictly in accordance with
              these Terms.
            </Typography>
            <Typography variant="body2" paragraph>
              You agree not to reproduce, duplicate, copy, sell, resell, or
              exploit any portion of the Service, use of the Service, or access
              to the Service without the express written permission by Busify.
            </Typography>
          </Box>
          <Box flex="1" textAlign="center" mb={{xs: '2rem', md: 0}}>
            <img
              src="https://img.freepik.com/free-vector/cloud-computing-security-abstract-concept-illustration_335657-2105.jpg?w=740&t=st=1720945674~exp=1720946274~hmac=e338386b5f01cefe2d6bcd626adf401001338351ccef5a2bc2fb91d1eb47f799"
              alt="Our Story"
              style={styles.image}
            />
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
              User Responsibilities
            </Typography>
            <Typography variant="body2" paragraph>
              You are responsible for maintaining the confidentiality of your
              account and password, including but not limited to the restriction
              of access to your computer and/or account. You agree to accept
              responsibility for all activities or actions that occur under your
              account and/or password, whether your password is with our Service
              or a third-party service.
            </Typography>
            <Typography variant="body2" paragraph>
              You must notify us immediately upon becoming aware of any breach
              of security or unauthorized use of your account.
            </Typography>
            <Typography variant="body2" paragraph>
              You must not use the Service for any illegal or unauthorized
              purpose nor may you, in the use of the Service, violate any laws
              in your jurisdiction (including but not limited to copyright
              laws).
            </Typography>
          </Box>
          <Box flex="1" textAlign="center">
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-flat-design-ssl-illustration_23-2149233377.jpg?t=st=1720950723~exp=1720954323~hmac=9a80998298f8cee7794efd6a16b5ed0d7811e0f7e053128da3a88eacbb18d5f9&w=740"
              alt="Our Mission"
              style={styles.image}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TermsAndConditions;
