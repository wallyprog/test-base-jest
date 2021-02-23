import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from 'typeorm'
import bcrypt from 'bcryptjs'

@Entity('users')
class UserModel {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  email: string

  @Column()
  password: string

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword () {
    this.password = bcrypt.hashSync(this.password, 8)
  }
}
export default UserModel
