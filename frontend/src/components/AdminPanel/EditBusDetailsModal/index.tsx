import {CloseRounded} from '@mui/icons-material';
import {Button, Link, Stack, TextField, styled} from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import swapicon from '../../../assets/swapicon.svg';

interface EditBusDetailsModalProps {
  open: boolean;
  handleClose: () => void;
}

const SelectedButton = styled(Button)`
  background: #fff1c7;
  border: 1px solid #fbbc05;
  border-radius: 12px;
  color: #fbbc05;
  margin-right: 15px;
  height: 36px;
`;

const NormalButton = styled(Button)`
  background: #f9f9f9;
  border: 1px solid #e6e6e6;
  border-radius: 12px;
  color: #999999;
  margin-right: 15px;
`;

export default function EditBusDetailsModal({
  open,
  handleClose,
}: EditBusDetailsModalProps) {
  // const classes = useStyles();
  const time = '3:30';
  const Buscode = 'MP - 20 - PA';
  const BusNumber = '0369';
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '20px',
      }}
    >
      <Box
        sx={{
          background: 'white',
          borderRadius: '20px',
          paddingY: '2rem',
          paddingX: {sm: '2rem', xs: '1rem'},
          minWidth: {sm: '500px', xs: '350px'},
        }}
      >
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          sx={{width: '100%'}}
        >
          <Typography id="modal-modal-title" variant="h2" fontWeight={600}>
            Bus Details
          </Typography>
          <CloseRounded
            onClick={handleClose}
            fontSize="small"
            sx={{
              color: '#FBBC05',
              cursor: 'pointer',
              padding: '0.7rem',
              background: '#FFF1C7',
              borderRadius: '100%',
              height: '48px',
              width: '48px',
            }}
          />
        </Stack>
        <Stack alignItems={'center'} width={'100%'} gap={'1rem'}>
          <Box
            sx={{
              display: 'flex',
              padding: '20px 0 20px 0',
              flexDirection: 'column',
              marginTop: '1rem',
              color: 'white',
              background: '#FBBC05',
              borderRadius: '17px',
              width: {sm: '400px', xs: '300px'},
            }}
          >
            <Typography
              fontSize={'18px'}
              lineHeight={'18px'}
              fontWeight={600}
              textAlign={'center'}
            >
              {Buscode}
            </Typography>
            <Typography
              fontSize="60px"
              lineHeight={'64px'}
              fontWeight={800}
              textAlign={'center'}
            >
              {BusNumber}
            </Typography>
          </Box>
          <Stack
            alignItems={'start'}
            width={{sm: '400px', xs: '300px'}}
            style={{color: '#C6C6C6'}}
          >
            <Stack width={'100%'} style={{position: 'relative'}} gap={'0.4rem'}>
              <Typography
                fontWeight={600}
                fontSize={'12px'}
                letterSpacing={'2px'}
              >
                FROM
              </Typography>
              <TextField
                label="Enter From location"
                sx={{
                  width: '80%',
                  color: '#C6C6C6E5',
                  '& .MuiInputBase-root': {
                    borderRadius: '12px',
                    outline: '1px solid #C6C6C6E5',
                    backgroundColor: '#F9F9F9',
                    height: '47px',
                  },
                  '& .MuiFormLabel-root': {
                    color: '#C6C6C6E5',
                    height: '47px',
                    translate: '0 -4px',
                  },
                }}
              />
              <Typography
                fontWeight={600}
                fontSize={'12px'}
                letterSpacing={'2px'}
              >
                TO
              </Typography>
              <Button
                style={{
                  position: 'absolute',
                  right: '0px',
                  top: 'calc(50% - 24px)',
                  color: '#C6C6C6E5',
                }}
              >
                <img
                  src={swapicon}
                  alt="swapicon"
                  style={{width: '48px', height: '48px'}}
                />
              </Button>
              <TextField
                label="Enter To location"
                sx={{
                  width: '80%',
                  color: '#C6C6C6E5',
                  '& .MuiInputBase-root': {
                    borderRadius: '12px',
                    outline: '1px solid #C6C6C6E5',
                    backgroundColor: '#F9F9F9',
                    height: '47px',
                  },
                  '& .MuiFormLabel-root': {
                    color: '#C6C6C6E5',
                    height: '47px',
                    translate: '0 -4px',
                  },
                }}
              />
            </Stack>
            <Typography
              fontWeight={600}
              fontSize={'12px'}
              letterSpacing={'2px'}
              margin={'0.6rem 0'}
            >
              BUS ARRIVAL TIMINGS
            </Typography>
            <Stack direction={'row'}>
              {['3:30', '6:30', '8:00', '10:00'].map(t =>
                time === t ? (
                  <SelectedButton>{t}</SelectedButton>
                ) : (
                  <NormalButton>{t}</NormalButton>
                )
              )}
            </Stack>
            <Typography
              fontWeight={600}
              fontSize={'12px'}
              letterSpacing={'2px'}
              margin={'0.6rem 0'}
            >
              BUS SCHEDULED DATE
            </Typography>
            <Box
              sx={{
                height: '40px',
                display: 'flex',
                gap: '1rem',
              }}
            >
              {/* <Select
                value={}
                onChange={(e) => setSelectedDay(e.target.value)}
                sx={{
                  width: '80px',
                  color: '#C6C6C6E5',
                  '& .MuiSelect-root': {
                    borderRadius: '12px',
                    outline: '1px solid #C6C6C6E5',
                    backgroundColor: '#F9F9F9',
                  },
                }}
              >
                {[].map((day) => (
                  <MenuItem key={day} value={day}>
                    {day}
                  </MenuItem>
                ))}
              </Select>
              <Select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                sx={{
                  width: '80px',
                  color: '#C6C6C6E5',
                  '& .MuiSelect-root': {
                    borderRadius: '12px',
                    outline: '1px solid #C6C6C6E5',
                    backgroundColor: '#F9F9F9',
                  },
                }}
              >
                {months.map((month) => (
                  <MenuItem key={month} value={month}>
                    {month}
                  </MenuItem>
                ))}
              </Select>
              <Select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                sx={{
                  width: '80px',
                  color: '#C6C6C6E5',
                  '& .MuiSelect-root': {
                    borderRadius: '12px',
                    outline: '1px solid #C6C6C6E5',
                    backgroundColor: '#F9F9F9',
                  },
                }}
              >
                {years.map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </Select> */}
            </Box>
            <Typography
              fontWeight={600}
              fontSize={'12px'}
              letterSpacing={'2px'}
              margin={'0.6rem 0'}
            >
              NUMBER OF SEATS BOOKED
            </Typography>
            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              sx={{width: '100%'}}
              alignItems={'baseline'}
            >
              <Typography
                display={'flex'}
                fontSize={'14px'}
                alignItems={'baseline'}
              >
                <Typography variant="h1" color={'#FBBC05'}>
                  0
                </Typography>
                /50
              </Typography>
              <Link
                href="/adminpanel/busdetails"
                fontSize={'14px'}
                color={'#999999'}
              >
                List of students
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
}
