import React, { useEffect, useState } from 'react';

import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './src/aws-exports';

import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from './src/screens/landing/Landing';
import ClientHome from './src/screens/client-home/ClientHome';
import LogIn from './src/screens/log-in/LogIn';
import SignUp from './src/screens/sign-up/SignUp';
import ConfirmSignUp from './src/screens/confirm-sign-up/ConfirmSignUp';

Amplify.configure(awsconfig);

const AuthenticationStack = createStackNavigator();
const AppStack = createStackNavigator();

const AuthenticationNavigator = (props) => {
    return (
        <AuthenticationStack.Navigator headerMode="none">
            <AuthenticationStack.Screen name="LogIn">
                {(screenProps) => (
                    <LogIn
                        {...screenProps}
                        updateAuthState={props.updateAuthState}
                    />
                )}
            </AuthenticationStack.Screen>
            <AuthenticationStack.Screen name="SignUp" component={SignUp} />
            <AuthenticationStack.Screen
                name="ConfirmSignUp"
                component={ConfirmSignUp}
            />
        </AuthenticationStack.Navigator>
    );
};
const AppNavigator = (props) => {
    return (
        <AppStack.Navigator>
            <AppStack.Screen name="Landing">
                {(screenProps) => (
                    <Landing
                        {...screenProps}
                        updateAuthState={props.updateAuthState}
                    />
                )}
            </AppStack.Screen>
        </AppStack.Navigator>
    );
};

const Initializing = () => {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <ActivityIndicator size="large" color="tomato" />
        </View>
    );
};

const App = () => {
    const [isAthenticated, setIsAuthenticated] = useState(false);
    const [isUserLoggedIn, setUserLoggedIn] = useState('initializing');

    useEffect(() => {
        checkAuthState();
    });

    const checkAuthState = async () => {
        try {
            await Auth.currentAuthenticatedUser();
            console.log('✅ User is signed in');
            setUserLoggedIn('loggedIn');
        } catch (err) {
            console.log('❌ User is not signed in');
            setUserLoggedIn('loggedOut');
        }
    };
    function updateAuthState(isUserLoggedIn) {
        setUserLoggedIn(isUserLoggedIn);
    }

    const renderTabs = () => {
        return (
            <>
                <Tab.Screen name="Landing" component={Landing} />
                <Tab.Screen name="Home" component={ClientHome} />
            </>
        );
    };

    return (
        <NavigationContainer>
            {isUserLoggedIn === 'initializing' && <Initializing />}
            {isUserLoggedIn === 'loggedIn' && (
                <AppNavigator updateAuthState={updateAuthState} />
            )}
            {isUserLoggedIn === 'loggedOut' && (
                <AuthenticationNavigator updateAuthState={updateAuthState} />
            )}
        </NavigationContainer>
    );
};

export default App;

// import React, { useState, useEffect, useCallback, Suspense } from 'react';
// /**
//  * External Libraries
//  */
// import { Amplify, Auth } from 'aws-amplify';

// import { useAuthenticator, Authenticator } from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css';
// import { StyledEngineProvider } from '@mui/material/styles';

// /**
//  * App Components
//  */
// import NavBar from './domain/Navbar/Navbar';
// import Footer from './domain/Footer/Footer';
// import AuthenticationForm from './components/AuthenticationForm/AuthenticationForm';
// import { AdvisorRoutes, ClientRoutes } from './routes';
// /**
//  * Utils
//  */
// import AuthService from './authService';
// import { sendData } from './utils';
// import { AuthContext } from './components/Context/auth';
// import { ViewportContextProvider } from './components/Context/viewPortContext';
// import { ScreenWidthContextProvider } from './components/Context/screenWidthContext';
// import GAListener from './usePageTracking';
// import useViewport from './components/CustomHooks/useViewport';
// /*
//  * Styles
//  */
// import '@aws-amplify/ui-react/styles.css';
// import './App.css';

// // Configure amplify
// import awsExport from './aws-exports';
// import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
// Amplify.configure(awsExport);

// function App() {
//     const { route } = useAuthenticator((context) => [context.route]);
//     return route === 'authenticated' ? <Home /> : <AuthenticationForm />;
// }

// const Home = () => {
//     const { user } = useAuthenticator((context) => [context.user]);
//     const [cognitoUser, setCognitoUser] = useState(null);
//     const [sessionToken, setSessionToken] = useState(null);
//     const [currentUser, setCurrentUser] = useState(null);
//     const [loggedOut, setLoggedOut] = useState(false);

//     const userInfo = AuthService.getUserInfo();

//     useEffect(() => {
//         if (userInfo) {
//             setCurrentUser(userInfo);
//         }
//         Auth.currentAuthenticatedUser().then((userData) => {
//             if (userData) {
//                 setCognitoUser(userData.attributes);
//                 AuthService.saveCognitoUsername(userData['username']);
//             }
//         });
//     }, []);

//     useEffect(() => {
//         if (sessionToken !== user['signInUserSession']['idToken']['jwtToken']) {
//             setSessionToken(user['signInUserSession']['idToken']['jwtToken']);
//         }
//         if (user) {
//             setSessionToken(user['signInUserSession']['idToken']['jwtToken']);
//             if (!userInfo) {
//                 fetchUserData();
//             }
//         }
//     }, [user]);

//     const fetchUserData = () => {
//         const url = '/user/detail';
//         sendData(url, getJwtToken, JSON.stringify(user['attributes']))
//             .then((res) => {
//                 AuthService.saveUser(res);
//                 setCurrentUser(res);
//             })
//             .catch(() => {
//                 try {
//                     Auth.signOut().then((res) => (window.location = '/'));
//                 } catch (error) {
//                     console.log(error);
//                 }
//             });
//     };

//     const { breakLine } = useViewport();

//     const getJwtToken = useCallback(async () => {
//         // Auth.currentSession() checks if token is expired and refreshes with Cognito if needed automatically
//         const session = await Auth.currentSession().catch((reason) => {
//             console.log('caught error');
//             setLoggedOut(true);
//         });
//         return session.getIdToken().getJwtToken();
//     }, []);

//     return (
//         <AuthContext.Provider
//             value={{
//                 user: currentUser,
//                 cognitoUser: cognitoUser,
//                 getToken: getJwtToken,
//             }}
//         >
//             <ViewportContextProvider>
//                 <ScreenWidthContextProvider>
//                     <GAListener trackingId="UA-194405524-1">
//                         <StyledEngineProvider injectFirst>
//                             {loggedOut ? (
//                                 <Dialog open={loggedOut}>
//                                     <DialogTitle>Logged Out</DialogTitle>
//                                     <DialogContent>
//                                         Due to inactivity or session expiration, you have
//                                         been logged out
//                                     </DialogContent>
//                                     <DialogActions>
//                                         <Button
//                                             onClick={() => {
//                                                 Auth.signOut().then(
//                                                     (res) => (window.location = '/')
//                                                 );
//                                             }}
//                                         >
//                                             Log In
//                                         </Button>
//                                     </DialogActions>
//                                 </Dialog>
//                             ) : (
//                                 <>
//                                     {currentUser && (
//                                         <div id="app">
//                                             <div id="nav">
//                                                 <NavBar />
//                                             </div>
//                                             <div id="body">
//                                                 <div
//                                                     style={{
//                                                         marginBottom:
//                                                             window.innerWidth >= breakLine
//                                                                 ? '5.1em'
//                                                                 : '4.35em',
//                                                     }}
//                                                 ></div>
//                                                 <Suspense fallback={<></>}>
//                                                     {currentUser.is_advisor ? (
//                                                         <AdvisorRoutes />
//                                                     ) : (
//                                                         <ClientRoutes />
//                                                     )}
//                                                 </Suspense>
//                                             </div>
//                                             <div id="footer">
//                                                 <Footer />
//                                             </div>
//                                         </div>
//                                     )}
//                                 </>
//                             )}
//                         </StyledEngineProvider>
//                     </GAListener>
//                 </ScreenWidthContextProvider>
//             </ViewportContextProvider>
//         </AuthContext.Provider>
//     );
// };

// export default function AppWithProvider() {
//     return (
//         <Authenticator.Provider>
//             <App />
//         </Authenticator.Provider>
//     );
// }
