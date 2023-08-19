import express from 'express'
import { getUserController, profileCreateController, userCreateController } from './user.controller';

const router = express.Router()

router.post('/create-user', userCreateController)
router.post('/create-profile', profileCreateController)
router.get('/get-user', getUserController)

export const userRouter = router ;