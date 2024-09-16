function MyDataTypes() {

    let IdNombre = 'Edson';
    IdNombre = 706;
    //Constantes
    const Alias = 'Cabrera';
    const Nombre = "Edson";
    const Apellidos = "Cabrera Avila";
    const NumControl = 20400707;
    const NumControl2 = 1074;
    const FechaReg = new Date();
    //Variables
    let Experiencia = 20;
    let Activo = true;

    console.log("Alias: ", IdNombre)
    console.log("IdNombre: ", Nombre)
    console.log("IdNombre: ", Apellidos)
    console.log("IdNombre: ", NumControl2)
    console.log("IdNombre: ", FechaReg)
    console.log("IdNombre: ", Experiencia)
    console.log("IdNombre: ", Activo)

    //Arreglos
    let Pasatiempos = ['futbol', 'squash', 'leer', 'series y peliculas'];
    //Agregamos elementos al arreglo
    Pasatiempos.push('loteria');
    Pasatiempos.push('baraja');
    Pasatiempos.push(706);
    Pasatiempos.push(true);
    console.log("Pasatiempos:", Pasatiempos);
    let Libros = [];
    Libros.push(1533);
    Libros.push(true);
    Libros.push("El Principito");
    console.log("Libros:", Libros);

    return (
        <>
            <div>
                <h1>
                    Programa para conocer diferentes Tipos de Datos
                </h1>
                <h2>
                    Alias: {Alias},    <br />
                    Id:    {IdNombre}, <br />
                    Nombre:{Nombre},  <br />
                    Apellidos: {Apellidos}, <br />
                    Num. Control: {NumControl}, <br />
                    Num. Control 2: {NumControl2}, <br />
                    Fecha de Registro:{FechaReg.toString()}, <br />
                    Años de Experiencia: {Experiencia},<br />
                    Estatus: {(Activo) ? 'Activo' : 'No Activo'}, <br />
                    Pasatiempos: {Pasatiempos}, <br />
                    Libros: {Libros[0]},
                    {(Libros[1]) ? 'Activo' : 'No Activo'},
                    {Libros[2]}
                </h2>
            </div>
        </>
    )
}

export default MyDataTypes;