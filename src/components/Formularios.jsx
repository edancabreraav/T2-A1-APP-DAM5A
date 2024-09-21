import { useState } from "react"

export const Formularios = () => {
    const [formulario, setFormulario] = useState({
        email: 'prueba@ittepic.edu.mx',
        password: '123456'
    })

    const onChange = (value, campo) => {
        setFormulario({
            ...formulario,
            [campo]: value
        });
    }

    return (
        <>
            <h3>
                Formulario
            </h3>
            <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={formulario.email}
                onChange={({ target }) => onChange(target.value, 'email')}
            ></input>
            <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={formulario.password}
                onChange={({ target }) => onChange(target.value, 'password')}
            ></input>

            <code>
                <pre>
                    {JSON.stringify(formulario, null, 2)}
                </pre>
            </code>

        </>
    )
}
