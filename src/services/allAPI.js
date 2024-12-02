import { baseURL } from "./baseURL"
import { commonAPI } from "./commonAPI"

export const adduser = async(user)=>{
    return await commonAPI('POST',`${baseURL}/users`,user)
}
export const getUser = async()=>{
    return await commonAPI('GET',`${baseURL}/users`,"")
}
export const delUser = async(id)=>{
    return await commonAPI('DELETE',`${baseURL}/users/${id}`,{})
}
export const editUser = async(id,user)=>{
    return await commonAPI('PUT',`${baseURL}/users/${id}`,user)
}