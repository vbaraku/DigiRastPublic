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

export default function QuestionToolTip({explanation}) {

    const LightTooltip = styled(({ className, ...props }, TooltipProps) => <Tooltip {...props} classes={{ popper: className }} />)(
        ({ theme }) => ({
            [`& .${tooltipClasses.tooltip}`]: {
                backgroundColor: 'rgb(80, 80, 80)',
                color: theme.palette.common.white,
                boxShadow: theme.shadows[1],
                fontSize: 13
            }
        })
    );
    return (
      <ClickAwayListener >
        <LightTooltip title={explanation}>
            <IconButton>
                <HelpIcon />
            </IconButton>
        </LightTooltip>
        </ClickAwayListener>
    );
}
