import { useEffect, useState, useRef } from "react";
import reqRespApi from "../../api/reqRes";



export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const refPage = useRef(1);

    useEffect(() => {
        //Llamado de la función cargarUsuarios
        cargarUsuarios();
    }, [])

    const paginaSiguiente = (isButtonClick = false) => {
        if (isButtonClick) {
            refPage.current++;
            cargarUsuarios();
        }
    }
    const paginaAnterior = (isButtonClick = false) => {
        if (isButtonClick) {
            if (refPage.current > 1)
                refPage.current--;
            cargarUsuarios();
        }
    }

    const cargarUsuarios = async () => {
        const response = await
            //Llamado de la API
            reqRespApi.get('/users', {
                params: {
                    page: refPage.current
                }
            })
                .then(resp => {
                    if (resp.data.data.length > 0) {
                        // if (isButtonClick) {
                        //     refPage.current++
                        //     setUsuarios(resp.data.data);
                        // }
                        setUsuarios(resp.data.data);


                    }
                    else {
                        alert('No hay más registros');
                    }
                    console.log(refPage.current)


                })
                .catch(err => console.log(err))
    }

    return {
        usuarios,
        // cargarUsuarios
        paginaSiguiente,
        paginaAnterior
    }
}

