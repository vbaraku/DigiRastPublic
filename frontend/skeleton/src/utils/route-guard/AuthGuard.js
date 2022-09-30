import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

// project imports
import useAuth from 'hooks/useAuth';
import { useEffect } from 'react';
import Cookies from 'universal-cookie';
// ==============================|| AUTH GUARD ||============================== //

/**
 * Authentication guard for routes
 * @param {PropTypes.node} children children element/node
 */
const AuthGuard = ({ children }) => {
    const cookies = new Cookies();
    const isLoggedIn = cookies.get("Authorization");
    const isRegistered = cookies.get("isRegistered");    
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn && isLoggedIn!="") {
            navigate('login', { replace: true });
        } else if(!isRegistered){
            navigate('registration', { replace: true });
        }
    }, [isLoggedIn, navigate]);

    return children;
};

AuthGuard.propTypes = {
    children: PropTypes.node
};

export default AuthGuard;
