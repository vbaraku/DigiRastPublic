import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Avatar,
    Box,
    ButtonBase,
    ClickAwayListener,
    Grid,
    List,
    ListItemButton,
    ListItemText,
    Paper,
    Popper,
    Typography,
    useMediaQuery,
    Backdrop,
    CircularProgress
} from '@mui/material';

// project imports
import Transitions from 'ui-component/extended/Transitions';
import * as actionTypes from 'store/actions';

// assets
import TranslateTwoToneIcon from '@mui/icons-material/TranslateTwoTone';
import { useLanguage, useLanguageUpdate } from '../../../../LanguageContext';

// ==============================|| LOCALIZATION ||============================== //

const LocalizationSection = () => {
    const { language, dictionary } = useLanguage();
    const customization = useSelector((state) => state.customization);
    const dispatch = useDispatch();
    const setLanguage = useLanguageUpdate();

    const theme = useTheme();
    const matchesXs = useMediaQuery(theme.breakpoints.down('md'));

    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    /**
     * anchorRef is used on different componets and specifying one type leads to other components throwing an error
     * */
    const anchorRef = useRef(null);
    const [languages, setLanguages] = useState(customization.locale);

    const handleListItemClick = (event, lng) => {
        setLanguage(lng);
        dispatch({ type: actionTypes.THEME_LOCALE, locale: lng });
        setOpen(false);
        setOpen2(true);
        window.location.reload();
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;
    }, [open]);

    useEffect(() => {
       setLanguages(customization.locale);
    }, [customization]);

    return (
        <>
            <Box
                sx={{
                    ml: 2,
                    [theme.breakpoints.down('md')]: {
                        ml: 1
                    }
                }}
            >
                <ButtonBase sx={{ borderRadius: '12px' }}>
                    <Avatar
                        variant="rounded"
                        sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.mediumAvatar,
                            border: '1px solid',
                            borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.primary.light,
                            background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.primary.light,
                            color: theme.palette.primary.dark,
                            transition: 'all .2s ease-in-out',
                            '&[aria-controls="menu-list-grow"],&:hover': {
                                borderColor: theme.palette.primary.main,
                                background: theme.palette.primary.main,
                                color: theme.palette.primary.light
                            }
                        }}
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                        color="inherit"
                    >
                        {language !== 'en' && (
                            <Typography variant="h5" sx={{ textTransform: 'uppercase' }} color="inherit">
                                {language}
                            </Typography>
                        )}
                        {language === 'en' && <TranslateTwoToneIcon sx={{ fontSize: '1.3rem' }} />}
                    </Avatar>
                </ButtonBase>
                <div>{dictionary.language}</div>
                <Backdrop
                    // make component show on top of every parent component
                    sx={{
                        zIndex: (theme) => theme.zIndex.drawer + 10,
                        color: '#ffffff'
                    }}
                    open={open2}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            </Box>
            <Popper
                placement={matchesXs ? 'bottom-start' : 'bottom'}
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                popperOptions={{
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [matchesXs ? 0 : 0, 20]
                            }
                        }
                    ]
                }}
            >
                {({ TransitionProps }) => (
                    <Transitions position={matchesXs ? 'top-left' : 'top'} in={open} {...TransitionProps}>
                        <Paper elevation={16}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <List
                                    component="nav"
                                    sx={{
                                        width: '100%',
                                        minWidth: 200,
                                        maxWidth: 280,
                                        bgcolor: theme.palette.background.paper,
                                        borderRadius: customization.borderRadius,
                                        [theme.breakpoints.down('md')]: {
                                            maxWidth: 250
                                        }
                                    }}
                                >
                                    <ListItemButton selected={language === 'en'} onClick={(event) => handleListItemClick(event, 'en')}>
                                        <ListItemText
                                            primary={
                                                <Grid container>
                                                    <Typography color="textPrimary">English</Typography>
                                                    <Typography variant="caption" color="textSecondary" sx={{ ml: '8px', marginRight: 1 }}>
                                                        (UK)
                                                    </Typography>
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg" alt="UK flag" width="20" height="13" />
                                                </Grid>
                                            }
                                        />
                                    </ListItemButton>
                                    <ListItemButton selected={language === 'gr'} onClick={(event) => handleListItemClick(event, 'gr')}>
                                        <ListItemText
                                            primary={
                                                <Grid container>
                                                    <Typography color="textPrimary">ελληνική</Typography>
                                                    <Typography variant="caption" color="textSecondary" sx={{ ml: '8px', marginRight: 1 }}>
                                                        (Greek) 
                                                    </Typography>
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/1200px-Flag_of_Greece.svg.png" alt="Greek flag" width="20" height="13" />
                                                </Grid>
                                            }
                                        />
                                    </ListItemButton>
                                    <ListItemButton selected={language === 'pl'} onClick={(event) => handleListItemClick(event, 'pl')}>
                                        <ListItemText
                                            primary={
                                                <Grid container>
                                                    <Typography color="textPrimary">Polski</Typography>
                                                    <Typography variant="caption" color="textSecondary" sx={{ ml: '8px',  marginRight: 1 }}>
                                                        (Polish)
                                                    </Typography>
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/1200px-Flag_of_Poland.svg.png" alt="Polish flag" width="20" height="13" />
                                                </Grid>
                                            }
                                        />
                                    </ListItemButton>
                                    <ListItemButton selected={language === 'it'} onClick={(event) => handleListItemClick(event, 'it')}>
                                        <ListItemText
                                            primary={
                                                <Grid container>
                                                    <Typography color="textPrimary">Italiano</Typography>
                                                    <Typography variant="caption" color="textSecondary" sx={{ ml: '8px', marginRight: 1 }}>
                                                        (Italian)
                                                    </Typography>
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1200px-Flag_of_Italy.svg.png" alt="Italian flag" width="20" height="13" />
                                                </Grid>
                                            }
                                        />
                                    </ListItemButton>
                                </List>
                            </ClickAwayListener>
                        </Paper>
                    </Transitions>
                )}
            </Popper>
        </>
    );
};

export default LocalizationSection;
