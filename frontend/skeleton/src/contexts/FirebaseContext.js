import PropTypes from 'prop-types';
import { createContext, useEffect, useReducer } from 'react';

// third-party
import firebase from 'firebase/app';
import 'firebase/auth';

// action - state management
import { LOGIN, LOGOUT } from 'store/actions';
import accountReducer from 'store/accountReducer';

// project imports
import Loader from 'ui-component/Loader';
import config from 'config';

// firebase initialize
if (!firebase.apps.length) {
    firebase.initializeApp(config.firebase);
}

// const
const initialState = {
    isLoggedIn: false,
    isInitialized: false,
    user: null
};

// ==============================|| FIREBASE CONTEXT & PROVIDER ||============================== //

const FirebaseContext = createContext(null);

export const FirebaseProvider = ({ children }) => {
    const [state, dispatch] = useReducer(accountReducer, initialState);

    useEffect(
        () =>
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    dispatch({
                        type: LOGIN,
                        payload: {
                            isLoggedIn: true,
                            user: {
                                id: user.uid,
                                email: user.email,
                                name: user.displayName || 'Betty'
                            }
                        }
                    });
                } else {
                    dispatch({
                        type: LOGOUT
                    });
                }
            }),
        [dispatch]
    );

    const firebaseEmailPasswordSignIn = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

    const firebaseGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        return firebase.auth().signInWithPopup(provider);
    };

    const firebaseRegister = async (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);

    const logout = () => firebase.auth().signOut();

    const resetPassword = async (email) => {
        await firebase.auth().sendPasswordResetEmail(email);
    };

    const updateProfile = () => {};
    if (state.isInitialized !== undefined && !state.isInitialized) {
        return <Loader />;
    }

    return (
        <FirebaseContext.Provider
            value={{
                ...state,
                firebaseRegister,
                firebaseEmailPasswordSignIn,
                login: () => {},
                firebaseGoogleSignIn,
                logout,
                resetPassword,
                updateProfile
            }}
        >
            {children}
        </FirebaseContext.Provider>
    );
};

FirebaseProvider.propTypes = {
    children: PropTypes.node
};

export default FirebaseContext;
