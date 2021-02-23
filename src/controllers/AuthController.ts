import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import UserModel from '../models/UserModel'

class AuthController {
  index (req:Request, res:Response) {
    return res.status(200).json({
      message: 'ok'
    })
  }

  async autheticate (req: Request, res: Response) {
    const repository = getRepository(UserModel)
    const { email, password } = req.body
    try {
      const user = await repository.findOne({ where: { email } })
      if (!user) {
        return res.status(401).json({
          message: ' usuario não encontrado',
          status: 401
        })
      }

      const isValidPassword = await bcrypt.compare(password, user.password)
      if (!isValidPassword) {
        return res.status(401).json({
          message: 'senha inválida',
          status: 401
        })
      }

      const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1d' })

      return res.status(200).json({
        message: 'usuario logado com sucesso ',
        token,
        status: 200
      })
    } catch (err) {
      console.log(err)
    }
  }
}

export default new AuthController()
