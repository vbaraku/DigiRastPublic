// material-ui
import { Link, Typography, Stack } from '@mui/material';
import euLogo from 'assets/images/Cofound_EU_logo.png';
import ccLogo from 'assets/images/ccLogo.png';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = ({ dictionary }) => (
    <Stack direction="row" justifyContent="space-between">
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="subtitle2" sx={{ marginRight: 2 }}>
                <img src={euLogo} alt="EU Logo" width="190" />
            </Typography>
            <Typography variant="subtitle2">
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>{dictionary.projNum}</Typography> 
                {dictionary.fundedBy} <img src={ccLogo} alt="CC Logo" width="50" />
            </Typography>
        </div>   
    </Stack>
);

export default AuthFooter;
