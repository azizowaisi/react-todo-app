import apiClient from "./AxiosApiService"

export const retrieveAllTodosForUsername = 
(username)=> apiClient.get(`/users/${username}/todos`)