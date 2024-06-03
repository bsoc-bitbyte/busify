import Sidebar from '../AdminSideBar';
// import Footer from '../../Footer';
import {Grid, styled} from '@mui/material';
import {LayoutProps} from '../../../types';
import Footer from '../../Footer';
import Navbar from '../../Navbar';
import theme from '../../../theme';

const AdminLayout = ({children}: LayoutProps) => {
  const GridItemStyled = styled(Grid)`
    &.MuiGrid-item {
      padding: 0;
    }
  `;

  return (
    <GridItemStyled container spacing={4}>
      <GridItemStyled
        item
        sx={{
          [theme.breakpoints.up('sm')]: {
            minWidth: '13rem',
          },
        }}
      >
        <Sidebar />
      </GridItemStyled>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        item
        rowSpacing={4}
        xs
      >
        {' '}
        <Grid alignItems={'stretch'} item xs>
          <Navbar />
        </Grid>
        <Grid item>{children}</Grid>
        <Grid alignItems={'stretch'} item xs>
          <Footer />
        </Grid>
      </Grid>
    </GridItemStyled>
  );
};

export default AdminLayout;
