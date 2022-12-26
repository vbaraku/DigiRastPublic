import { useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

import axios from 'axios';
import Cookies from 'universal-cookie';
// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import Locales from 'ui-component/Locales';
import NavigationScroll from 'layout/NavigationScroll';
// import RTLLayout from 'ui-component/RTLLayout';
import Snackbar from 'ui-component/extended/Snackbar';

// auth provider
import { FirebaseProvider } from 'contexts/FirebaseContext';
import LanguageProvider from './LanguageContext';
// import { JWTProvider } from 'contexts/JWTContext';
// import { Auth0Provider } from 'contexts/Auth0Context';

// ==============================|| APP ||============================== //

const App = () => {
    const customization = useSelector((state) => state.customization);
    const cookies = new Cookies();
    axios.interceptors.request.use(
        (config) => {
            
            const token = cookies.get("Authorization");
            if (token && token!="") {
                config.headers.Authorization = token;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
    return (
        <LanguageProvider>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={themes(customization)}>
                    <CssBaseline />
                    {/* RTL layout */}
                    {/* <RTLLayout> */}
                    <Locales>
                        <NavigationScroll>
                            <FirebaseProvider>
                                <>
                                    <Routes />
                                    <Snackbar />
                                </>
                            </FirebaseProvider>
                        </NavigationScroll>
                    </Locales>
                    {/* </RTLLayout> */}
                </ThemeProvider>
            </StyledEngineProvider>
        </LanguageProvider>
    );
};

export default App;
