import {getConnection, sql, historialQ} from '../database';


export const getHistorial = async(req, res) => {
    try {
        const pool  = await getConnection();
        const result = await pool.request().query(historialQ.getAllHistorial);
        // console.log(result.recordset);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const createNewHistorial = async (req, res) => {
    const {IdUsuario, IdFerreteria, TipoCalculo, TotalGasto} = req.body;
        console.log(IdUsuario, IdFerreteria, TipoCalculo, TotalGasto);

    try {
        const pool = await getConnection();
        await pool.request()
        .input('IdUsuario',sql.Int, IdUsuario)
        .input('IdFerreteria', sql.Int, IdFerreteria)
        .input('TipoCalculo', sql.VarChar, TipoCalculo)
        .input('TotalGasto', sql.Decimal, TotalGasto)
        .query(historialQ.createNewHistorial)
        res.json({IdUsuario, IdFerreteria, TipoCalculo, TotalGasto});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getHistorialById = async (req, res) =>{
    try {
        const {id} = req.params;
        const pool = await getConnection();
        const result = await pool.request().input('IdHistorial', id).query(historialQ.getHistorialId);
    res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

export const deleteHistorialById = async (req, res) =>{
    try {
        const {id} = req.params;
        const pool = await getConnection();
        const result = await pool.request().input('IdHistorial', id).query(historialQ.deleteHistorial);
    res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

export const updateHistorialById = async (req, res) => {
    const {id} = req.params;
    const {IdUsuario, IdFerreteria, TipoCalculo, TotalGasto} = req.body;
    console.log(IdUsuario, IdFerreteria, TipoCalculo, TotalGasto);
    
    try {
        const pool = await getConnection();
        await pool.request()
        .input('IdUsuario',sql.Int, IdUsuario)
        .input('IdFerreteria', sql.Int, IdFerreteria)
        .input('TipoCalculo', sql.VarChar, TipoCalculo)
        .input('TotalGasto', sql.Decimal, TotalGasto)
        .input('IdHistorial', sql.Int, id)
        .query(historialQ.updateHistorial)
        res.json({IdUsuario, IdFerreteria, TipoCalculo, TotalGasto});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
