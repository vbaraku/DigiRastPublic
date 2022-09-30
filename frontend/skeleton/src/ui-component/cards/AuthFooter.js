// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
    <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle2" component={Link} href="https://www.seerc.org/" target="_blank" underline="hover">
            seerc.org
        </Typography>
    </Stack>
);

export default AuthFooter;
