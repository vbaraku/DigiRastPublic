import PropTypes from 'prop-types';

// material-ui
import { Box, IconButton } from '@mui/material';

// project import
import MainCard from 'ui-component/cards/MainCard';
import TranslateTwoToneIcon from '@mui/icons-material/TranslateTwoTone';
import LocalizationSection from "../../../layout/MainLayout/Header/LocalizationSection";

// ==============================|| AUTHENTICATION CARD WRAPPER ||============================== //

const AuthCardWrapper = ({ children, ...other }) => (
    <MainCard
        sx={{
            maxWidth: { xs: 400, lg: 475 },
            margin: { xs: 2.5, md: 3 },
            '& > *': {
                flexGrow: 1,
                flexBasis: '50%'
            }
        }}
        content={false}
        {...other}
    >
        <LocalizationSection />
        <Box sx={{ p: { xs: 2, sm: 3, xl: 5 } }}>{children}</Box>
    </MainCard>
);

AuthCardWrapper.propTypes = {
    children: PropTypes.node
};

export default AuthCardWrapper;
