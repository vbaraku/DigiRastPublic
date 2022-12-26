// material-ui
import { Typography, Input, InputLabel, Select, MenuItem, Box, FormControl, Divider, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import euLogo from 'assets/images/Cofound_EU_logo.png';
import { useNavigate } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { useLanguage, useLanguageUpdate } from '../../LanguageContext';
// ==============================|| SAMPLE PAGE ||============================== //
export default function Home() {
    const theme = useTheme();
    const navigate = useNavigate();
    const { language, dictionary } = useLanguage();
    /* eslint-disable */

    return (
        <MainCard title={dictionary.homeProjDesc}>
            <Box style={{'text-align': 'left'}}>
            <div>
                <Typography variant="h1">
                {dictionary.digiRast}
                </Typography>
                </div>
                <div style={{marginTop: 20}}>
                <Typography variant="body" sx={{fontSize : '15px'}}>
                {dictionary.digiRastInfo1}
                </Typography>
                </div>
                <div style={{marginTop: 10}}>
                <Typography variant="body" sx={{fontSize : '15px', marginTop: 5}}>
                {dictionary.digiRastInfo2}
                </Typography>
                </div>
                <div style={{marginTop: 10}}>
                <Typography variant="body" sx={{fontSize : '15px', marginTop: 5}}>
                {dictionary.digiRastInfo3}
                </Typography>
                </div>
                <Divider sx={{marginTop: 2, marginBottom: 2}}/>
                <div>
                <Typography variant="h1">
                {dictionary.q4edu}
                </Typography>
                </div>
                <div style={{marginTop: 20}}>
                <Typography variant="body" sx={{fontSize : '15px'}}>
                {dictionary.q4eduInfo1}
                </Typography>
                </div>
                <div style={{marginTop: 10}}>
                <Typography variant="body" sx={{fontSize : '15px', marginTop: 5}}>
                {dictionary.q4eduInfo2}
                </Typography>
                </div>
                <div style={{marginTop: 10}}>
                <Typography variant="body" sx={{fontSize : '15px', marginTop: 5}}>
                {dictionary.q4eduInfo3}
                </Typography>
                </div>
                <Divider sx={{marginTop: 2, marginBottom: 2}}/>
                <Typography variant='h5'>
                {dictionary.fundedBy}
                </Typography>
                <div style={{'minWidth': '278px', textAlign: 'center'}}><img width='100%' style={{'max-width': '400px'}} src={euLogo}></img></div>
            </Box>
            <Divider/>
            <Box style={{'text-align': 'center'}}>
            <Button style={{marginTop: '15px'}} variant="contained" onClick={()=>{navigate('/selfassess')}}>{dictionary.beginAssessment}</Button>
            </Box>
        </MainCard>
    );
}
