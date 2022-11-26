import {Router} from 'express'

import { createNewFerreteria, deleteFerreteriaById, getFerreteriaById, getFerreterias, updateFerreteriaById} from '../controllers/ferreteria.controller';

import { createNewHistorial, deleteHistorialById, getHistorial, getHistorialById, updateHistorialById } from '../controllers/historial.controller';

import { createNewMembresia, deleteMembresiaById, getMembresia, getMembresiaById, updateMembresiaById } from '../controllers/membresia.controller';

import { createNewUsuario, deleteUsuarioById, getUsuarioById, getUsuarios, updateUsuarioById } from '../controllers/usuarios.controller'

const router = Router()

//usuarios
router.get('/api/Usuarios',getUsuarios);

router.post('/api/Usuarios',createNewUsuario);

router.get('/api/Usuarios/:id',getUsuarioById);

router.delete('/api/Usuarios/:id',deleteUsuarioById);

router.put('/api/Usuarios/:id',updateUsuarioById);

//ferreterias
router.get('/api/Ferreterias',getFerreterias);

router.post('/api/Ferreterias',createNewFerreteria);

router.get('/api/Ferreterias/:id',getFerreteriaById);

router.delete('/api/Ferreterias/:id',deleteFerreteriaById);

router.put('/api/Ferreterias/:id',updateFerreteriaById);

//membresia
router.get('/api/Membresia',getMembresia);

router.post('/api/Membresia',createNewMembresia);

router.get('/api/Membresia/:id',getMembresiaById);

router.delete('/api/Membresia/:id',deleteMembresiaById);

router.put('/api/Membresia/:id',updateMembresiaById);

//Historial
router.get('/api/Historial',getHistorial);

router.post('/api/Historial',createNewHistorial);

router.get('/api/Historial/:id',getHistorialById);

router.delete('/api/Historial/:id',deleteHistorialById);

router.put('/api/Historial/:id',updateHistorialById);

export default router