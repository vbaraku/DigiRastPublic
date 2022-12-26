// material-ui
import { Typography, Input, InputLabel, Select, MenuItem, Box, FormControl, Divider, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import { useLanguage, useLanguageUpdate } from '../../LanguageContext';

// ==============================|| SAMPLE PAGE ||============================== //
export default function SamplePage() {
    const { language, dictionary } = useLanguage();
    const [organizationName, setOrganizationName] = React.useState('');
    const [VETType, setVETType] = React.useState('');
    const [size, setSize] = React.useState('');
    const [typeOfOrg, setTypeOfOrg] = React.useState('');
    const [country, setCountry] = React.useState('');
    const [jobPosition, setJobPosition] = React.useState('');
    const [workExp, setWorkExp] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [age, setAge] = React.useState('');

    const [displayJob, setDisplayJob] = React.useState('none');
    const [displayVet, setDisplayVet] = React.useState('none');
    const [displayCountry, setDisplayCountry] = React.useState('none');

    const cookies = new Cookies();
    const handleChange1 = (event) => {
        if(event.target.value==="Other"){
            setDisplayVet('');
            setVETType(event.target.value);
        }else{
            setDisplayVet('none');
            setVETType(event.target.value);
        }
    };
    const handleChange11 = (event) => {
        setVETType(event.target.value);
    };
    const handleChange2 = (event) => {
        setSize(event.target.value);
    };
    const handleChange3 = (event) => {
        setTypeOfOrg(event.target.value);
    };
    const handleChange4 = (event) => {
        if(event.target.value==="Other"){
            setDisplayCountry('');
            setCountry(event.target.value);
        }else {
            setDisplayCountry('none');
            setCountry(event.target.value);
        }
    };
    const handleChange41 = (event) => {
        setCountry(event.target.value);
    };
    const handleChange5 = (event) => {
        if(event.target.value==="Other"){
            setDisplayJob('');
            setJobPosition(event.target.value);
        }else{
            setDisplayJob('none');
            setJobPosition(event.target.value);
        }  
    };
    const handleChange51 = (event) => {
        setJobPosition(event.target.value);
    };
    const handleChange6 = (event) => {
        setWorkExp(event.target.value);
    };
    const handleChange7 = (event) => {
        setGender(event.target.value);
    };
    const handleChange8 = (event) => {
        setAge(event.target.value);
    };
    const handleChange0 = (event) => {
        setOrganizationName(event.target.value);
    };

    const navigate = useNavigate();
    const handleSubmit = async ( event ) => {
        event.preventDefault();
        try {
            const response = await axios.put('/api/user/', {
                "organizationName" : organizationName,
                "vetType": VETType,
                "size": size,
                "type": typeOfOrg,
                "country": country,
                "job": jobPosition,
                "workExp": workExp,
                "gender": gender,
                "age": age
            }).then(() => {
                axios.get('/api/user/is_registered').then((response) => {
                    cookies.set("isRegistered", response.data, { path: '/' });
                    window.location.replace('/home');
                });
            }
                );
            console.log(response);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <MainCard title={dictionary.registrationPage}>
            <Typography variant="body2">{dictionary.pleaseFillOrgInfo}</Typography>

            <Box sx={{ minWidth: 120, marginTop: 2 }}>
                <form onSubmit={handleSubmit}>
                    <FormControl fullWidth>
                        <TextField onChange={handleChange0} id="organizationname" label={dictionary.orgName} variant="outlined" />     
                    </FormControl>
                    <FormControl fullWidth sx={{ marginTop: 2 }}>
                        <InputLabel id="VET organization type" htmlFor="VET organization type">
                            {dictionary.VETOrgType}
                        </InputLabel>
                        <Select
                            required
                            labelId="VET organization type"
                            id="VET organization type"
                            value={VETType}
                            label={dictionary.VETOrgType}
                            onChange={handleChange1}
                        >
                            <MenuItem value="Initial vocational education and training institutions (IVET)">
                                {dictionary.IVET}
                            </MenuItem>
                            <MenuItem value="Continuing vocational education and training institutions (CVET)">
                            {dictionary.CVET}
                            </MenuItem>
                            <MenuItem value="Higher Education Institutions">{dictionary.HEI}</MenuItem>
                            <MenuItem value="Research & Development Institutions">{dictionary.RDI}</MenuItem>
                            <MenuItem value="Other">{dictionary.other}</MenuItem>
                            </Select>
                            <TextField sx={{marginTop: 1.5, marginLeft:1, display: displayVet}} onChange={handleChange11} id="outlined-basic" helperText={dictionary.pleaseSpecifyOtherOrg} variant="standard" />        
                    </FormControl>

                    <FormControl fullWidth sx={{ marginTop: 2 }}>
                        <InputLabel id="size" htmlFor="size">
                            {dictionary.size}
                        </InputLabel>
                        <Select required labelId="size" id="size" value={size} label={dictionary.size} onChange={handleChange2}>
                            <MenuItem value="Micro">{dictionary.micro}</MenuItem>
                            <MenuItem value="Small">{dictionary.small}</MenuItem>
                            <MenuItem value="Medium">{dictionary.medium}</MenuItem>
                            <MenuItem value="Large">{dictionary.large}</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth sx={{ marginTop: 2 }}>
                        <InputLabel id="typeOfOrg" htmlFor="typeOfOrg">
                            {dictionary.typeOfOrg}
                        </InputLabel>
                        <Select required labelId="typeOfOrg" id="typeOfOrg" value={typeOfOrg} label={dictionary.typeOfOrg} onChange={handleChange3}>
                            <MenuItem value="Public">{dictionary.public}</MenuItem>
                            <MenuItem value="Private">{dictionary.private}</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth sx={{ marginTop: 2 }}>
                        <InputLabel id="country" htmlFor="country">
                            {dictionary.country}
                        </InputLabel>
                        <Select required labelId="country" id="country" value={country} label={dictionary.country} onChange={handleChange4}>
                            <MenuItem value="Austria">{dictionary.austria}</MenuItem>
                            <MenuItem value="Belgium">{dictionary.belgium}</MenuItem>
                            <MenuItem value="Bulgaria">{dictionary.bulgaria}</MenuItem>
                            <MenuItem value="Croatia">{dictionary.croatia}</MenuItem>
                            <MenuItem value="Republic of Cyprus">{dictionary.cyprus}</MenuItem>
                            <MenuItem value="Czech Republic">{dictionary.czech}</MenuItem>
                            <MenuItem value="Denmark">{dictionary.denmark}</MenuItem>
                            <MenuItem value="Estonia">{dictionary.estonia}</MenuItem>
                            <MenuItem value="Finland">{dictionary.finland}</MenuItem>
                            <MenuItem value="France">{dictionary.france}</MenuItem>
                            <MenuItem value="Germany">{dictionary.germany}</MenuItem>
                            <MenuItem value="Greece">{dictionary.greece}</MenuItem>
                            <MenuItem value="Hungary">{dictionary.hungary}</MenuItem>
                            <MenuItem value="Ireland">{dictionary.ireland}</MenuItem>
                            <MenuItem value="Italy">{dictionary.italy}</MenuItem>
                            <MenuItem value="Latvia">{dictionary.latvia}</MenuItem>
                            <MenuItem value="Lithuania">{dictionary.lithuania}</MenuItem>
                            <MenuItem value="Luxembourg">{dictionary.luxembourg}</MenuItem>
                            <MenuItem value="Malta">{dictionary.malta}</MenuItem>
                            <MenuItem value="Netherlands">{dictionary.netherlands}</MenuItem>
                            <MenuItem value="Poland">{dictionary.poland}</MenuItem>
                            <MenuItem value="Portugal">{dictionary.portugal}</MenuItem>
                            <MenuItem value="Romania">{dictionary.romania}</MenuItem>
                            <MenuItem value="Slovakia">{dictionary.slovakia}</MenuItem>
                            <MenuItem value="Slovenia">{dictionary.slovenia}</MenuItem>
                            <MenuItem value="Spain">{dictionary.spain}</MenuItem>
                            <MenuItem value="Sweden">{dictionary.sweden}</MenuItem>
                            <MenuItem value="The United Kingdom">{dictionary.unitedKingdom}</MenuItem>
                            <MenuItem value="Other">{dictionary.other}</MenuItem>
                            
                        </Select>
                        <TextField sx={{marginTop: 1.5, marginLeft:1, display: displayCountry}} onChange={handleChange41} id="outlined-basic" helperText={dictionary.pleaseSpecifyOtherCountry} variant="standard" />
                    
                    </FormControl>

                    <Typography sx={{ marginTop: 4 }} variant="body2">
                        {dictionary.pleaseFillPersonalInfo}
                    </Typography>

                    <FormControl fullWidth sx={{ marginTop: 2 }}>
                        <InputLabel id="jobPosition" htmlFor="jobPosition">
                            {dictionary.jobPosition}
                        </InputLabel>
                        <Select required labelId="jobPosition" id="jobPosition" value={jobPosition} label={dictionary.jobPosition} onChange={handleChange5}>
                            <MenuItem value="Top management">{dictionary.topManagement}</MenuItem>
                            <MenuItem value="Middle management">{dictionary.middleManagement}</MenuItem>
                            <MenuItem value="Teaching / Training staff">{dictionary.teachingTraining}</MenuItem>
                            <MenuItem value="Research / Scientific staff">{dictionary.researchScientific}</MenuItem>
                            <MenuItem value="Administration staff">{dictionary.administration}</MenuItem>
                            <MenuItem value="Other">{dictionary.other}</MenuItem>  
                        </Select>
                        <TextField sx={{marginTop: 1.5, marginLeft:1, display: displayJob}} onChange={handleChange51} id="outlined-basic" helperText={dictionary.pleaseSpecifyOtherJob} variant="standard" />
                    </FormControl>

                    <FormControl fullWidth sx={{ marginTop: 2 }}>
                        <InputLabel id="workExp" htmlFor="workExp">
                            {dictionary.workExp}
                        </InputLabel>
                        <Select
                            required
                            labelId="workExp"
                            id="workExp"
                            value={workExp}
                            label={dictionary.workExp}
                            onChange={handleChange6}
                        >
                            <MenuItem value="Up to 1 year">{dictionary.year1}</MenuItem>
                            <MenuItem value="2-5 years">{dictionary.year25}</MenuItem>
                            <MenuItem value="6-10 years">{dictionary.year610}</MenuItem>
                            <MenuItem value="11-15 years">{dictionary.year1115}</MenuItem>
                            <MenuItem value="16-25 years">{dictionary.year1625}</MenuItem>
                            <MenuItem value="Over 26 years">{dictionary.year26}</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth sx={{ marginTop: 2 }}>
                        <InputLabel id="gender" htmlFor="gender">
                            {dictionary.gender}
                        </InputLabel>
                        <Select required labelId="gender" id="gender" value={gender} label={dictionary.gender} onChange={handleChange7}>
                            <MenuItem value="Female">{dictionary.female}</MenuItem>
                            <MenuItem value="Male">{dictionary.male}</MenuItem>
                            <MenuItem value="Prefer not to answer">{dictionary.preferNotToAnswer}</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth sx={{ marginTop: 2 }}>
                        <InputLabel id="age" htmlFor="age">
                            {dictionary.age}
                        </InputLabel>
                        <Select required labelId="age" id="age" value={age} label={dictionary.age} onChange={handleChange8}>
                            <MenuItem value="18-24">{dictionary.age1824}</MenuItem>
                            <MenuItem value="25-39">{dictionary.age2539}</MenuItem>
                            <MenuItem value="40-54">{dictionary.age4054}</MenuItem>
                            <MenuItem value="55 or more">{dictionary.age55}</MenuItem>
                        </Select>
                    </FormControl>
                    <Button sx={{marginTop: 2, width :"150px"}} variant="contained" type="submit" color='primary'>{dictionary.submit}</Button>
                </form>
            </Box>
        </MainCard>
    );
}
