// material-ui
import {
    Typography,
    Input,
    InputLabel,
    Select,
    MenuItem,
    Box,
    FormControl,
    Divider,
    Button,
    TextField,
    FormLabel,
    FormControlLabel,
    RadioGroup,
    Radio,
    IconButton,
    ClickAwayListener
} from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import axios from 'axios';
import QuestionToolTip from './questiontooltip';

// ==============================|| SAMPLE PAGE ||============================== //
export default function Professional() {
    const [questions, setQuestions] = React.useState([]);

    const getQuestions = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/questions?thematicElement=Professional Development');
            console.log(response);
            console.log(response.data);
            setQuestions(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getQuestions();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put('http://localhost:8080/api/user/6', {});
            console.log(response);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <MainCard title="Self-assessment - Professional Development">
            {/* <Button variant="outlined" startIcon={<ArrowBackIcon />} sx={{mb:1, mt: -1}}>
                Home
            </Button> */}
            <Typography variant="h3" sx={{ mb: '15px' }}>
                To what extent are the statements true / appropriate for your organization?
            </Typography>
            <Typography variant="h4" sx={{ mb: '10px' }}>
                Scale for answers from 1 to 5
            </Typography>
            <Typography variant="h5">1 - Not applicable at all / Doesn’t exist in the organisation,</Typography>
            <Typography variant="h5" sx={{ mb: '10px' }}>
                5 - Fully applicable / Exist in organization in all areas
            </Typography>
            <Divider />
            <Box sx={{ minWidth: 120, marginTop: 2, textAlign: 'center' }}>
                <form onSubmit={handleSubmit}>
                    {questions.map((element) => 
                        (
                            <FormControl key={element.id} fullWidth sx={{ mb: 5 }}>
                                    <FormLabel id="id" style={{ color: 'black', 'font-size': '20px' }}>
                                        {element.statement}
                                        <QuestionToolTip explanation={element.explanation}/>
                                    </FormLabel>
                                <RadioGroup
                                    sx={{ margin: 'auto' }}
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel labelPlacement="bottom" value="1" control={<Radio />} label="1" />
                                    <FormControlLabel labelPlacement="bottom" value="2" control={<Radio />} label="2" />
                                    <FormControlLabel labelPlacement="bottom" value="3" control={<Radio />} label="3" />
                                    <FormControlLabel labelPlacement="bottom" value="4" control={<Radio />} label="4" />
                                    <FormControlLabel labelPlacement="bottom" value="5" control={<Radio />} label="5" />
                                </RadioGroup>
                            </FormControl>
                        )
                    )}

                    <Button sx={{ marginTop: 2, width: '150px' }} variant="contained" type="submit" color="primary">
                        Submit
                    </Button>
                </form>
            </Box>
        </MainCard>
    );
}
