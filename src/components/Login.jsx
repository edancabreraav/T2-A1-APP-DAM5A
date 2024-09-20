import { React, useReducer } from 'react'

export const Login = () => {
    const initialState = {
        validando: true,
        token: null,
        username: '',
        nombre: ''
    }
    
    

    return (
        <>
            <h2>Login</h2>
            <div className="AlertInfo_Div">
                Validando Información...
            </div>
            <div className="AlertDanger_Div">
                No Autenticado...
            </div>
            <div className="AlertSuccess_Div">
                Autenticado...
            </div>
            <button
                className="Login_Button"
            >
                Login
            </button>
            <button
                className="Logout_Button"
            >
                Logout
            </button>
        </>
    )
}
