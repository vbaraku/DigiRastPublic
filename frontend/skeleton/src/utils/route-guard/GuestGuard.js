import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

// project imports
import useAuth from 'hooks/useAuth';
import config from 'config';
import { useEffect } from 'react';
import Cookies from 'universal-cookie';
// ==============================|| GUEST GUARD ||============================== //

/**
 * Guest guard for routes having no auth required
 * @param {PropTypes.node} children children element/node
 */

const GuestGuard = ({ children }) => {
    const cookies = new Cookies();
    const isLoggedIn = cookies.get("Authorization");
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn && isLoggedIn!="") {
            navigate(config.defaultPath, { replace: true });
        }
    }, [isLoggedIn, navigate]);

    return children;
};

GuestGuard.propTypes = {
    children: PropTypes.node
};

export default GuestGuard;
