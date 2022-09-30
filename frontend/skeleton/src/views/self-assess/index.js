// material-ui
import { Typography, Input, InputLabel, Select, MenuItem, Box, FormControl, Divider, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import axios from 'axios';
import { useEffect } from 'react';


// ==============================|| SAMPLE PAGE ||============================== //
export default function SelfAssess() {

    const [answers, setAnswers] = useState({});
    
    useEffect(()=>{
        axios.get("/api/answers/average_thematic", {params:{self:true}}).then((response)=>{
            setAnswers(response.data);
            console.log(Object.entries(response.data));
        })
    },[]);



    const navigate = useNavigate();

    const handleRedirect = (page) => {
        switch(page){
            case "Professional Development":
                navigate("/selfassess/professionaldevelopment");
                break;
            case "Teaching and Learning Practices":
                navigate("/selfassess/teachingandlearningpractices");
                break;
            case "Infrastructure":
                navigate("/selfassess/infrastructure");
                break;
            case "Assessment practices":
                navigate("/selfassess/assessmentpractices");
                break;
            case "Content and Curricula":
                navigate("/selfassess/contentandcurricula");
                break;
            case "Collaboration and Networking":
                navigate("/selfassess/collaborationandnetworking");
                break;
            case "Leadership & Governance Practices":
                navigate("/selfassess/leadershipandgovernancepractices");
                break;
        }

    }

    return (
        <MainCard title="Self-assessment - Home">
            {
                Object.entries(answers).map(([key,value],index)=>{
                    return (
                        <Button disabled ={value !== 0} onClick={()=>handleRedirect(key)} variant="contained" sx={{width: "100%", height: "60px", fontSize: "20px", marginBottom: "25px"}}>{key}</Button>
                    )
                }
                )
            }
            {/* <Button onClick={handleClick1} variant="contained" sx={{width: "100%", height: "60px", fontSize: "20px", marginBottom: "25px"}}>Leadership & Governance Practices</Button>
            <Button onClick={handleClick2} variant="contained" sx={{width: "100%", height: "60px", fontSize: "20px", marginBottom: "25px"}}>Teaching and Learning Practices</Button>
            <Button onClick={handleClick3} variant="contained" sx={{width: "100%", height: "60px", fontSize: "20px", marginBottom: "25px"}}>Professional Development</Button>
            <Button onClick={handleClick4} variant="contained" sx={{width: "100%", height: "60px", fontSize: "20px", marginBottom: "25px"}}>Assessment practices</Button>
            <Button onClick={handleClick5} variant="contained" sx={{width: "100%", height: "60px", fontSize: "20px", marginBottom: "25px"}}>Content and Curricula</Button>
            <Button onClick={handleClick6} variant="contained" sx={{width: "100%", height: "60px", fontSize: "20px", marginBottom: "25px"}}>Collaboration and Networking</Button>
            <Button onClick={handleClick7} variant="contained" sx={{width: "100%", height: "60px", fontSize: "20px", marginBottom: "25px"}}>Infrastructure</Button> */}
        </MainCard>
    );
}
