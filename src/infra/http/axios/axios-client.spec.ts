import { mockAxios } from '@/infra/http/test'
import { AxiosHttpClient } from './axios-client'
import axios from 'axios'
import { makeRequestData } from '@/data/test'

jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()

  return {
    sut,
    mockedAxios
  }
}

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const requestData = makeRequestData()
    const { sut, mockedAxios } = makeSut()
    await sut.post(requestData)
    expect(mockedAxios.post).toHaveBeenCalledWith(requestData.url, requestData.body)
  })
  test('Should return correct values on post response', () => {
    const requestData = makeRequestData()
    const { sut, mockedAxios } = makeSut()
    const promise = sut.post(requestData)
    expect(promise).toEqual(mockedAxios.post.mock.results[0].value) // position 0 means that we are looking for the resolved values
  })
})
