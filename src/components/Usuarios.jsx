import { React, useEffect, useState } from 'react'
import reqRespApi from '../api/reqRes'


export const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        //Llamado de la API
        reqRespApi.get('/users')
            .then(resp => {
                console.log(resp);
                console.log(resp.data.data);
                setUsuarios(resp.data.data);
            })
            .catch(err => console.log(err))
    }, [])

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

        </>
    )
}

