import {useTheme, Typography, styled, Box, TextField} from '@mui/material';
import {useState} from 'react';

const ContainerMain = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;

  @media (min-width: 800px) {
    margin: 2rem;
    flex-direction: row;
  }
`;

const ProfileSection = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  margin-right: 2rem;

  @media (min-width: 800px) {
    max-width: 350px;
    border-right: 2px solid #ddd;
    padding: 1rem;
    flex: 1;
    margin-bottom: 0;
  }
`;

const ProfileImage = styled(Box)`
  display: grid;
  place-items: center;
  height: 200px;
  width: 200px;
  background: #f9f9f9;
  border: 2px solid #e6e6e6;
  border-radius: 100%;
  margin: auto;

  @media (min-width: 200px) {
    height: 250px;
    width: 250px;
  }

  @media (min-width: 400px) {
    height: 300px;
    width: 300px;
  }

  @media (min-width: 800px) {
    margin: 0;
    height: 250px;
    width: 250px;
  }
`;

const InputField = styled(TextField)`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 20px;
  background: #f9f9f9;

  @media (min-width: 800px) {
    width: 95%;
  }

  .MuiInputBase-root {
    border-radius: 10px;
  }

  .MuiInputBase-input {
    font-size: 0.875rem;
  }
`;

const TaskSection = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 800px) {
    flex: 1;
  }
`;

const EventBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProfilePage = () => {
  const theme = useTheme();
  const [currentTab, setCurrentTab] = useState<1 | 2>(1);

  return (
    <ContainerMain>
      <ProfileSection>
        <ProfileImage>
          <svg
            width="95"
            height="81"
            viewBox="0 0 95 81"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M80.4241 14.6311H74.4037L72.8986 9.92763C71.9229 7.16779 70.113 4.77972 67.7197 3.09428C65.3263 1.40883 62.4681 0.50945 59.5408 0.520735H35.4592C32.5033 0.526265 29.6238 1.45993 27.227 3.18997C24.8303 4.92 23.0374 7.35903 22.1014 10.1628L20.5963 14.8663H14.5759C10.8336 14.8663 7.24454 16.3529 4.59834 18.9991C1.95214 21.6453 0.465515 25.2343 0.465515 28.9766V66.6042C0.465515 70.3465 1.95214 73.9355 4.59834 76.5817C7.24454 79.2279 10.8336 80.7145 14.5759 80.7145H80.4241C84.1664 80.7145 87.7555 79.2279 90.4017 76.5817C93.0479 73.9355 94.5345 70.3465 94.5345 66.6042V28.9766C94.5657 27.1039 94.2238 25.2437 93.5287 23.5046C92.8335 21.7654 91.7991 20.182 90.4857 18.8467C89.1723 17.5114 87.6063 16.451 85.8788 15.7272C84.1514 15.0034 82.2971 14.6308 80.4241 14.6311ZM85.1276 66.369C85.1276 67.6164 84.632 68.8128 83.75 69.6949C82.8679 70.5769 81.6716 71.0725 80.4241 71.0725H14.5759C13.3284 71.0725 12.1321 70.5769 11.25 69.6949C10.368 68.8128 9.87241 67.6164 9.87241 66.369V28.7414C9.87241 27.494 10.368 26.2977 11.25 25.4156C12.1321 24.5335 13.3284 24.038 14.5759 24.038H23.9828C25.0084 24.0915 26.0234 23.8079 26.8727 23.2303C27.722 22.6528 28.3589 21.8132 28.6862 20.8396L31.2261 13.126C31.5416 12.1918 32.1428 11.3804 32.9446 10.8064C33.7464 10.2325 34.7083 9.92509 35.6943 9.92763H59.776C60.762 9.92509 61.724 10.2325 62.5258 10.8064C63.3276 11.3804 63.9287 12.1918 64.2443 13.126L66.7841 20.8396C67.086 21.7368 67.6514 22.522 68.4067 23.0926C69.1619 23.6633 70.0718 23.9927 71.0172 24.038H80.4241C81.6716 24.038 82.8679 24.5335 83.75 25.4156C84.632 26.2977 85.1276 27.494 85.1276 28.7414V66.369ZM47.5 24.038C43.779 24.038 40.1415 25.1414 37.0476 27.2087C33.9537 29.276 31.5423 32.2143 30.1183 35.652C28.6943 39.0898 28.3218 42.8726 29.0477 46.5222C29.7736 50.1717 31.5655 53.524 34.1966 56.1551C36.8278 58.7863 40.1801 60.5781 43.8296 61.3041C47.4791 62.03 51.262 61.6574 54.6997 60.2334C58.1375 58.8095 61.0758 56.3981 63.1431 53.3041C65.2104 50.2102 66.3138 46.5728 66.3138 42.8518C66.3138 37.862 64.3316 33.0767 60.8034 29.5484C57.2751 26.0201 52.4897 24.038 47.5 24.038V24.038ZM47.5 52.2587C45.6395 52.2587 43.8208 51.707 42.2738 50.6733C40.7269 49.6397 39.5211 48.1705 38.8092 46.4516C38.0972 44.7327 37.9109 42.8413 38.2739 41.0166C38.6368 39.1918 39.5327 37.5157 40.8483 36.2001C42.1639 34.8845 43.84 33.9886 45.6648 33.6256C47.4896 33.2627 49.381 33.4489 51.0999 34.1609C52.8187 34.8729 54.2879 36.0786 55.3215 37.6256C56.3552 39.1725 56.9069 40.9913 56.9069 42.8518C56.9069 45.3466 55.9158 47.7393 54.1517 49.5034C52.3875 51.2676 49.9949 52.2587 47.5 52.2587Z"
              fill="#E6E6E6"
            />
          </svg>
        </ProfileImage>
        <Typography
          variant="h2"
          fontSize={{xs: '1rem', sm: '1.25rem', md: '1.5rem'}}
          fontWeight={500}
          marginTop="1.5rem"
          marginBottom="1rem"
          color="black"
        >
          Profile Details
        </Typography>
        <Box>
          <InputField variant="outlined" label="Enter your name" />
          <InputField variant="outlined" label="Enter your Email ID" />
        </Box>
        <Typography
          variant="body2"
          color={theme.palette.secondary.light}
          fontWeight={600}
        >
          Member Since, May 2022
        </Typography>
      </ProfileSection>
      <EventBox>
        <Box
          display="flex"
          justifyContent="start"
          alignItems="center"
          marginBottom="1rem"
          gap="20px"
          borderBottom="2px solid #e6e6e6"
        >
          <Typography
            variant="h4"
            fontWeight={600}
            color={theme.palette.primary.main}
            borderBottom={currentTab === 1 ? '4px solid' : 'none'}
            borderColor={theme.palette.primary.main}
            paddingBottom="0.5rem"
            onClick={() => {
              setCurrentTab(1);
            }}
          >
            Upcoming
          </Typography>
          <Typography
            variant="h4"
            fontWeight={600}
            color={theme.palette.primary.main}
            borderBottom={currentTab === 2 ? '4px solid' : 'none'}
            borderColor={theme.palette.primary.main}
            paddingBottom="0.5rem"
            onClick={() => {
              setCurrentTab(2);
            }}
          >
            Completed
          </Typography>
          <Box margin="0 10px 0 auto">
            <svg
              width="27"
              height="27"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.972 22.9608C16.0027 26.9408 8.72881 26.6276 4.12233 22.0211C-0.820238 17.0785 -0.820238 9.06503 4.12233 4.12246C9.06491 -0.820116 17.0784 -0.820115 22.021 4.12246C26.6274 8.72892 26.9407 16.0028 22.9607 20.9721L32.6275 30.6389C33.1767 31.1881 33.1767 32.0785 32.6275 32.6276C32.0784 33.1768 31.188 33.1768 30.6388 32.6276L20.972 22.9608ZM6.11107 20.0324C2.26685 16.1881 2.26685 9.95542 6.11107 6.1112C9.9553 2.26697 16.188 2.26697 20.0322 6.1112C23.8736 9.9526 23.8765 16.179 20.0407 20.0239C20.0379 20.0267 20.035 20.0295 20.0322 20.0323C20.0294 20.0351 20.0266 20.038 20.0238 20.0408C16.1789 23.8766 9.95248 23.8738 6.11107 20.0324Z"
                fill="#1A1A1A"
              />
            </svg>
          </Box>
        </Box>
        <Box width="100%" height="100%">
          {currentTab === 1 ? (
            <Box>
              <Typography
                fontSize="1.75rem"
                fontWeight="500"
                color={theme.palette.secondary.light}
              >
                Today
              </Typography>
              <Box display="flex" gap="10px" width="100%" overflow="auto">
                <img src="/upcoming-demo.png" alt="" height="200px" />
                <img src="/upcoming-demo.png" alt="" height="200px" />
              </Box>
            </Box>
          ) : (
            <Box>
              <Typography
                fontSize="1.75rem"
                fontWeight="500"
                color={theme.palette.secondary.light}
              >
                Today
              </Typography>
              <Box display="flex" gap="10px" width="100%" overflow="auto">
                <img src="/completed-demo.png" alt="" height="200px" />
                <img src="/completed-demo.png" alt="" height="200px" />
              </Box>
            </Box>
          )}
        </Box>
      </EventBox>
    </ContainerMain>
  );
};

export default ProfilePage;
