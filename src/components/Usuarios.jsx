import React from 'react'
import { useUsuarios } from './hooks/useUsuarios'


export const Usuarios = () => {

    const { usuarios, paginaSiguiente, paginaAnterior } = useUsuarios();

    return (
        <>
            <h3>Usuarios</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            Avatar
                        </th>
                        <th>
                            Nombre
                        </th>
                        <th>
                            email
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(usuario => (
                            <tr key={usuario.id}>
                                <td>
                                    <img
                                        src={usuario.avatar}
                                        alt={usuario.first_name}
                                        style={{ width: 50, borderRadius: '50%' }}
                                    />
                                </td>
                                <td>{usuario.first_name} {usuario.last_name}</td>
                                <td>{usuario.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <button onClick={()=>paginaAnterior(true)}>Anterior</button>
            <button onClick={()=>paginaSiguiente(true)}>Siguiente</button>

        </>
    )
}

