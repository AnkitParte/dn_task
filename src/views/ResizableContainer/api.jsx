import axios from 'axios'
import { baseURL } from '../../env'

export const fetchCount = async () => {
  try {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${baseURL}/user/count`,
      headers: {
        'Content-Type': 'application/json'
      }
    }
    let res = await axios.request(config)
    return {
      status: 200,
      data: res?.data
    }
  } catch (e) {
    return {
      status: 500,
      data: 'Internal Server Error'
    }
  }
}
