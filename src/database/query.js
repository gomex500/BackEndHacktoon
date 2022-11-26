//almacenando querys crud por tabla en objetos 'objetoQ'

//objeto UsuarioQ
export const usuariosQ = {
    getAllUsuarios: 'SELECT * FROM Usuarios',
    createNewUsuario: 'INSERT INTO Usuarios VALUES (@Nombre, @Apellido, @Correo, @Direccion, @Password, SYSDATETIME(),SYSDATETIME())',
    getusuarioId: 'SELECT * FROM Usuarios WHERE IdUsuario = @IdUsuario',
    deleteUsuario: 'DELETE FROM Usuarios WHERE IdUsuario = @IdUsuario',
    updateUsuario: 'UPDATE Usuarios SET Nombre = @Nombre, Apellido = @Apellido, Correo = @Correo, Direccion = @Direccion, Password = @Password WHERE IdUsuario = @IdUsuario'
}

//objeto ferreteriaQ
export const ferreteriaQ = {
    getAllFerreteria: 'SELECT * FROM Ferreteria',
    createNewFerreteria: 'INSERT INTO Ferreteria VALUES (@Nombre, @Direccion, @Telefono, @Propietario, @pCemento, @pArena, @pLadrillo, @pBloque, @pPiedra, SYSDATETIME(),SYSDATETIME())',
    getFerreteriaId: 'SELECT * FROM Ferreteria WHERE IdFerreteria = @IdFerreteria',
    deleteFerreteria: 'DELETE FROM Ferreteria WHERE IdFerreteria = @IdFerreteria',
    updateFerreteria: 'UPDATE Ferreteria SET Nombre = @Nombre, Direccion = @Direccion, Telefono = @Telefono, Propietario = @Propietario, pCemento = @pCemento, pArena = @pArena, pLadrillo = @pLadrillo, pBloque = @pBloque, pPiedra = @pPiedra WHERE IdFerreteria = @IdFerreteria'
}

//objeto membresiaQ
export const membresiaQ = {
    getAllMembresia: 'SELECT * FROM Membresia',
    createNewMembresia: 'INSERT INTO Membresia VALUES (@IdUsuario, @Tipo, @Precio, SYSDATETIME(),SYSDATETIME())',
    getMembresiaId: 'SELECT * FROM Membresia WHERE IdMembresia = @IdMembresia',
    deleteMembresia: 'DELETE FROM Membresia WHERE IdMembresia = @IdMembresia',
    updateMembresia: 'UPDATE Membresia SET IdUsuario = @IdUsuario, Tipo = @Tipo, Precio = @Precio WHERE IdMembresia = @IdMembresia'
}

//objeto historialQ
export const historialQ = {
    getAllHistorial: 'SELECT * FROM Historial',
    createNewHistorial: 'INSERT INTO Historial VALUES (@IdUsuario, @IdFerreteria, @TipoCalculo, @TotalGasto, SYSDATETIME(),SYSDATETIME())',
    getHistorialId: 'SELECT * FROM Historial WHERE IdHistorial = @IdHistorial',
    deleteHistorial: 'DELETE FROM Historial WHERE IdHistorial = @IdHistorial',
    updateHistorial: 'UPDATE Historial SET IdUsuario = @IdUsuario, IdFerreteria = @IdFerreteria, TipoCalculo = @TipoCalculo, TotalGasto = @TotalGasto WHERE IdHistorial = @IdHistorial'
}