import Sidebar from '../AdminSideBar';
// import Footer from '../../Footer';
import {Grid} from '@mui/material';
import {LayoutProps} from '../../../types';

const AdminLayout = ({children}: LayoutProps) => {
  return (
    <Grid container spacing={3} margin={0}>
      <Grid item>
        <Sidebar />
      </Grid>
      <Grid item container xs direction={'column'} alignItems={'flex-start'}>
        <main>{children}</main>
        <Grid alignItems={'stretch'} item xs>
          {/* Footer goes here */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AdminLayout;
