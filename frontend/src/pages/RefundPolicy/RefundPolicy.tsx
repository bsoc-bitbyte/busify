import React from 'react';
import {Container, Typography, Box, Link} from '@mui/material';
import TermsAndPolicy_1 from '../../assets/termsAndPolicy_1.avif';
import TermsAndPolicy_2 from '../../assets/termsAndPolicy_2.avif';
import TermsAndPolicy_3 from '../../assets/termsAndPolicy_3.jpg';

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
    marginBottom: '2rem',
  },
};

const RefundPolicy = () => {
  return (
    <Box bgcolor="#ffffff" mt="3rem">
      <Container maxWidth="lg">
        <Box
          pt="4rem"
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
              Refund Policy
            </Typography>
            <Typography variant="body2" paragraph>
              This Refund Policy applies to purchases made through the Busify
              platform. Please read this policy carefully before making a
              purchase. If you do not agree with any part of this policy, do not
              proceed with the purchase.
            </Typography>
            <Typography variant="h5" component="h2">
              Eligibility for Refund
            </Typography>
            <div style={styles.section}>
              <Typography variant="body2" paragraph>
                We issue refunds for digital products within 30 days of the
                original purchase of the product.
              </Typography>
              <Typography variant="body2" paragraph>
                To be eligible for a refund, you must submit a refund request
                within 30 days of purchase. The product must be in its original
                condition and must not have been accessed or used.
              </Typography>
            </div>
          </Box>
          <Box
            flex="1"
            textAlign="center"
            sx={{marginBottom: {xs: '3rem', md: 0}}}
          >
            <img src={TermsAndPolicy_1} alt="About Us" style={styles.image} />
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
              How to Request a Refund
            </Typography>
            <Typography variant="body2" paragraph>
              To request a refund, please contact our customer support team at
              support@busify.com. Include your order number and the reason for
              your refund request.
            </Typography>
            <Typography variant="body2" paragraph>
              Upon receiving your refund request, our customer support team will
              review the request and may ask for additional information if
              needed.
            </Typography>
            <Typography variant="body2" paragraph>
              We aim to process your refund within 5-7 business days after
              receiving all required information. Refunds will be issued to the
              original payment method used during the purchase.
            </Typography>
            <Typography variant="body2" paragraph>
              If you have any questions about the refund process or need further
              assistance, feel free to reach out to our customer support team.
            </Typography>
          </Box>
          <Box flex="1" textAlign="center" mb={{xs: '2rem', md: 0}}>
            <img src={TermsAndPolicy_2} alt="Our Story" style={styles.image} />
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
              Customer Support
            </Typography>
            <Typography variant="body2" paragraph>
              Our customer support team is available to assist you with any
              questions or concerns regarding our products and services. For
              inquiries related to your purchase or our refund policy, please
              email us at support@busify.com.
            </Typography>
            <Typography variant="body2" paragraph>
              We strive to provide timely and helpful support to ensure your
              satisfaction with our platform.
            </Typography>
          </Box>
          <Box flex="1" textAlign="center">
            <img
              src={TermsAndPolicy_3}
              alt="Our Mission"
              style={styles.image}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default RefundPolicy;
