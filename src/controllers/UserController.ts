import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import UserModel from '../models/UserModel'
class UserController {
  async store (req: Request, res: Response) {
    const repository = getRepository(UserModel)
    console.log(req.body)
    const { email, password } = req.body

    try {
      const userExist = await repository.findOne({ where: { email } })

      if (userExist) {
        return res.status(409).json({ message: 'Usuario já existe', status: 409 })
      }

      const user = repository.create({ email, password })
      await repository.save(user)

      return res.status(200).json({
        message: `usuario com email ${email} foi cadastrado com sucesso `,
        status: 200
      })
    } catch (err) {
      console.log(err)
      return res.sendStatus(400)
    }
  }
}
export default new UserController()
