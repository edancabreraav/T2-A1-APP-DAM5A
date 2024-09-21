import { React, useEffect, useReducer } from 'react';

const initialState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
};

const authReducer = (state, action) => {
    switch (action.type) {
        case 'logout':
            return {
                token: null,
                username: '',
                nombre: '',
                validando: false,
            };
        case 'login':
            const { nombre, username } = action.payload;
            return {
                validando: false,
                token: 'TOKEN123',
                username,
                nombre,
            };
        default:
            return state;
    }
};

export const Login = () => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' });
        }, 2500);
    }, []);

    const login = () => {
        dispatch({
            type: 'login',
            payload: {
                username: 'cabrera',
                nombre: 'Edson'
            }
        });
    };

    const logout = () => {
        dispatch({ type: 'logout' });
    };

    if (state.validando) {
        return (
            <>
                <h3>Login</h3>
                <div className="InfoAlert">
                    Validando Información...
                </div>
            </>
        );
    }

    return (
        <>
            <h3>Login</h3>
            {
                (state.token)
                    ? (
                        <div className="SuccessAlert">
                            Autenticado como: {state.nombre}
                        </div>
                    )
                    : (
                        <div className="DangerAlert">
                            No Autenticado...
                        </div>
                    )
            }
            {
                (state.token)
                    ? (
                        <button
                            className="Logout_Button"
                            onClick={logout}
                        >
                            Logout
                        </button>
                    )
                    : (
                        <button
                            className="Login_Button"
                            onClick={login}
                        >
                            Login
                        </button>
                    )
            }
        </>
    );
};

