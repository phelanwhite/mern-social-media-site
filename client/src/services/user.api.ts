import axiosInstance from '@/configs/axios.config'
import { ResponseSuccessType } from '@/utils/type'
import { UserType } from '@/features/authentication/types/user.type'

const baseUrl = `v1/user/`

export async function userGetIdApi(id: string) {
  const url = baseUrl + `get-id/` + id
  const resp = (await axiosInstance.get<ResponseSuccessType<UserType>>(url))
    .data
  return resp
}
