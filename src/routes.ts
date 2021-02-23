
import { Router } from 'express'
import UserController from '../src/controllers/UserController'
import AuthController from '../src/controllers/AuthController'
import authMiddleware from './middleware/authMiddleware'

const router = Router()
router.post('/auth', AuthController.autheticate)
router.post('/users', UserController.store)
router.get('/users', authMiddleware, AuthController.index)

export default router
