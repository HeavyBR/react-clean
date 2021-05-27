import faker from 'faker'
import { HttpPostParams } from '../protocols/http'

export const makeRequestData = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement()
})
