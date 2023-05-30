import {Typography, useTheme, Grid} from '@mui/material';

export default function Footer(props: {Logo: string | undefined}) {
  const theme = useTheme();

  return (
    <Grid
      container
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0',
        padding: '0',
      }}
    >
      <Grid item p={0.8}>
        <img
          src={props.Logo}
          alt="College-logo"
          style={{height: 'calc(8px + 1vw)'}}
        ></img>
      </Grid>
      <Grid item>
        <Typography
          variant="body2"
          color={theme.palette.secondary.main}
          style={{fontSize: 'calc(4px + 0.5vw)'}}
          position={'static'}
        >
          INDIAN INSTITUTE OF INFORMATION TECHNOLOGY DESIN AND MANUFACTURING
          JABALPUR
        </Typography>
      </Grid>
    </Grid>
  );
}
