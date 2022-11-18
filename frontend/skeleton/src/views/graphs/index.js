// material-ui
import { Typography, Input, InputLabel, Select, MenuItem, Box, FormControl, Divider, Button, TextField, IconButton } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import BarChartIcon from '@mui/icons-material/BarChart';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import ClearIcon from '@mui/icons-material/Clear';

import { useTheme } from '@mui/material/styles';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import axios from 'axios';
import MyResponsiveRadar from './myresponsiveradar';
import { ResponsiveRadar } from '@nivo/radar';
import { ResponsiveLine } from '@nivo/line';
import RevenueCard from 'ui-component/cards/RevenueCard';

// ==============================|| SAMPLE PAGE ||============================== //
export default function Graphs() {
    const theme = useTheme();
    /* eslint-disable */
    const [yourData, setYourData] = React.useState(0);
    const [averageData, setAverageData] = React.useState(0);
    const [completed, setCompleted] = React.useState(0);

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
            const response = await axios.get('api/answers/average_thematic', {params: {country: country, size: size, vetType : VETType}});
            console.log(response);
            setAverageThematic(response.data);
            console.log(yourThematic)
        } catch (err) {
            console.error(err);
        }
    };

    const resetFilters = async () => {
        try {
            const response = await axios.get('api/answers/average_thematic');
            setAverageThematic(response.data);
            setSize(null);
            setCountry(null);
            setVETType(null);
        } catch (err) {
            console.error(err);
        }
    };

    const getYourData = async () => {
        try {
            const response = await axios.get('api/answers/average', {params: {self: true}});
            setYourData(response.data);
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
            const response = await axios.get('api/answers/average_thematic', {params: {self: true}});
            console.log(response);
            setYourThematic(response.data);
            console.log(yourThematic)
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
    }, []);

    const data = [
        {
            thematicElement: 'LGP',
            'Your Score': yourThematic['Leadership & Governance Practices'] ? yourThematic['Leadership & Governance Practices'] : 0,
            'Average Score': averageThematic['Leadership & Governance Practices'] ? averageThematic['Leadership & Governance Practices'] : 0,
        },
        {
            thematicElement: 'TLP',
            'Your Score': yourThematic['Teaching and Learning Practices'] ? yourThematic['Teaching and Learning Practices'] : 0,
            'Average Score': averageThematic['Teaching and Learning Practices'] ? averageThematic['Teaching and Learning Practices'] : 0,
        },
        {
            thematicElement: 'PD',
            'Your Score': yourThematic['Professional Development'] ? yourThematic['Professional Development'] : 0,
            'Average Score': averageThematic['Professional Development'] ? averageThematic['Professional Development'] : 0,
        },
        {
            thematicElement: 'AP',
            'Your Score': yourThematic['Assessment practices'] ? yourThematic['Assessment practices'] : 0,
            'Average Score': averageThematic['Assessment practices'] ? averageThematic['Assessment practices'] : 0,
        },
        {
            thematicElement: 'CC',
            'Your Score': yourThematic['Content and Curricula'] ? yourThematic['Content and Curricula'] : 0,
            'Average Score': averageThematic['Content and Curricula'] ? averageThematic['Content and Curricula'] : 0,
        },
        {
            thematicElement: 'CN',
            'Your Score': yourThematic['Collaboration and Networking'] ? yourThematic['Collaboration and Networking'] : 0,
            'Average Score': averageThematic['Collaboration and Networking'] ? averageThematic['Collaboration and Networking'] : 0,
        },
        {
            thematicElement: 'I',
            'Your Score': yourThematic['Infrastructure'] ? yourThematic['Infrastructure'] : 0,
            'Average Score': averageThematic['Infrastructure'] ? averageThematic['Infrastructure'] : 0,
        }
    ];

    const data2 = [
        {
            id: 'Your Score',
            color: 'hsl(239, 70%, 50',
            data: [
                {
                    x: 'LGP',
                    y: yourThematic['Leadership & Governance Practices'] ? yourThematic['Leadership & Governance Practices'] : 0
                },
                {
                    x: 'TLP',
                    y: yourThematic['Teaching and Learning Practices'] ? yourThematic['Teaching and Learning Practices'] : 0
                },
                {
                    x: 'PD',
                    y: yourThematic['Professional Development'] ? yourThematic['Professional Development'] : 0
                },
                {
                    x: 'AP',
                    y: yourThematic['Assessment practices'] ? yourThematic['Assessment practices'] : 0
                },
                {
                    x: 'CC',
                    y: yourThematic['Content and Curricula'] ? yourThematic['Content and Curricula'] : 0
                },
                {
                    x: 'CN',
                    y: yourThematic['Collaboration and Networking'] ? yourThematic['Collaboration and Networking'] : 0
                },
                {
                    x: 'I',
                    y: yourThematic['Infrastructure'] ? yourThematic['Infrastructure'] : 0
                }
            ]
        },
        {
            id: 'Average Score',
            color: 'hsl(46, 70%, 50%)',
            data: [
                {
                    x: 'LGP',
                    y: averageThematic['Leadership & Governance Practices'] ? averageThematic['Leadership & Governance Practices'] : 0
                },
                {
                    x: 'TLP',
                    y: averageThematic['Teaching and Learning Practices'] ? averageThematic['Teaching and Learning Practices'] : 0
                },
                {
                    x: 'PD',
                    y: averageThematic['Professional Development'] ? averageThematic['Professional Development'] : 0
                },
                {
                    x: 'AP',
                    y: averageThematic['Assessment practices'] ? averageThematic['Assessment practices'] : 0
                },
                {
                    x: 'CC',
                    y: averageThematic['Content and Curricula'] ? averageThematic['Content and Curricula'] : 0
                },
                {
                    x: 'CN',
                    y: averageThematic['Collaboration and Networking'] ? averageThematic['Collaboration and Networking'] : 0
                },
                {
                    x: 'I',
                    y: averageThematic['Infrastructure'] ? averageThematic['Infrastructure'] : 0
                }
            ]
        }
    ];

    return (
        <MainCard title="Graphs and Charts">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
                <div style={{ maxWidth: '300px', minWidth: '250px', margin: '12px' }}>
                    <RevenueCard
                        primary="Your average score"
                        secondary={yourData ? yourData.toFixed(2) : '0' }
                        content="Out of a total 5"
                        iconPrimary={SportsScoreIcon}
                        color={theme.palette.primary.main}
                    />
                </div>
                <div style={{ maxWidth: '300px', minWidth: '250px', margin: '12px' }}>
                    <RevenueCard
                        primary="Overall average score"
                        secondary={averageData.toFixed(2)}
                        content="Out of a total 5"
                        iconPrimary={BarChartIcon}
                        color={theme.palette.primary.main}
                    />
                </div>
                <div style={{ maxWidth: '300px', minWidth: '250px', margin: '12px' }}>
                    <RevenueCard
                        primary="Total number of completed assessments"
                        secondary={completed}
                        content=""
                        iconPrimary={FactCheckIcon}
                        color={theme.palette.primary.main}
                    />
                </div>
            </div>
            <Divider />
            <div style={{ marginBottom: 5, marginTop: 10 }}>
                <Typography variant="h4" sx={{ mb: 2 }}>
                    Legend for charts:
                </Typography>
                <Typography>
                    LGP - Leadership & Governance Practices, <br />
                    TLP - Teaching and Learning Practices, <br></br>PD - Professional Development, <br></br>AP - Assessment practices,
                    <br></br>CC - Content and Curricula, <br></br>CN - Collaboration and Networking, <br></br>I - Infrastructure.
                </Typography>
            </div>
            <Divider />
            <Box sx={{ minWidth: 120, marginTop: -1 }}>
                <div style={{ height: '400px' }}>
                    <ResponsiveRadar
                        data={data}
                        keys={['Your Score', 'Average Score']}
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
                            legend: 'Score',
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
                <Typography sx={{ marginTop: 1.5, marginBottom: 1.5 }}>Filter the data: </Typography>
                <form onSubmit={handeFilter}>
                    <FormControl sx={{ margin: 1, width: '30%', minWidth: '240px' }}>
                        <InputLabel id="VET organization type" htmlFor="VET organization type">
                            VET organization type:
                        </InputLabel>
                        <Select
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
                            <MenuItem value="Research & amp; Development Institutions">Research & amp; Development Institutions</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                        </Select>
                        <TextField
                            sx={{ marginTop: 1.5, marginLeft: 1, display: displayVet }}
                            id="outlined-basic"
                            helperText=" Please specify other organization type"
                            variant="standard"
                        />
                    </FormControl>

                    <FormControl sx={{ margin: 1, width: '30%', minWidth: '240px' }}>
                        <InputLabel id="size" htmlFor="size">
                            Size:
                        </InputLabel>
                        <Select labelId="size" id="size" value={size} label="Size:" onChange={handleChange2}>
                            <MenuItem value="Micro">Micro: employment up to 9 persons</MenuItem>
                            <MenuItem value="Small">Small: 10-50 employers</MenuItem>
                            <MenuItem value="Medium">Medium: 51-250 employers</MenuItem>
                            <MenuItem value="Large">Large: over 251 employers</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl width={''} sx={{ margin: 1, width: '30%', minWidth: '240px' }}>
                        <InputLabel id="country" htmlFor="country">
                            Country:
                        </InputLabel>
                        <Select labelId="country" id="country" value={country} label="Country:" onChange={handleChange3}>
                            {countries.map((country) => (
                                <MenuItem value={country}>{country}</MenuItem>
                            ))}
                            {/* <MenuItem value="Austria">Austria</MenuItem>
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
                            <MenuItem value="Other">Other</MenuItem> */}
                        </Select>
                        <TextField
                            sx={{ marginTop: 1.5, marginLeft: 1, display: displayCountry }}
                            id="outlined-basic"
                            helperText=" Please specify other country"
                            variant="standard"
                        />
                    </FormControl>
                    <IconButton onClick={resetFilters} size="large" sx={{ marginTop: 1.5, marginBottom: 1.5 }}>
                                <ClearIcon/>
                    </IconButton>
                    <Button sx={{marginLeft: 1, width: '150px' }} variant="contained" type="submit" color="primary">
                        Filter
                    </Button>
                </form>
            </Box>
        </MainCard>
    );
}
