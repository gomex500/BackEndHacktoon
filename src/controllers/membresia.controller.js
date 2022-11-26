import {getConnection, sql, membresiaQ} from '../database';


export const getMembresia = async(req, res) => {
    try {
        const pool  = await getConnection();
        const result = await pool.request().query(membresiaQ.getAllMembresia);
        // console.log(result.recordset);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const createNewMembresia = async (req, res) => {
    const {IdUsuario, Tipo, Precio} = req.body;
        console.log(IdUsuario, Tipo, Precio);

    try {
        const pool = await getConnection();
        await pool.request()
        .input('IdUsuario',sql.Int, IdUsuario)
        .input('Tipo', sql.VarChar, Tipo)
        .input('Precio', sql.Decimal, Precio)
        .query(membresiaQ.createNewMembresia)
        res.json({IdUsuario, Tipo, Precio});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getMembresiaById = async (req, res) =>{
    try {
        const {id} = req.params;
        const pool = await getConnection();
        const result = await pool.request().input('IdMembresia', id).query(membresiaQ.getMembresiaId);
    res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

export const deleteMembresiaById = async (req, res) =>{
    try {
        const {id} = req.params;
        const pool = await getConnection();
        const result = await pool.request().input('IdMembresia', id).query(membresiaQ.deleteMembresia);
    res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

export const updateMembresiaById = async (req, res) => {
    const {id} = req.params;
    const {IdUsuario, Tipo, Precio} = req.body;
    console.log(IdUsuario, Tipo, Precio);
    
    try {
        const pool = await getConnection();
        await pool.request()
        .input('IdUsuario',sql.Int, IdUsuario)
        .input('Tipo', sql.VarChar, Tipo)
        .input('Precio', sql.Decimal, Precio)
        .input('IdMembresia', sql.Int, id)
        .query(membresiaQ.updateMembresia)
        res.json({IdUsuario, Tipo, Precio});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
