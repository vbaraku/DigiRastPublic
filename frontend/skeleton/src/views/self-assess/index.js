// material-ui
import { Typography, Input, InputLabel, Select, MenuItem, Box, FormControl, Divider, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import axios from 'axios';
import { useEffect } from 'react';
import { useLanguage, useLanguageUpdate } from '../../LanguageContext';

// ==============================|| SAMPLE PAGE ||============================== //
export default function SelfAssess() {
    const { language, dictionary } = useLanguage();
    const [answers, setAnswers] = useState({});
    // const elements = [["Leadership & Governance Practices" , 0], ["Teaching and Learning Practices", 0], ["Professional Development", 0],
    // ["Assessment practices", 0], ["Content and Curricula", 0], ["Collaboration and Networking", 0], ["Infrastructure", 0]]
    const [elements, setElements] = useState([ 
        { category: 'Leadership & Governance Practices', value: 0 },
        { category: 'Teaching and Learning Practices', value: 0 },
        { category: 'Professional Development', value: 0 },
        { category: 'Assessment practices', value: 0 },
        { category: 'Content and Curricula', value: 0 },
        { category: 'Collaboration and Networking', value: 0 },
        { category: 'Infrastructure', value: 0 }
    ]);
    useEffect(() => {
        axios.get('/api/answers/average_thematic', { params: { self: true } }).then((response) => {
            let newElements = elements.map( el => {
                return {...el, value: response.data[el.category]}
                })
            setElements(newElements)
            console.log("new elements")
            console.log(newElements);
        });
    }, []);

    const navigate = useNavigate();

    const handleRedirect = (page) => {
        switch (page) {
            case 'Leadership & Governance Practices':
                navigate('/selfassess/leadershipandgovernancepractices');
                break;
            case 'Teaching and Learning Practices':
                navigate('/selfassess/teachingandlearningpractices');
                break;
            case 'Professional Development':
                navigate('/selfassess/professionaldevelopment');
                break;
            case 'Assessment practices':
                navigate('/selfassess/assessmentpractices');
                break;
            case 'Content and Curricula':
                navigate('/selfassess/contentandcurricula');
                break;
            case 'Collaboration and Networking':
                navigate('/selfassess/collaborationandnetworking');
                break;
            case 'Infrastructure':
                navigate('/selfassess/infrastructure');
                break;
        }
    };

    function convertThematic(element) {
        if (element === 'Leadership & Governance Practices') {
            return dictionary.leadershipAndGovernance;
        } else if (element === 'Teaching and Learning Practices') {
            return dictionary.teachingAndLearning;
        } else if (element === 'Professional Development') {
            return dictionary.professionalDevelopment;
        } else if (element === 'Assessment practices') {
            return dictionary.assessmentPractices;
        } else if (element === 'Content and Curricula') {
            return dictionary.contentAndCurricula;
        } else if (element === 'Collaboration and Networking') {
            return dictionary.collaborationAndNetworking;
        } else if (element === 'Infrastructure') {
            return dictionary.infrastructure;
        }
    }

    return (
        <MainCard title={dictionary.selfAssessHome}>
            <Typography style={{textAlign: 'left', marginBottom: 15, fontSize: '22px'}}>
            {dictionary.selfAssessInfo1}
            </Typography>
            <Typography  style={{textAlign: 'left', marginBottom: 3, fontSize: '15px'}}> 
            {dictionary.selfAssessArea1}
            </Typography>
            <Typography style={{textAlign: 'left', marginBottom: 3, fontSize: '15px'}}>
            {dictionary.selfAssessArea2}
            </Typography>
            <Typography  style={{textAlign: 'left', marginBottom: 3, fontSize: '15px'}}> 
            {dictionary.selfAssessArea3}
            </Typography>
            <Typography  style={{textAlign: 'left', marginBottom: 3, fontSize: '15px'}}>
            {dictionary.selfAssessArea4}
            </Typography>
            <Typography  style={{textAlign: 'left', marginBottom: 3, fontSize: '15px'}}>
            {dictionary.selfAssessArea5}
            </Typography>
            <Typography  style={{textAlign: 'left', marginBottom: 3, fontSize: '15px'}}>
            {dictionary.selfAssessArea6}
            </Typography>
            <Typography  style={{textAlign: 'left', marginBottom: 3, fontSize: '15px'}}>
            {dictionary.selfAssessArea7}
            </Typography>
            <Divider style={{marginTop: 20, marginBottom: 20}} />
            {elements.map(({ category, value }, index) => {
                return (
                    <Button
                        onClick={() => handleRedirect(category)}
                        variant="contained"
                        sx={{ textTransform: 'none', width: '100%', height: '60px', fontSize: '20px', marginBottom: '25px', backgroundColor: value > 0 ? '#9AA497' : "primary" }}
                    >
                        {++index}. {convertThematic(category)}
                    </Button>
                );
            })}
            {/* <Button onClick={() => navigate('/selfassess/leadershipandgovernancepractices')} variant="contained" sx={{width: "100%", height: "60px", fontSize: "20px", marginBottom: "25px"}}>Leadership & Governance Practices</Button>
            <Button onClick={() => navigate('/selfassess/teachingandlearningpractices')} variant="contained" sx={{width: "100%", height: "60px", fontSize: "20px", marginBottom: "25px"}}>Teaching and Learning Practices</Button>
            <Button onClick={() => navigate('/selfassess/professionaldevelopment')} variant="contained" sx={{width: "100%", height: "60px", fontSize: "20px", marginBottom: "25px"}}>Professional Development</Button>
            <Button onClick={() => navigate('/selfassess/assessmentpractices')} variant="contained" sx={{width: "100%", height: "60px", fontSize: "20px", marginBottom: "25px"}}>Assessment practices</Button>
            <Button onClick={() => navigate('/selfassess/contentandcurricula')} variant="contained" sx={{width: "100%", height: "60px", fontSize: "20px", marginBottom: "25px"}}>Content and Curricula</Button>
            <Button onClick={() => navigate('/selfassess/collaborationandnetworking')} variant="contained" sx={{width: "100%", height: "60px", fontSize: "20px", marginBottom: "25px"}}>Collaboration and Networking</Button>
            <Button onClick={() => navigate('/selfassess/infrastructure')} variant="contained" sx={{width: "100%", height: "60px", fontSize: "20px", marginBottom: "25px"}}>Infrastructure</Button> */}
        </MainCard>
    );
}
