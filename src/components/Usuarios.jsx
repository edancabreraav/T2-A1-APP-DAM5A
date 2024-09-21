import { React, useEffect, useState, useRef } from 'react'
import reqRespApi from '../api/reqRes'


export const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const refPage = useRef(1);


    const cargarUsuarios = async (isButtonClick=false) => {
        const response = await
        //Llamado de la API
        reqRespApi.get('/users',{
            params: {
                page: refPage.current
            }
        })
            .then(resp => {
                if(resp.data.data.length > 0){
                    if (isButtonClick){
                        refPage.current++
                        setUsuarios(resp.data.data);
                    }
                     setUsuarios(resp.data.data);
                    
                    
                }
                else{
                    alert('No hay más registros');
                }
                console.log(refPage.current)
                
                
            })
            .catch(err => console.log(err))
    }

    

    useEffect(() => {
        //Llamado de la función cargarUsuarios
        cargarUsuarios();
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
            <button onClick={()=>cargarUsuarios(true)}>Siguiente</button>

        </>
    )
}

