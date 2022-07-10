import React, { useEffect, createContext, useReducer  } from 'react';

import { Auth } from 'aws-amplify';

import createDataContext from './createDataContext';


const authReducer = (state, action) => {
    switch (action.type) {
        case 'isUserLoggedIn':
            console.log('============AUTH REDUCER=================')
            console.log({ state, action })

            console.log('========================================')
            return {...state, isUserLoggedIn: action.payload} 
        default:
            return state
    }
}

const checkAuthState = dispatch => {
    return async () => {
        try {
            const user = await Auth.currentAuthenticatedUser();
            console.log('✅ User is signed in');
            console.log('USER = ', user.attributes);
            dispatch({ type: 'isUserLoggedIn', payload: 'loggedIn', by: 'check auth' });
        } catch (err) {
            console.log('❌ User is not signed in');
            dispatch({ type: 'isUserLoggedIn', payload: 'loggedOut' });
        }
    }
}

const signUp = dispatch => async (username, password, email) => {
        try {
            await Auth.signUp({
                username,
                password,
                attributes: { email }
            });
            console.log('✅ Sign-up Confirmed');
            return null
        } catch (error) {
            console.log('❌ Error signing up...', error);
            return error
        }
}

const confirmSignUp = dispatch => async (username, authCode) => {
    try {
        await Auth.confirmSignUp(username, authCode);
        console.log('✅ Code confirmed');
        return null
    } catch (error) {
        console.log(
            '❌ Verification code does not match. Please enter a valid verification code.',
            error.code
        );
        return error
    }
};

const signIn = dispatch => async (username, password) => {
    try {
        await Auth.signIn(username, password);
        console.log('✅ Success');
        dispatch({ type: 'isUserLoggedIn', payload: 'loggedIn' });
        return null
    } catch (error) {
        console.log('❌ Error singin in...', error);
        return error
    }
}

const signOut = dispatch => async () => {
    try {
        await Auth.signOut();
        dispatch({type: 'isUserLoggedIn', payload: 'loggedOut'});
    } catch (error) {
        console.log('Error signing out: ', error);
    }
}

export const { Context, Provider } = createDataContext(
    authReducer,
    {checkAuthState, signUp, confirmSignUp, signIn, signOut},
    {'isUserLoggedIn': 'initializing'}
)

// const AuthContext = createContext()

// const authReducer = (state, action) => {
//     switch (action.type) {
//         case 'isUserLoggedIn':
//             console.log('============AUTH REDUCER=================')
//             console.log({ state, action })
//             console.log('========================================')
//             return {...state, isUserLoggedIn: action.payload} 
//         default:
//             return state
//     }
// }

// export const AuthContextProvider = (props) => {

//     const { children } = props;

//     const [authState, dispatch] = useReducer(authReducer, {
//         'isUserLoggedIn': 'initializing'
//     });

//     useEffect(() => {
//         checkAuthState();
//     }, []);

//     const checkAuthState = async () => {
//         try {
//             const user = await Auth.currentAuthenticatedUser();
//             console.log('✅ User is signed in');
//             console.log('USER = ', user.attributes);
//             dispatch({ type: 'isUserLoggedIn', payload: 'loggedIn' });
//         } catch (err) {
//             console.log('❌ User is not signed in');
//             dispatch({type: 'isUserLoggedIn', payload: 'loggedOut'});
//         }
//     };

//     const signUp = async (username, password, email) => {
//         try {
//             await Auth.signUp({
//                 username,
//                 password,
//                 attributes: { email }
//             });
//             console.log('✅ Sign-up Confirmed');
//             return null
//         } catch (error) {
//             console.log('❌ Error signing up...', error);
//             return error
//         }
//     }

//     const confirmSignUp = async (username, authCode) => {
//         try {
//             await Auth.confirmSignUp(username, authCode);
//             console.log('✅ Code confirmed');
//             return null
//         } catch (error) {
//             console.log(
//                 '❌ Verification code does not match. Please enter a valid verification code.',
//                 error.code
//             );
//             return error
//         }
//     };

//     const signIn = async (username, password) => {
//         try {
//             await Auth.signIn(username, password);
//             console.log('✅ Success');
//             dispatch({ type: 'isUserLoggedIn', payload: 'loggedIn' });
//             return null
//         } catch (error) {
//             console.log('❌ Error singin in...', error);
//             return error
//         }
//     }

//     const signOut = async () => {
//         try {
//             await Auth.signOut();
//             dispatch({type: 'isUserLoggedIn', payload: 'loggedOut'});
//         } catch (error) {
//             console.log('Error signing out: ', error);
//         }
//     }


//     return (
//         <AuthContext.Provider
//             value={{
//                 authState,
//                 signUp,
//                 confirmSignUp,
//                 signOut,
//                 signIn,
//             }}
//         >
//             {children}
//         </AuthContext.Provider>
//     )
// }
