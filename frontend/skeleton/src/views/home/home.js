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
        <MainCard title="Home - Project description">
            <Box style={{'text-align': 'left'}}>
            <div>
                <Typography variant="h1">
                The Digital Readiness Assessment Tool (DigiRAsT)
                </Typography>
                </div>
                <div style={{marginTop: 20}}>
                <Typography variant="body" sx={{fontSize : '15px'}}>
                - The Digital Readiness Assessment Tool (DigiRAsT) is a tool developed to provide quick assessments on digital readiness at course or organisational level based on user input. The scope of the tool is to act as a medium to assess the digital readiness in the Vocational Education and Training (VET) sector.
                </Typography>
                </div>
                <div style={{marginTop: 10}}>
                <Typography variant="body" sx={{fontSize : '15px', marginTop: 5}}>
                - The tool gives the opportunity to register an organisation and take part in a self-assessment test in 7 different thematic areas.
                </Typography>
                </div>
                <div style={{marginTop: 10}}>
                <Typography variant="body" sx={{fontSize : '15px', marginTop: 5}}>
                - Completing the self-assessment gives the option to view a graphical representation of the results and compare the digital level of the institution with other institutions from the country and the EU area. Among others it is possible to view overall results, a benchmarking of each of the 7 thematic areas and recommendations for areas for improvement. Furthermore, there is access to training opportunities for the thematic areas covered and a chance to retake the evaluation for the areas with low score (after implementing improvement actions).
                </Typography>
                </div>
                <Divider sx={{marginTop: 2, marginBottom: 2}}/>
                <div>
                <Typography variant="h1">
                Q4EDU EU project
                </Typography>
                </div>
                <div style={{marginTop: 20}}>
                <Typography variant="body" sx={{fontSize : '15px'}}>
                - The tool is developed within the framework of Q4EDU project. Q4EDU stands for QUALITY for Digital Readiness in VET. Q4EDU comprises 6 partners from 4 EU countries: Poland, Greece, Cyprus, and Italy.
                </Typography>
                </div>
                <div style={{marginTop: 10}}>
                <Typography variant="body" sx={{fontSize : '15px', marginTop: 5}}>
                - Q4EDU project aims to support VET institutions in their digitalization process, not only focusing on online tools, evaluation, and examination methods, but also devising a framework to assess the digital readiness at VET level.
                </Typography>
                </div>
                <div style={{marginTop: 10}}>
                <Typography variant="body" sx={{fontSize : '15px', marginTop: 5}}>
                - The project and its activities are mainly addressed to VET trainers, who want to be familiarised with high quality assessment of mixed/online/distance learning. Secondary target groups include VET providers (e.g. consultants, managers etc.), who want to evaluate the digital readiness of their organization. 
                </Typography>
                </div>
                <Divider sx={{marginTop: 2, marginBottom: 2}}/>
                <Typography variant='h5'>
                This project has been funded with support from the European Commission under the Erasmus+ Programme. The content of this tool reflects the views only of the authors, and the Commission cannot be held responsible for any use which may be made of the information contained therein.
                </Typography>
                <div style={{'minWidth': '278px', textAlign: 'center'}}><img width='100%' style={{'max-width': '400px'}} src={euLogo}></img></div>
            </Box>
            <Divider/>
            <Box style={{'text-align': 'center'}}>
            <Button style={{marginTop: '15px'}} variant="contained" onClick={()=>{navigate('/selfassess')}}>Begin assessment</Button>
            </Box>
        </MainCard>
    );
}
