import {Circle, CircleOutlined, Room} from '@mui/icons-material';
import CloseRounded from '@mui/icons-material/CloseRounded';
import {
  Button,
  MenuItem,
  Select,
  Stack,
  TextField,
  styled,
} from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {ScheduleType} from '../../../types';
import {notify} from '../../../utils/notify';

interface EditBusDetailsModalProps {
  open: boolean;
  handleClose: () => void;
  schedule?: ScheduleType | undefined;
}

interface ScheduleFormDetails {
  id: string | null;
  busNumber: string;
  from: string;
  to: string;
  departureTime: string;
  checkpoints: Array<string>;
  days: Array<string>;
}

const SelectedButton = styled(Button)`
  background: #fff1c7;
  border: 1px solid #fbbc05;
  border-radius: 12px;
  color: #fbbc05;
  min-width: 48px;
  height: 32px;
`;

const SubmitButton = styled(Button)`
  background: #fbbc05;
  border: 1px solid #fbbc05;
  border-radius: 12px;
  color: #fff1c7;
  translate: 0 -7px;
  width: 100px;
  &:hover {
    color: #fbbc05;
    background: #fff1c7;
  }
`;

const NormalButton = styled(Button)`
  background: #f9f9f9;
  border: 1px solid #e6e6e6;
  border-radius: 12px;
  color: #999999;
  min-width: 48px;
  height: 32px;
`;

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function EditBusDetailsModal({
  open,
  handleClose,
  schedule = undefined,
}: EditBusDetailsModalProps) {
  const availableBusNumbers = ['MP04-1234', 'MP04-5678'];

  const [busNumber, setBusNumber] = useState<Array<string>>(
    schedule?.busNumber.split('-') || availableBusNumbers[0].split('-')
  );

  const checkpoints = [
    ['Girls Hostel', 'PDPM IIITDMJ'],
    ['Panini', 'PDPM IIITDMJ'],
    ['H3/H4', 'PDPM IIITDMJ'],
    ['Nescafe', 'PDPM IIITDMJ'],
    ['Main gate', 'PDPM IIITDMJ'],
    ['Railway Station', 'City'],
    ['Reliance Signature', 'City'],
    ['Sadar', 'City'],
    ['Russel Chowk', 'City'],
  ];
  const [busCheckpoints, setBusCheckpoints] = useState<Array<string>>(
    schedule?.checkpoints || [
      'Girls Hostel',
      'Panini',
      'H3/H4',
      'Nescafe',
      'Main gate',
    ]
  );
  const [formData, setFormData] = useState<ScheduleFormDetails>({
    id: schedule?.id || null,
    busNumber: schedule?.busNumber || availableBusNumbers[0],
    from: schedule?.from || '',
    to: schedule?.to || '',
    departureTime: schedule?.departureTime || '',
    checkpoints: schedule?.checkpoints || busCheckpoints,
    days: schedule?.days || [],
  });

  const handleChange = (name: string, value: string | Array<string>) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    setFormData({...formData, checkpoints: busCheckpoints});
  }, [busCheckpoints]);

  useEffect(() => {
    handleChange('busNumber', busNumber.join('-'));
  }, [busNumber]);

  const Submit = async () => {
    if (!formData.busNumber.match(/^([a-zA-z]){2}(\d){2}-(\d){4}$/)) {
      notify('Invalid Bus Number', 'error');
      return;
    } else if (formData.from === '') {
      notify('From location is required', 'error');
      return;
    } else if (formData.to === '') {
      notify('To location is required', 'error');
      return;
    } else if (formData.departureTime === '') {
      notify('Departure time is required', 'error');
      return;
    } else if (formData.days.length === 0) {
      notify('Atleast one day is required', 'error');
      return;
    }
    const res = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/bus/schedule`,
      formData,
      {
        withCredentials: true,
      }
    );
    if (res.status === 201) {
      handleClose();
      notify('Bus Details Updated', 'success');
    } else {
      notify('Something went wrong', 'error');
    }
  };

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
          <Select
            value={busNumber}
            onChange={e => {
              setBusNumber(e.target.value as Array<string>);
            }}
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
            renderValue={selected => (
              <Stack>
                <span
                  style={{
                    fontSize: '18px',
                    lineHeight: '18px',
                    fontWeight: '600',
                    textAlign: 'center',
                    background: 'transparent',
                    border: 'none',
                    color: 'white',
                  }}
                >
                  {selected[0]}
                </span>
                <span
                  style={{
                    fontSize: '64px',
                    lineHeight: '64px',
                    fontWeight: '800',
                    textAlign: 'center',
                    background: 'transparent',
                    border: 'none',
                    color: 'white',
                  }}
                >
                  {selected[1]}
                </span>
              </Stack>
            )}
          >
            {availableBusNumbers.map(bus => (
              <MenuItem key={bus} value={bus.split('-')}>
                {bus}
              </MenuItem>
            ))}
          </Select>
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
                marginLeft={'5%'}
              >
                FROM
              </Typography>
              <Stack
                direction={'row'}
                alignItems={'center'}
                gap={'0.5rem'}
                height={'47px'}
              >
                <Stack sx={{translate: '0px 40%'}} gap={'2px'}>
                  <Circle color="primary" sx={{width: '8px'}} />
                  <Circle color="primary" sx={{width: '8px', height: '5px'}} />
                  <Circle color="primary" sx={{width: '8px', height: '5px'}} />
                  <Circle color="primary" sx={{width: '8px', height: '5px'}} />
                  <Circle color="primary" sx={{width: '8px', height: '5px'}} />
                  <Circle color="primary" sx={{width: '8px', height: '5px'}} />
                  <Circle color="primary" sx={{width: '8px', height: '5px'}} />
                  <Circle color="primary" sx={{width: '8px', height: '5px'}} />
                </Stack>
                <TextField
                  label="Enter From location"
                  value={formData.from}
                  onChange={e => handleChange('from', e.target.value)}
                  sx={{
                    flex: '1',
                    flexGrow: 1,
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
                marginLeft={'5%'}
              >
                VIA
              </Typography>
              <Stack direction={'row'} alignItems={'center'} gap={'0.5rem'}>
                <CircleOutlined color="primary" sx={{width: '8px'}} />
                <Select
                  multiple
                  value={busCheckpoints || []}
                  onChange={e => {
                    setBusCheckpoints(e.target.value as Array<string>);
                  }}
                  renderValue={selected => selected.join(', ')}
                  sx={{
                    flex: '1',
                    flexGrow: 1,
                    width: '90%',
                    height: '47px',
                    color: '#C6C6C6E5',
                    borderRadius: '12px',
                    outline: '1px solid #C6C6C6E5',
                    backgroundColor: '#F9F9F9',
                  }}
                  MenuProps={MenuProps}
                >
                  {checkpoints.map(name => (
                    <MenuItem key={name[0]} value={name[0]}>
                      <Stack direction={'row'} gap={'0.5rem'}>
                        <img src="/marker.svg" />
                        <Stack>
                          <Typography>{name[0]}</Typography>
                          <Typography fontSize={12} color={'gray'}>
                            {name[1]}
                          </Typography>
                        </Stack>
                      </Stack>
                    </MenuItem>
                  ))}
                </Select>
              </Stack>
              <Typography
                fontWeight={600}
                fontSize={'12px'}
                letterSpacing={'2px'}
                marginLeft={'5%'}
              >
                TO
              </Typography>
              <Stack
                direction={'row'}
                alignItems={'center'}
                gap={'0.5rem'}
                height={'47px'}
              >
                <Stack sx={{translate: '0px -40%'}} gap={'2px'}>
                  <Circle color="primary" sx={{width: '8px', height: '5px'}} />
                  <Circle color="primary" sx={{width: '8px', height: '5px'}} />
                  <Circle color="primary" sx={{width: '8px', height: '5px'}} />
                  <Circle color="primary" sx={{width: '8px', height: '5px'}} />
                  <Circle color="primary" sx={{width: '8px', height: '5px'}} />
                  <Circle color="primary" sx={{width: '8px', height: '5px'}} />
                  <Circle color="primary" sx={{width: '8px', height: '5px'}} />
                  <Room
                    color="primary"
                    sx={{
                      width: '8px',
                      height: '14px',
                      scale: '1.5',
                      marginTop: '8px',
                    }}
                  />
                </Stack>
                <TextField
                  label="Enter To location"
                  value={formData.to}
                  onChange={e => handleChange('to', e.target.value)}
                  sx={{
                    flex: '1',
                    flexGrow: 1,
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
            </Stack>
            <Typography
              fontWeight={600}
              fontSize={'12px'}
              letterSpacing={'2px'}
              margin={'1.5rem 0 0.3rem 0'}
            >
              BUS ARRIVAL TIMINGS
            </Typography>
            <Stack direction={'row'} flexWrap={'wrap'} gap={'0.5rem'}>
              {['3:30 PM', '6:30 PM', '8:00 PM', '10:00 PM'].map(t =>
                formData.departureTime === t ? (
                  <SelectedButton>{t}</SelectedButton>
                ) : (
                  <NormalButton
                    onClick={() => handleChange('departureTime', t)}
                  >
                    {t}
                  </NormalButton>
                )
              )}
            </Stack>
            <Typography
              fontWeight={600}
              fontSize={'12px'}
              letterSpacing={'2px'}
              margin={'1.5rem 0 0.3rem 0'}
            >
              BUS SCHEDULED DAYS
            </Typography>
            <Stack direction={'row'} gap={'0.5rem'} flexWrap={'wrap'}>
              {[
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
              ].map(t =>
                formData?.days.includes(t) ? (
                  <SelectedButton
                    onClick={() => {
                      handleChange(
                        'days',
                        formData.days.filter(day => day !== t)
                      );
                    }}
                  >
                    {t.slice(0, 3).toLocaleUpperCase()}
                  </SelectedButton>
                ) : (
                  <NormalButton
                    onClick={() => {
                      handleChange('days', [...formData.days, t]);
                    }}
                  >
                    {t.slice(0, 3).toLocaleUpperCase()}
                  </NormalButton>
                )
              )}
            </Stack>
            <Typography
              fontWeight={600}
              fontSize={'12px'}
              letterSpacing={'2px'}
              margin={'1.5rem 0 0.3rem 0'}
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
              <SubmitButton onClick={Submit}>Submit</SubmitButton>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
}
