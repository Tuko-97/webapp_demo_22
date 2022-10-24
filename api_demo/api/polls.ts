import fetcher from '../lib/fetch'

const BASE_URL = '/api'
const POLLS_URL = `${BASE_URL}/polls`

export const getPolls = (options: any) => {
  return fetcher(POLLS_URL, {
    method: 'GET',
    ...options,
  })
}

export const getPoll = () => {

}

export const createPoll = () => {

}