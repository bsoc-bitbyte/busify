import {Box, CardContent, Grid, styled, Typography} from '@mui/material';
import help from '../../assets/contactushelp.svg';
import call from '../../assets/contactuscall.svg';
import email from '../../assets/contactusemail.svg';
import coverimage from '../../assets/coverimage.jpg';

const ContactUs = () => {
  return (
    <>
      <Box marginLeft={{xs: '-1rem', sm: '-1rem', md: '-5rem', lg: '-5rem'}}>
        <img
          src={coverimage}
          alt="coverimage"
          style={{
            paddingTop: '1rem',
            position: 'absolute',
            width: '100vw',
            height: 'auto',
            zIndex: '-1',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Box>

      <ContactUsStyle>
        <Typography
          variant={'h1'}
          fontSize={{xs: '2rem', sm: '2.5rem', md: '3.3rem', lg: '5rem'}}
          marginTop={{xs: '-1rem', sm: '1rem', md: '4rem', lg: '6.5rem'}}
          marginBottom={{xs: '2rem', sm: '1rem', md: '4rem', lg: '12rem'}}
        >
          Contact us
        </Typography>
      </ContactUsStyle>

      <Grid container direction="column" marginTop="3rem" zIndex={'10'}>
        <Grid item>
          <Box marginBottom="4rem">
            <Grid container spacing={{xs: 4, md: 10}} padding={{md: '0.2rem'}}>
              <Grid item xs={12} md={4}>
                <Cardall
                  padding={{
                    xs: '5rem 0rem 5rem',
                    sm: '5rem 0rem 5rem',
                    md: '10rem 0rem 10rem',
                    lg: '8rem 0rem 10rem',
                  }}
                >
                  <CardContent>
                    <img
                      src={help}
                      alt="help"
                      style={{
                        width: '100px',
                        height: '100px',
                        marginBottom: '2rem',
                      }}
                    />
                    <Typography variant={'h4'} fontWeight={'600'}>
                      Live chat & Help center
                    </Typography>
                    <Typography marginTop="4rem" color="textSecondary">
                      Want a quick answer to a Burning Question?
                    </Typography>
                    <Typography marginTop="4rem" color="textSecondary">
                      Visit our Help Center for FAQs or chat with a live agent.
                    </Typography>
                    <Typography
                      variant={'h4'}
                      fontWeight="600"
                      marginTop="5rem"
                    >
                      Live Chat Hours:
                    </Typography>
                    <Typography
                      marginTop="2rem"
                      variant={'h5'}
                      fontWeight={'600'}
                    >
                      Monday to Friday:
                    </Typography>
                    <Typography marginTop={'2 rem'} color={'textSecondary'}>
                      6:00 am - 4:00 pm PT
                    </Typography>
                  </CardContent>
                </Cardall>
              </Grid>
              <Grid item xs={12} md={4}>
                <Cardall
                  padding={{
                    xs: '5rem 0rem 5rem',
                    sm: '5rem 0rem 5rem',
                    md: '10rem 0rem 10rem',
                    lg: '8rem 0rem 10rem',
                  }}
                >
                  <CardContent>
                    <img
                      src={call}
                      alt="help"
                      style={{
                        width: '90px',
                        height: '90px',
                        marginTop: '1.5rem',
                        marginBottom: '1rem',
                      }}
                    />
                    <Typography variant={'h4'} fontWeight={'600'}>
                      Call Us
                    </Typography>
                    <Typography
                      marginTop="4rem"
                      variant={'h4'}
                      fontWeight={'600'}
                    >
                      +91-123-456-7890
                    </Typography>
                    <Typography
                      marginTop="4rem"
                      variant={'h4'}
                      fontWeight={'600'}
                    >
                      Phone Hours:
                    </Typography>

                    <Typography
                      marginTop="2rem"
                      variant={'h5'}
                      fontWeight={'600'}
                    >
                      Monday to Friday:
                    </Typography>
                    <Typography marginTop={'2rem'} color={'textSecondary'}>
                      6:00 am - 4:00 pm PT
                    </Typography>
                    <Typography
                      marginTop="2rem"
                      variant={'h5'}
                      fontWeight={'600'}
                    >
                      Saturday & Sunday:
                    </Typography>
                    <Typography margin={'2rem'} color={'textSecondary'}>
                      Phones are closed, but please Chat with us 6am - 4pm PT
                    </Typography>
                  </CardContent>
                </Cardall>
              </Grid>
              <Grid item xs={12} md={4}>
                <Cardall
                  padding={{
                    xs: '5rem 0rem 5rem',
                    sm: '5rem 0rem 5rem',
                    md: '10rem 0rem 10rem',
                    lg: '8rem 0rem 10rem',
                  }}
                >
                  <CardContent>
                    <img
                      src={email}
                      alt="help"
                      style={{
                        width: '110px',
                        height: '110px',
                        marginBottom: '2rem',
                      }}
                    />
                    <Typography variant={'h4'} fontWeight={'600'}>
                      Email Us
                    </Typography>
                    <Typography marginTop="3rem" color="textSecondary">
                      Submit an Email and we will get back to you soon.
                    </Typography>
                    <Typography
                      marginTop="4rem"
                      variant={'h4'}
                      fontWeight={'600'}
                    >
                      Email Hours:
                    </Typography>

                    <Typography
                      marginTop="2rem"
                      variant={'h5'}
                      fontWeight={'600'}
                    >
                      Monday to Friday:
                    </Typography>
                    <Typography marginTop={'2rem'} color={'textSecondary'}>
                      6:00 am - 4:00 pm PT
                    </Typography>
                    <Typography
                      marginTop="2rem"
                      variant={'h5'}
                      fontWeight={'600'}
                    >
                      Saturday & Sunday:
                    </Typography>
                    <Typography marginTop={'2rem'} color={'textSecondary'}>
                      6:00 am - 4:00 pm PT
                    </Typography>
                  </CardContent>
                </Cardall>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

const Cardall = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#FAFAFA',
  justifyContent: 'center',
  gap: '1.5rem',
  alignItems: 'center',
  textAlign: 'center',
  boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.3)',
  width: '100%',
  // padding: '3rem 5rem 4rem',
  height: '90%',
});

const ContactUsStyle = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  paddingTop: '5rem',
});

export default ContactUs;
