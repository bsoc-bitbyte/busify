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

const PrivacyPolicy = () => {
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
              Privacy Policy
            </Typography>
            <Typography variant="body2" paragraph>
              This Privacy Policy describes Our policies and procedures on the
              collection, use and disclosure of Your information when You use
              the Service and tells You about Your privacy rights and how the
              law protects You.
            </Typography>
            <Typography variant="body2" paragraph>
              We use Your Personal data to provide and improve the Service. By
              using the Service, You agree to the collection and use of
              information in accordance with this Privacy Policy. Visit busify
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
              Definitions
            </Typography>
            <Typography variant="body2" paragraph>
              For the purposes of this Privacy Policy:
            </Typography>
            <Typography variant="body1">
              <ul style={styles.list}>
                <li>
                  <Typography variant="body2">
                    <strong>Account</strong> means a unique account created for
                    You to access our Service or parts of our Service.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    <strong>Affiliate</strong> means an entity that controls, is
                    controlled by or is under common control with a party, where
                    "control" means ownership of 50% or more of the shares,
                    equity interest or other securities entitled to vote for
                    election of directors or other managing authority.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    <strong>Company</strong> (referred to as either "the
                    Company", "We", "Us" or "Our" in this Agreement) refers to
                    Busify.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    <strong>Cookies</strong> are small files that are placed on
                    Your computer, mobile device or any other device by a
                    website, containing the details of Your browsing history on
                    that website among its many uses.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    <strong>Country</strong> refers to: Madhya Pradesh, India
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    <strong>Device</strong> means any device that can access the
                    Service such as a computer, a cellphone or a digital tablet.
                  </Typography>
                </li>
              </ul>
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
              Key Terms
            </Typography>
            <Typography variant="body2" paragraph>
              key privacy terms of this Privacy Policy:
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  <Typography variant="body2">
                    <strong>Personal Data</strong> is any information that
                    relates to an identified or identifiable individual.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    <strong>Service</strong> refers to the Website.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    <strong>Service Provider</strong> means any natural or legal
                    person who processes the data on behalf of the Company. It
                    refers to third-party companies or individuals employed by
                    the Company to facilitate the Service, to provide the
                    Service on behalf of the Company, to perform services
                    related to the Service or to assist the Company in analyzing
                    how the Service is used.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    <strong>Usage Data</strong> refers to data collected
                    automatically, either generated by the use of the Service or
                    from the Service infrastructure itself (for example, the
                    duration of a page visit).
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    <strong>Website</strong> refers to Busify, accessible from{' '}
                    <Link
                      href="https://busify.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://busify.vercel.app/
                    </Link>
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    <strong>You</strong> means the individual accessing or using
                    the Service, or the company, or other legal entity on behalf
                    of which such individual is accessing or using the Service,
                    as applicable.
                  </Typography>
                </li>
              </ul>
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

export default PrivacyPolicy;
