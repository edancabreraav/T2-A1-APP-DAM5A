import { useForm } from "./hooks/useForm";

export const Formularios = () => {
    const { formulario, email, password, onChange } = useForm({
        email: 'prueba@ittepic.edu.mx',
        password: '123456'
    });

    return (
        <>
            <h3>
                Formulario
            </h3>
            <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={({ target }) => onChange(target.value, 'email')}
            ></input>
            <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
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
