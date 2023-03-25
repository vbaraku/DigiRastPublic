// material-ui
import { Typography, Input, InputLabel, Select, MenuItem, Box, FormControl, Divider, Button, TextField, IconButton } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import BarChartIcon from '@mui/icons-material/BarChart';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import ClearIcon from '@mui/icons-material/Clear';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import BusinessIcon from '@mui/icons-material/Business';

import { useTheme } from '@mui/material/styles';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import axios from 'axios';
import MyResponsiveRadar from './myresponsiveradar';
import { ResponsiveRadar } from '@nivo/radar';
import { ResponsiveLine } from '@nivo/line';
import RevenueCard from 'ui-component/cards/RevenueCard';
import QuestionToolTip from '../self-assess/questiontooltip';
import { useLanguage, useLanguageUpdate } from '../../LanguageContext';
import { func } from 'prop-types';

// ==============================|| SAMPLE PAGE ||============================== //
export default function Graphs() {
    const { language, dictionary } = useLanguage();
    const theme = useTheme();
    /* eslint-disable */
    const [yourData, setYourData] = React.useState(0);
    const [averageData, setAverageData] = React.useState(0);
    const [averageOrgData, setAverageOrgData] = React.useState(0);
    const [completed, setCompleted] = React.useState(0);
    const [message, setMessage] = React.useState('');
    const message2 = dictionary.graphMsg0;

    const [yourThematic, setYourThematic] = React.useState({});
    const [averageThematic, setAverageThematic] = React.useState({});

    const [countries, setCountries] = React.useState([]);

    const [VETType, setVETType] = React.useState(null);
    const [size, setSize] = React.useState(null);
    const [country, setCountry] = React.useState(null);

    const [displayVet, setDisplayVet] = React.useState('none');
    const [displayCountry, setDisplayCountry] = React.useState('none');

    const handleChange1 = (event) => {
        if (event.target.value === 'Other') {
            setDisplayVet('');
            console.log(displayVet);
        }
        setVETType(event.target.value);
    };
    const handleChange2 = (event) => {
        setSize(event.target.value);
    };
    const handleChange3 = (event) => {
        if (event.target.value === 'Other') {
            setDisplayCountry('');
        }
        setCountry(event.target.value);
    };

    const handeFilter = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get('api/answers/average_thematic', {
                params: { country: country, size: size, vetType: VETType }
            });
            const response2 = await axios.get('api/answers/completed', { params: { country: country, size: size, vetType: VETType } });
            console.log(response);
            setAverageThematic(response.data);
            setCompleted(response2.data);
            console.log(yourThematic);
        } catch (err) {
            console.error(err);
        }
    };

    const resetFilters = async () => {
        try {
            const response = await axios.get('api/answers/average_thematic');
            const response2 = await axios.get('api/answers/completed');
            setAverageThematic(response.data);
            setCompleted(response2.data);
            setSize(null);
            setCountry(null);
            setVETType(null);
        } catch (err) {
            console.error(err);
        }
    };

    const getYourData = async () => {
        try {
            const response = await axios.get('api/answers/average', { params: { self: true } });
            setYourData(response.data);
            if(response.data < 3){
                setMessage(dictionary.graphMsg1);
            } else if(response.data < 4){
                setMessage(dictionary.graphMsg2);
            } else {
                setMessage(dictionary.graphMsg3);
            }
        } catch (err) {
            console.error(err);
        }
    };

    function getLink() {
        let link = dictionary.link;
        let msg = message.split('%');
        //find word with % in message and hyperlink it with link
        return (
            <span>
                {msg[0]}
                <a href={link} target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>
                {msg[1]}
                </a>
                {msg[2]}
            </span>
        );
    }

    const getOrgAverageData = async () => {
        try {
            const response = await axios.get('api/answers/averageOrg', { params: { self: true } });
            setAverageOrgData(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    const getAverageData = async () => {
        try {
            const response = await axios.get('api/answers/average');
            setAverageData(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    const getCompleted = async () => {
        try {
            const response = await axios.get('api/answers/completed');
            setCompleted(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    const getYourThematic = async () => {
        try {
            const response = await axios.get('api/answers/average_thematic', { params: { self: true } });
            console.log(response);
            setYourThematic(response.data);
            console.log(yourThematic);
        } catch (err) {
            console.error(err);
        }
    };

    const getAverageThematic = async () => {
        try {
            const response = await axios.get('api/answers/average_thematic');
            console.log(response);
            setAverageThematic(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    const getCountries = async () => {
        try {
            const response = await axios.get('api/answers/countries');
            setCountries(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getYourData();
        getAverageData();
        getCompleted();
        getYourThematic();
        getAverageThematic();
        getCountries();
        getOrgAverageData();
    }, []);


    const yourScoreDict = dictionary.yourScore
    const averageScoreDict = dictionary.averageScore

    const data = [
        {
            thematicElement: dictionary.LGP,
            [yourScoreDict] : yourThematic['Leadership & Governance Practices'] ? yourThematic['Leadership & Governance Practices'] : 0,
            [averageScoreDict]: averageThematic['Leadership & Governance Practices'] ? averageThematic['Leadership & Governance Practices'] : 0
        },
        {
            thematicElement: dictionary.TLP,
            [yourScoreDict]: yourThematic['Teaching and Learning Practices'] ? yourThematic['Teaching and Learning Practices'] : 0,
            [averageScoreDict]: averageThematic['Teaching and Learning Practices'] ? averageThematic['Teaching and Learning Practices'] : 0
        },
        {
            thematicElement: dictionary.PD,
            [yourScoreDict]: yourThematic['Professional Development'] ? yourThematic['Professional Development'] : 0,
            [averageScoreDict]: averageThematic['Professional Development'] ? averageThematic['Professional Development'] : 0
        },
        {
            thematicElement: dictionary.AP,
            [yourScoreDict]: yourThematic['Assessment practices'] ? yourThematic['Assessment practices'] : 0,
            [averageScoreDict]: averageThematic['Assessment practices'] ? averageThematic['Assessment practices'] : 0
        },
        {
            thematicElement: dictionary.CC,
            [yourScoreDict]: yourThematic['Content and Curricula'] ? yourThematic['Content and Curricula'] : 0,
            [averageScoreDict]: averageThematic['Content and Curricula'] ? averageThematic['Content and Curricula'] : 0
        },
        {
            thematicElement: dictionary.CN,
            [yourScoreDict]: yourThematic['Collaboration and Networking'] ? yourThematic['Collaboration and Networking'] : 0,
            [averageScoreDict]: averageThematic['Collaboration and Networking'] ? averageThematic['Collaboration and Networking'] : 0
        },
        {
            thematicElement: dictionary.I,
            [yourScoreDict]: yourThematic['Infrastructure'] ? yourThematic['Infrastructure'] : 0,
            [averageScoreDict]: averageThematic['Infrastructure'] ? averageThematic['Infrastructure'] : 0
        }
    ];

    const data2 = [
        {
            id: dictionary.yourScore,
            color: 'hsl(239, 70%, 50',
            data: [
                {
                    x: dictionary.LGP,
                    y: yourThematic['Leadership & Governance Practices'] ? yourThematic['Leadership & Governance Practices'] : 0
                },
                {
                    x: dictionary.TLP,
                    y: yourThematic['Teaching and Learning Practices'] ? yourThematic['Teaching and Learning Practices'] : 0
                },
                {
                    x: dictionary.PD,
                    y: yourThematic['Professional Development'] ? yourThematic['Professional Development'] : 0
                },
                {
                    x: dictionary.AP,
                    y: yourThematic['Assessment practices'] ? yourThematic['Assessment practices'] : 0
                },
                {
                    x: dictionary.CC,
                    y: yourThematic['Content and Curricula'] ? yourThematic['Content and Curricula'] : 0
                },
                {
                    x: dictionary.CN,
                    y: yourThematic['Collaboration and Networking'] ? yourThematic['Collaboration and Networking'] : 0
                },
                {
                    x: dictionary.I,
                    y: yourThematic['Infrastructure'] ? yourThematic['Infrastructure'] : 0
                }
            ]
        },
        {
            id: dictionary.averageScore,
            color: 'hsl(46, 70%, 50%)',
            data: [
                {
                    x: dictionary.LGP,
                    y: averageThematic['Leadership & Governance Practices'] ? averageThematic['Leadership & Governance Practices'] : 0
                },
                {
                    x: dictionary.TLP,
                    y: averageThematic['Teaching and Learning Practices'] ? averageThematic['Teaching and Learning Practices'] : 0
                },
                {
                    x: dictionary.PD,
                    y: averageThematic['Professional Development'] ? averageThematic['Professional Development'] : 0
                },
                {
                    x: dictionary.AP,
                    y: averageThematic['Assessment practices'] ? averageThematic['Assessment practices'] : 0
                },
                {
                    x: dictionary.CC,
                    y: averageThematic['Content and Curricula'] ? averageThematic['Content and Curricula'] : 0
                },
                {
                    x: dictionary.CN,
                    y: averageThematic['Collaboration and Networking'] ? averageThematic['Collaboration and Networking'] : 0
                },
                {
                    x: dictionary.I,
                    y: averageThematic['Infrastructure'] ? averageThematic['Infrastructure'] : 0
                }
            ]
        }
    ];

    return (
        <MainCard title={dictionary.graphsAndCharts}>
            <div style={{ marginBottom: 15, textAlign: 'center'}}>
                <Typography style={{fontSize: '20px', marginBottom: 25}}>{message2}</Typography>
                <Typography style={{fontSize: '20px'}}>{getLink()}</Typography>
            </div>
            <Divider />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
                <div style={{ maxWidth: '250px', minWidth: '250px', margin: '10px' }}>
                    <RevenueCard
                        primary={dictionary.yourAverageScore}
                        secondary={yourData ? yourData.toFixed(2) : '0'}
                        content={dictionary.outOf5}
                        iconPrimary={SportsScoreIcon}
                        color={theme.palette.primary.main}
                    />
                </div>
                <div style={{ maxWidth: '250px', minWidth: '250px', margin: '10px' }}>
                    <RevenueCard
                        primary={dictionary.orgAverageScore}
                        secondary={averageOrgData ? averageOrgData.toFixed(2) : '0'}
                        content={dictionary.outOf5}
                        iconPrimary={BusinessIcon}
                        color={theme.palette.primary.main}
                    />
                </div>
                <div style={{ maxWidth: '250px', minWidth: '250px', margin: '10px' }}>
                    <RevenueCard
                        primary={dictionary.overallAverageScore}
                        secondary={averageData ? averageData.toFixed(2) : '0'}
                        content={dictionary.outOf5}
                        iconPrimary={BarChartIcon}
                        color={theme.palette.primary.main}
                    />
                </div>

                <div style={{ maxWidth: '250px', minWidth: '250px', margin: '10px' }}>
                    <RevenueCard
                        primary={dictionary.totalCompleted}
                        secondary={completed}
                        content={''}
                        iconPrimary={FactCheckIcon}
                        color={theme.palette.primary.main}
                    />
                </div>
            </div>
            <Divider />
            <div style={{ marginBottom: 5, marginTop: 10 }}>
                <Typography variant="h4" sx={{ mb: 2 }}>
                    {dictionary.legend}
                </Typography>
                <Typography>
                    {dictionary.LGPFull}, <br />
                    {dictionary.TLPFull}, <br />
                    {dictionary.PDFull}, <br />
                    {dictionary.APFull}, <br />
                    {dictionary.CCFull}, <br />
                    {dictionary.CNFull}, <br />
                    {dictionary.IFull}
                </Typography>
            </div>
            <Divider />
            <Box sx={{ minWidth: 120, marginTop: -1 }}>
                <div style={{ height: '400px' }}>
                    <ResponsiveRadar
                        data={data}
                        keys={[yourScoreDict, averageScoreDict]}
                        indexBy="thematicElement"
                        valueFormat=">-.2f"
                        margin={{ top: 70, right: 45, bottom: 40, left: 50 }}
                        borderColor={{ from: 'color' }}
                        gridLabelOffset={36}
                        dotSize={2}
                        dotColor={{ theme: 'background' }}
                        dotBorderWidth={3}
                        colors={{ scheme: 'set2' }}
                        blendMode="multiply"
                        motionConfig="wobbly"
                        axisLeft={{
                            orient: 'left',
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'Score',
                            legendOffset: -40,
                            legendPosition: 'middle'
                        }}
                        axisBottom={{
                            orient: 'bottom',
                            tickSize: 5,
                            tickPadding: 8,
                            tickRotation: 10,
                            legend: 'transportation',
                            legendOffset: 36,
                            legendPosition: 'middle'
                        }}
                        legends={[
                            {
                                anchor: 'top-left',
                                direction: 'column',
                                translateX: -50,
                                translateY: -40,
                                itemWidth: 80,
                                itemHeight: 20,
                                itemTextColor: '#999',
                                symbolSize: 12,
                                symbolShape: 'circle',
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemTextColor: '#000'
                                        }
                                    }
                                ]
                            }
                        ]}
                    />
                </div>
                <Divider />
                <div style={{ height: '400px' }}>
                    <ResponsiveLine
                        data={data2}
                        margin={{ top: 50, right: 15, bottom: 50, left: 60 }}
                        xScale={{ type: 'point' }}
                        yScale={{
                            type: 'linear',
                            min: 'auto',
                            max: 'auto',
                            stacked: false,
                            reverse: false
                        }}
                        yFormat=" >-.2f"
                        axisTop={null}
                        axisRight={null}
                        colors={{ scheme: 'set2' }}
                        axisBottom={{
                            orient: 'bottom',
                            tickSize: 5,
                            tickPadding: 8,
                            tickRotation: 0
                        }}
                        axisLeft={{
                            orient: 'left',
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: dictionary.score,
                            legendOffset: -40,
                            legendPosition: 'middle'
                        }}
                        pointSize={10}
                        pointColor={{ theme: 'background' }}
                        pointBorderWidth={2}
                        pointBorderColor={{ from: 'serieColor' }}
                        pointLabelYOffset={-12}
                        useMesh={true}
                        legends={[
                            {
                                anchor: 'top',
                                direction: 'row',
                                translateX: 0,
                                translateY: -35,
                                itemWidth: 110,
                                itemHeight: 20,
                                itemTextColor: '#999',
                                symbolSize: 12,
                                symbolShape: 'circle',
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemTextColor: '#000'
                                        }
                                    }
                                ]
                            }
                        ]}
                    />
                </div>
                <Divider />
                <Typography sx={{ marginTop: 1.5, marginBottom: 1.5 }}><QuestionToolTip explanation={dictionary.filterInfo} /> {dictionary.filterData} </Typography>
                <form onSubmit={handeFilter}>
                    <FormControl sx={{ margin: 1, width: '30%', minWidth: '240px' }}>
                        <InputLabel id="VET organization type" htmlFor="VET organization type">
                            {dictionary.VETOrgType}
                        </InputLabel>
                        <Select
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
                        <TextField
                            sx={{ marginTop: 1.5, marginLeft: 1, display: displayVet }}
                            id="outlined-basic"
                            helperText={dictionary.pleaseSpecifyOtherOrg}
                            variant="standard"
                        />
                    </FormControl>

                    <FormControl sx={{ margin: 1, width: '30%', minWidth: '240px' }}>
                        <InputLabel id="size" htmlFor="size">
                            {dictionary.size}
                        </InputLabel>
                        <Select labelId="size" id="size" value={size} label={dictionary.size} onChange={handleChange2}>
                            <MenuItem value="Micro">{dictionary.micro}</MenuItem>
                            <MenuItem value="Small">{dictionary.small}</MenuItem>
                            <MenuItem value="Medium">{dictionary.medium}</MenuItem>
                            <MenuItem value="Large">{dictionary.large}</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl width={''} sx={{ margin: 1, width: '30%', minWidth: '240px' }}>
                        <InputLabel id="country" htmlFor="country">
                            {dictionary.country}
                        </InputLabel>
                        <Select labelId="country" id="country" value={country} label={dictionary.country} onChange={handleChange3}>
                            {countries.map((country) => (
                                <MenuItem value={country}>{dictionary[country.toLowerCase()]}</MenuItem>
                            ))}
                        </Select>
                        <TextField
                            sx={{ marginTop: 1.5, marginLeft: 1, display: displayCountry }}
                            id="outlined-basic"
                            helperText={dictionary.pleaseSpecifyOtherCountry}
                            variant="standard"
                        />
                    </FormControl>
                    <IconButton onClick={resetFilters} size="large" sx={{ marginTop: 1.5, marginBottom: 1.5 }}>
                        <ClearIcon />
                    </IconButton>
                    <Button sx={{ marginLeft: 1, width: '150px' }} variant="contained" type="submit" color="primary">
                        {dictionary.filter}
                    </Button>
                </form>
            </Box>
        </MainCard>
    );
}
