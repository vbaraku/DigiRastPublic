// material-ui
import { Typography, Input, InputLabel, Select, MenuItem, Box, FormControl, Divider, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

// ==============================|| SAMPLE PAGE ||============================== //
export default function SamplePage() {
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
                    // navigate('/home', { replace: true });
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
        <MainCard title="Registration page">
            <Typography variant="body2">Please fill in your organizational information:</Typography>

            <Box sx={{ minWidth: 120, marginTop: 2 }}>
                <form onSubmit={handleSubmit}>
                <FormControl fullWidth>
                        <InputLabel id="Organization name" htmlFor="Organization name">
                            Organization name:
                        </InputLabel>
                        <TextField onChange={handleChange0} id="organizationname" variant="outlined" />
                            
                    </FormControl>
                    <FormControl fullWidth sx={{ marginTop: 2 }}>
                        <InputLabel id="VET organization type" htmlFor="VET organization type">
                            VET organization type:
                        </InputLabel>
                        <Select
                            required
                            labelId="VET organization type"
                            id="VET organization type"
                            value={VETType}
                            label="VET organization type:"
                            onChange={handleChange1}
                        >
                            <MenuItem value="Initial vocational education and training institutions (IVET)">
                                Initial vocational education and training institutions (IVET)
                            </MenuItem>
                            <MenuItem value="Continuing vocational education and training institutions (CVET)">
                                Continuing vocational education and training institutions (CVET)
                            </MenuItem>
                            <MenuItem value="Higher Education Institutions">Higher Education Institutions</MenuItem>
                            <MenuItem value="Research & amp; Development Institutions">Research & Development Institutions</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                            </Select>
                            <TextField sx={{marginTop: 1.5, marginLeft:1, display: displayVet}} onChange={handleChange11} id="outlined-basic" helperText=" Please specify other organization type" variant="standard" />
                        
                    </FormControl>

                    <FormControl fullWidth sx={{ marginTop: 2 }}>
                        <InputLabel id="size" htmlFor="size">
                            Size:
                        </InputLabel>
                        <Select required labelId="size" id="size" value={size} label="Size:" onChange={handleChange2}>
                            <MenuItem value="Micro">Micro: employment up to 9 persons</MenuItem>
                            <MenuItem value="Small">Small: 10-50 employers</MenuItem>
                            <MenuItem value="Medium">Medium: 51-250 employers</MenuItem>
                            <MenuItem value="Large">Large: over 251 employers</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth sx={{ marginTop: 2 }}>
                        <InputLabel id="typeOfOrg" htmlFor="typeOfOrg">
                            Type of organization:
                        </InputLabel>
                        <Select required labelId="typeOfOrg" id="typeOfOrg" value={typeOfOrg} label="Type of organization:" onChange={handleChange3}>
                            <MenuItem value="Public">Public</MenuItem>
                            <MenuItem value="Private">Private</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth sx={{ marginTop: 2 }}>
                        <InputLabel id="country" htmlFor="country">
                            Country:
                        </InputLabel>
                        <Select required labelId="country" id="country" value={country} label="Country:" onChange={handleChange4}>
                            <MenuItem value="Austria">Austria</MenuItem>
                            <MenuItem value="Belgium">Belgium</MenuItem>
                            <MenuItem value="Bulgaria">Bulgaria</MenuItem>
                            <MenuItem value="Croatia">Croatia</MenuItem>
                            <MenuItem value="Republic of Cyprus">Republic of Cyprus</MenuItem>
                            <MenuItem value="Czech Republic">Czech Republic</MenuItem>
                            <MenuItem value="Denmark">Denmark</MenuItem>
                            <MenuItem value="Estonia">Estonia</MenuItem>
                            <MenuItem value="Finland">Finland</MenuItem>
                            <MenuItem value="France">France</MenuItem>
                            <MenuItem value="Germany">Germany</MenuItem>
                            <MenuItem value="Greece">Greece</MenuItem>
                            <MenuItem value="Hungary">Hungary</MenuItem>
                            <MenuItem value="Ireland">Ireland</MenuItem>
                            <MenuItem value="Italy">Italy</MenuItem>
                            <MenuItem value="Latvia">Latvia</MenuItem>
                            <MenuItem value="Lithuania">Lithuania</MenuItem>
                            <MenuItem value="Luxembourg">Luxembourg</MenuItem>
                            <MenuItem value="Malta">Malta</MenuItem>
                            <MenuItem value="Netherlands">Netherlands</MenuItem>
                            <MenuItem value="Poland">Poland</MenuItem>
                            <MenuItem value="Portugal">Portugal</MenuItem>
                            <MenuItem value="Romania">Romania</MenuItem>
                            <MenuItem value="Slovakia">Slovakia</MenuItem>
                            <MenuItem value="Slovenia">Slovenia</MenuItem>
                            <MenuItem value="Spain">Spain</MenuItem>
                            <MenuItem value="Sweden">Sweden</MenuItem>
                            <MenuItem value="The United Kingdom">The United Kingdom</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                            
                        </Select>
                        <TextField sx={{marginTop: 1.5, marginLeft:1, display: displayCountry}} onChange={handleChange41} id="outlined-basic" helperText=" Please specify other country" variant="standard" />
                    
                    </FormControl>

                    <Typography sx={{ marginTop: 4 }} variant="body2">
                        Please fill in your personal information:
                    </Typography>

                    <FormControl fullWidth sx={{ marginTop: 2 }}>
                        <InputLabel id="jobPosition" htmlFor="jobPosition">
                            Job position:
                        </InputLabel>
                        <Select required labelId="jobPosition" id="jobPosition" value={jobPosition} label="Job position:" onChange={handleChange5}>
                            <MenuItem value="Top management">Top management</MenuItem>
                            <MenuItem value="Middle management">Middle management</MenuItem>
                            <MenuItem value="Specialist">Specialist</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>  
                        </Select>
                        <TextField sx={{marginTop: 1.5, marginLeft:1, display: displayJob}} onChange={handleChange51} id="outlined-basic" helperText=" Please specify other job position" variant="standard" />
                    </FormControl>

                    <FormControl fullWidth sx={{ marginTop: 2 }}>
                        <InputLabel id="workExp" htmlFor="workExp">
                            Work experience in current organisation:
                        </InputLabel>
                        <Select
                            required
                            labelId="workExp"
                            id="workExp"
                            value={workExp}
                            label="Work experience in current organisation:"
                            onChange={handleChange6}
                        >
                            <MenuItem value="Up to 1 year">Up to 1 year</MenuItem>
                            <MenuItem value="2-5 years">2-5 years</MenuItem>
                            <MenuItem value="6-10 years">6-10 years</MenuItem>
                            <MenuItem value="11-15 years">11-15 years</MenuItem>
                            <MenuItem value="16-25 years">16-25 years</MenuItem>
                            <MenuItem value="Over 26 years">Over 26 years</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth sx={{ marginTop: 2 }}>
                        <InputLabel id="gender" htmlFor="gender">
                            Gender
                        </InputLabel>
                        <Select required labelId="gender" id="gender" value={gender} label="Gender:" onChange={handleChange7}>
                            <MenuItem value="Female">Female</MenuItem>
                            <MenuItem value="Male">Male</MenuItem>
                            <MenuItem value="Prefer not to answer">Prefer not to answer</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth sx={{ marginTop: 2 }}>
                        <InputLabel id="age" htmlFor="age">
                            Age
                        </InputLabel>
                        <Select required labelId="age" id="age" value={age} label="Age:" onChange={handleChange8}>
                            <MenuItem value="18-24">18-24</MenuItem>
                            <MenuItem value="25-39">25-39</MenuItem>
                            <MenuItem value="40-54">40-54</MenuItem>
                            <MenuItem value="55 or more">55 or more</MenuItem>
                        </Select>
                    </FormControl>
                    <Button sx={{marginTop: 2, width :"150px"}} variant="contained" type="submit" color='primary'>Submit</Button>
                </form>
            </Box>
        </MainCard>
    );
}
