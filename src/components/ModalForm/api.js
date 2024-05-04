import axios from 'axios'
import { baseURL } from '../../env'

export const addUserApi = async (data) => {
  try {
    let apiData = {
      name: data?.name,
      email: data?.email,
      role: data?.role
    }

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${baseURL}/user/`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(apiData)
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
