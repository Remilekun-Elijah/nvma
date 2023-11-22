import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { Typography, Grid } from '@mui/material';
import 'react-phone-input-2/lib/material.css';
import './phoneInput.css';

const PhoneNumberInput = ({ phoneNo, setPhoneNo, error, inputStyle = {}, ...other}) => {
    const [phoneNumber, setPhoneNumber] = useState(phoneNo);

    const handleChange = phoneNumber => {
        setPhoneNumber(phoneNumber);
        setPhoneNo(phoneNumber);
    };

    return (
        <Grid>
            <PhoneInput
            {...other}
                inputClass={'input--text'}
                country={'ng'}
                placeholder="812-223-344-1"
                specialLabel=''
                value={phoneNumber || ''}
                inputProps={{ required: true, name: 'phoneNumber' }}
                onChange={phone => handleChange(phone)}
                isValid={!error}
                countryCodeEditable={false}
                inputStyle={inputStyle}
            />
            {error && <Typography className={'bg-white pt-1 text-left text-[0.75rem] px-[14px] leading-[1.66] font-normal'} color='error'>{error}</Typography>}
        </Grid>
    );
};

export default PhoneNumberInput;
