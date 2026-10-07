import axios from 'axios'
import { config } from '#/config.ts'

export const axiosInstance = axios.create({
  baseURL: config.BASE_API_URL,
})
