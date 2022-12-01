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

// ==============================|| SAMPLE PAGE ||============================== //
export default function SelfAssess() {
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

    return (
        <MainCard title="Self-assessment - Home">
            <Typography style={{textAlign: 'left', marginBottom: 15, fontSize: '22px'}}>
            In this section 7 different thematic areas are presented. Please click on each one to start the test.
            </Typography>
            <Typography  style={{textAlign: 'left', marginBottom: 3, fontSize: '15px'}}> 
            1. Leadership & Governance Practices area refers to the leadership and governance practices in a VET organisation.
            </Typography>
            <Typography style={{textAlign: 'left', marginBottom: 3, fontSize: '15px'}}> 
            2. Teaching and Learning Practices area refers on the integration of new teaching and learning practices in the organisations. 
             </Typography>
            <Typography  style={{textAlign: 'left', marginBottom: 3, fontSize: '15px'}}> 
            3. Professional Development area refers to the continuous, comprehensive, and tailor-made professional development of employees of CVET institutions, which is needed for ensuring high-quality teaching and learning processes, especially in the digital age.
            </Typography>
            <Typography  style={{textAlign: 'left', marginBottom: 3, fontSize: '15px'}}> 
            4. Assessment practices area considers all actions to improve competences in the field of assessment practices in particular the context of their possible digitalisation.
            </Typography>
            <Typography  style={{textAlign: 'left', marginBottom: 3, fontSize: '15px'}}> 
            5. Content and Curricula area considers as the role and expectation of teaching staff in the digital age is changing, one of the important new role of teachers/trainers is the organisation of the virtual learning environment. 
            </Typography>
            <Typography  style={{textAlign: 'left', marginBottom: 3, fontSize: '15px'}}> 
            6. Collaboration and Networking area includes networks and digital learning technologies to support VET trainers, teachers and managers with all necessary tools, infrastructure, and support systems to develop a culture of connected learning necessary for digital learning environments.
            </Typography>
            <Typography  style={{textAlign: 'left', marginBottom: 3, fontSize: '15px'}}> 
            7. Infrastructure area investigates the question of how digital transformation can be applied to education as digital transformation is fundamental to every aspect of modern life.
            </Typography>
            <Divider style={{marginTop: 20, marginBottom: 20}} />
            {elements.map(({ category, value }) => {
                return (
                    <Button
                        onClick={() => handleRedirect(category)}
                        variant="contained"
                        sx={{ width: '100%', height: '60px', fontSize: '20px', marginBottom: '25px', backgroundColor: value !== 0 ? '#9AA497' : "primary" }}
                    >
                        {category}
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
