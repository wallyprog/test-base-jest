import { UserModel } from '../models/UserModel'

test('it should be ok', () => {
  const user = new UserModel('Wallyson')

  expect(user.name).toEqual('Wallyson')
})
