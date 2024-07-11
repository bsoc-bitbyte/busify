import EmptyModal from '../../components/Custom Empty Modal';
import NoPageFound from '../../assets/NoPage.svg';

const NotFoundPage = () => {
  return (
    <EmptyModal
      img={NoPageFound}
      title="Page Not found!"
      description="Sorry we could'nt find the page you are looking for. The Page might have been removed had its name changed or is temporarily unavailable."
    />
  );
};
export default NotFoundPage;
