// material-ui
import { Typography, Input, InputLabel, Select, MenuItem, Box, FormControl, Divider, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import euLogo from 'assets/images/Cofound_EU_logo.png';
import { useNavigate } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';

// project imports
import MainCard from 'ui-component/cards/MainCard';
// ==============================|| SAMPLE PAGE ||============================== //
export default function Home() {
    const theme = useTheme();
    const navigate = useNavigate();
    /* eslint-disable */

    return (
        <MainCard title="Home">
            <Box style={{'text-align': 'center'}}>
                <div style={{'minWidth': '278px'}}><img width='100%' style={{'max-width': '400px'}} src={euLogo}></img></div>
                <Typography variant='h5'>
                This project has been funded with support from the European Commission under the Erasmus+ Programme. The content of this tool reflects the views only of the authors, and the Commission cannot be held responsible for any use which may be made of the information contained therein.
                </Typography>
                
            </Box>
            <Divider/>
            <Box style={{'text-align': 'center'}}>
            <Button style={{marginTop: '15px'}} variant="contained" onClick={()=>{navigate('/selfassess')}}>Begin assessment</Button>
            </Box>
        </MainCard>
    );
}
