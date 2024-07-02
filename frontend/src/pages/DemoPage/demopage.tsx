import React, {useState} from 'react';
import {Container, TextField, Button, Typography, Box} from '@mui/material';
import axios from 'axios';

const DecryptionForm = () => {
  const [encryptedData, setEncryptedData] = useState('');
  const [decryptedData, setDecryptedData] = useState('');
  const [error, setError] = useState('');

  const handleDecrypt = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/ticket-scanner/scan`,
        {
          encryptedData,
        },
        {
          withCredentials: true,
        }
      );
      setDecryptedData(response.data);
      setError('');
    } catch (err) {
      setError('Failed to decrypt data');
      setDecryptedData('');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Decrypt Ticket Data
        </Typography>
        <TextField
          label="Encrypted Data"
          variant="outlined"
          fullWidth
          margin="normal"
          value={encryptedData}
          onChange={e => setEncryptedData(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleDecrypt}>
          Decrypt
        </Button>
        {decryptedData && (
          <Box mt={2}>
            <Typography variant="h6" component="h2">
              Decrypted Data:
            </Typography>
            <Typography variant="body1">
              {JSON.stringify(decryptedData, null, 2)}
            </Typography>
          </Box>
        )}
        {error && (
          <Box mt={2}>
            <Typography variant="body1" color="error">
              {error}
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default DecryptionForm;
