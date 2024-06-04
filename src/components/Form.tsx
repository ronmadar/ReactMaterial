import * as React from 'react';
import { TextField, Button } from '@mui/material';
import Typography from '@mui/material/Typography';

interface FormProps { }

const Form: React.FC<FormProps> = () => {

  const [lastEmail, setLastEmail] = React.useState(''); // State to store last email

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastEmail(event.target.value); // Update state on email change
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior
    const emailElement = event.currentTarget?.elements?.namedItem('email');
    const newEmail = emailElement instanceof HTMLInputElement ? emailElement.value : '';

    if (newEmail.trim() !== '') { // Check if email is not empty
      setLastEmail(newEmail);
    }
  };

  return (
    <div className='form-wrap'>
      <Typography variant="h2" component="h2">
        Form Component
      </Typography>
      <form className='form-component' onSubmit={handleSubmit}>
        <TextField 
          label="Email" 
          type="email" 
          variant="outlined"
          margin="normal" 
          fullWidth 
          required 
          value={lastEmail}
          onChange={handleEmailChange} 
          />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
      {lastEmail.trim() !== '' && ( // Only display if lastEmail is not empty
        <Typography variant="body1" component="p">
           {lastEmail}
        </Typography>
      )}
    </div>
  );
};

export default Form;
