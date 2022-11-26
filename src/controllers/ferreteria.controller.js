import {getConnection, sql, ferreteriaQ} from '../database';


export const getFerreterias = async(req, res) => {
    try {
        const pool  = await getConnection();
        const result = await pool.request().query(ferreteriaQ.getAllFerreteria);
        // console.log(result.recordset);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const createNewFerreteria = async (req, res) => {
    const {Nombre, Direccion, Telefono, Propietario, pCemento, pArena, pLadrillo, pBloque, pPiedra} = req.body;
        console.log(Nombre, Direccion, Telefono, Propietario, pCemento, pArena, pLadrillo, pBloque, pPiedra);

    try {
        const pool = await getConnection();
        await pool.request()
        .input('Nombre',sql.VarChar, Nombre)
        .input('Direccion', sql.VarChar, Direccion)
        .input('Telefono', sql.VarChar, Telefono)
        .input('Propietario', sql.VarChar, Propietario)
        .input('pCemento', sql.Decimal, pCemento)
        .input('pArena', sql.Decimal, pArena)
        .input('pLadrillo', sql.Decimal, pLadrillo)
        .input('pBloque', sql.Decimal, pBloque)
        .input('pPiedra', sql.Decimal, pPiedra)
        .query(ferreteriaQ.createNewFerreteria)
        res.json({Nombre, Direccion, Telefono, Propietario, pCemento, pArena, pLadrillo, pBloque, pPiedra});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getFerreteriaById = async (req, res) =>{
    try {
        const {id} = req.params;
        const pool = await getConnection();
        const result = await pool.request().input('IdFerreteria', id).query(ferreteriaQ.getFerreteriaId);
    res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

export const deleteFerreteriaById = async (req, res) =>{
    try {
        const {id} = req.params;
        const pool = await getConnection();
        const result = await pool.request().input('IdFerreteria', id).query(ferreteriaQ.deleteFerreteria);
    res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

export const updateFerreteriaById = async (req, res) => {
    const {id} = req.params;
    const {Nombre, Direccion, Telefono, Propietario, pCemento, pArena, pLadrillo, pBloque, pPiedra} = req.body;
    console.log(Nombre, Direccion, Telefono, Propietario, pCemento, pArena, pLadrillo, pBloque, pPiedra);
    
    try {
        const pool = await getConnection();
        await pool.request()
        .input('Nombre',sql.VarChar, Nombre)
        .input('Direccion', sql.VarChar, Direccion)
        .input('Telefono', sql.VarChar, Telefono)
        .input('Propietario', sql.VarChar, Propietario)
        .input('pCemento', sql.Decimal, pCemento)
        .input('pArena', sql.Decimal, pArena)
        .input('pLadrillo', sql.Decimal, pLadrillo)
        .input('pBloque', sql.Decimal, pBloque)
        .input('pPiedra', sql.Decimal, pPiedra)
        .input('IdFerreteria', sql.Int, id)
        .query(ferreteriaQ.updateFerreteria)
        res.json({Nombre, Direccion, Telefono, Propietario, pCemento, pArena, pLadrillo, pBloque, pPiedra});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
