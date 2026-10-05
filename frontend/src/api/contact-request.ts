import { axiosInstance } from '#/api/base.ts'

interface CreateContactRequestData {
  message: string
  email?: string
  telegram?: string
}

interface CreateContactRequestResponse {
  id: number
  message: string
  email_account_id: number
  telegram_account_id: number
  created_at: string
}

export async function createContactRequest(data: CreateContactRequestData) {
  const rsp = await axiosInstance.post<CreateContactRequestResponse>(
    '/contact-requests/',
    data,
  )
  return rsp.data
}
