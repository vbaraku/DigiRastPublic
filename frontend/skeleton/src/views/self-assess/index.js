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
        { category: dictionary.leadershipAndGovernance, value: 0 },
        { category: dictionary.teachingAndLearning, value: 0 },
        { category: dictionary.professionalDevelopment, value: 0 },
        { category: dictionary.assessmentPractices, value: 0 },
        { category: dictionary.contentAndCurricula, value: 0 },
        { category: dictionary.collaborationAndNetworking, value: 0 },
        { category: dictionary.infrastructure, value: 0 }
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
            case dictionary.leadershipAndGovernance:
                navigate('/selfassess/leadershipandgovernancepractices');
                break;
            case dictionary.teachingAndLearning:
                navigate('/selfassess/teachingandlearningpractices');
                break;
            case dictionary.professionalDevelopment:
                navigate('/selfassess/professionaldevelopment');
                break;
            case dictionary.assessmentPractices:
                navigate('/selfassess/assessmentpractices');
                break;
            case dictionary.contentAndCurricula:
                navigate('/selfassess/contentandcurricula');
                break;
            case dictionary.collaborationAndNetworking:
                navigate('/selfassess/collaborationandnetworking');
                break;
            case dictionary.infrastructure:
                navigate('/selfassess/infrastructure');
                break;
        }
    };

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
                        sx={{ width: '100%', height: '60px', fontSize: '20px', marginBottom: '25px', backgroundColor: value > 0 ? '#9AA497' : "primary" }}
                    >
                        {++index}. {category}
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
