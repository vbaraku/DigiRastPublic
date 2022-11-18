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
import { useNavigate } from 'react-router-dom';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import axios from 'axios';
import QuestionToolTip from './questiontooltip';

// ==============================|| SAMPLE PAGE ||============================== //
const AssessSection = ({ thematicElement, nextPage }) => {
    const [questions, setQuestions] = React.useState([]);
    const [answers, setAnswers] = React.useState([]);
    const [subElements, setSubElements] = React.useState([]);
    const navigate = useNavigate();

    function getSubElements(data) {
        //for each unique subelement from data array, add to the subelements array
        let subElementsArray = [];
        data.forEach((element) => {
            if (!subElementsArray.includes(element.subElement)) {
                subElementsArray.push(element.subElement);
            }
        });
        setSubElements(subElementsArray);
    }

    const getQuestions = async () => {
        try {
            const response = await axios.get(`/api/questions?thematicElement=${thematicElement}`);
            setQuestions(response.data);
            getSubElements(response.data);
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
            const response = await axios.post('/api/answers/bulk_submit ', answers);
            if (nextPage == 'graphs') {
                navigate('/graphs');
            } else {
                navigate('/selfassess/' + nextPage);
            }
            location.reload();
        } catch (err) {
            alert('Something went wrong. Error: ' + err);
            console.error(err);
        }
    };

    const handleChange = (event, questionId) => {
        let arr = [...answers];
        let index = arr.findIndex((answer) => answer.question === questionId);
        if (index === -1) {
            arr.push({ question: questionId, rating: event.target.value });
        } else {
            arr[index].rating = event.target.value;
        }
        setAnswers(arr);
        console.log(arr);
    };

    return (
        <MainCard title={`Self-assessment - ${thematicElement}`}>
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
            <Typography variant="h4" sx={{ mb: '10px', mt: '10px' }}>
                The following questions assess these sub-elements:
            </Typography>
            {subElements.map((subElement, index) => (
                <Typography key={index} sx={{fontSize: 14, margin: 2}}> - {subElement}</Typography>
            ))}
            <Divider />
            <Box sx={{ minWidth: 120, marginTop: 2, textAlign: 'center' }}>
                <form onSubmit={handleSubmit}>
                    {questions.map((element, index) => (
                        <FormControl key={element.id} fullWidth sx={{ mb: 5 }}>
                            <FormLabel id="id" style={{ color: 'black', fontSize: '20px' }}>
                                {++index}. {element.statement}
                                <QuestionToolTip explanation={element.explanation} />
                            </FormLabel>
                            <RadioGroup
                                sx={{ margin: 'auto' }}
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                onChange={(event) => handleChange(event, element.id)}
                            >
                                <FormControlLabel labelPlacement="bottom" value="1" control={<Radio />} label="1" />
                                <FormControlLabel labelPlacement="bottom" value="2" control={<Radio />} label="2" />
                                <FormControlLabel labelPlacement="bottom" value="3" control={<Radio />} label="3" />
                                <FormControlLabel labelPlacement="bottom" value="4" control={<Radio />} label="4" />
                                <FormControlLabel labelPlacement="bottom" value="5" control={<Radio />} label="5" />
                            </RadioGroup>
                        </FormControl>
                    ))}

                    <Button
                        sx={{ marginTop: 2, width: '150px' }}
                        disabled={answers.length != questions.length}
                        variant="contained"
                        type="submit"
                        color="primary"
                    >
                        Submit
                    </Button>
                </form>
            </Box>
        </MainCard>
    );
};
export default AssessSection;
