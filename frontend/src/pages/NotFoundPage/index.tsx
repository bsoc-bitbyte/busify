import EmptyModal from '../../components/Custom Empty Modal';
import NoPageFound from '../../assets/NoPage.svg';

const NotFoundPage = () => {
  return (
    <EmptyModal
      img={NoPageFound}
      title="Page Not found!"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    />
  );
};
export default NotFoundPage;
