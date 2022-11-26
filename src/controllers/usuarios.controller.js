import {getConnection, sql, usuariosQ} from '../database';


export const getUsuarios = async(req, res) => {
    try {
        const pool  = await getConnection();
        const result = await pool.request().query(usuariosQ.getAllUsuarios);
        // console.log(result.recordset);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const createNewUsuario = async (req, res) => {
    const {Nombre, Apellido, Correo, Direccion, Password} = req.body;
        console.log(Nombre, Apellido, Correo, Direccion, Password);

    try {
        const pool = await getConnection();
        await pool.request()
        .input('Nombre',sql.VarChar, Nombre)
        .input('Apellido', sql.VarChar, Apellido)
        .input('Correo', sql.VarChar, Correo)
        .input('Direccion', sql.VarChar, Direccion)
        .input('Password', sql.VarChar, Password)
        .query(usuariosQ.createNewUsuario)
        res.json({Nombre, Apellido, Correo, Direccion, Password});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getUsuarioById = async (req, res) =>{
    try {
        const {id} = req.params;
        const pool = await getConnection();
        const result = await pool.request().input('IdUsuario', id).query(usuariosQ.getusuarioId);
    res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

export const deleteUsuarioById = async (req, res) =>{
    try {
        const {id} = req.params;
        const pool = await getConnection();
        const result = await pool.request().input('IdUsuario', id).query(usuariosQ.deleteUsuario);
    res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

export const updateUsuarioById = async (req, res) => {
    const {id} = req.params;
    const {Nombre, Apellido, Correo, Direccion, Password} = req.body;
    console.log(Nombre, Apellido, Correo, Direccion, Password);
    
    try {
        const pool = await getConnection();
        await pool.request()
        .input('Nombre',sql.VarChar, Nombre)
        .input('Apellido', sql.VarChar, Apellido)
        .input('Correo', sql.VarChar, Correo)
        .input('Direccion', sql.VarChar, Direccion)
        .input('Password', sql.VarChar, Password)
        .input('IdUsuario', sql.Int, id)
        .query(usuariosQ.updateUsuario)
        res.json({Nombre, Apellido, Correo, Direccion, Password});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
