
import apiClient from './AxiosApiService'

export const retrieveHelloWorlBean = () => apiClient.get('/hello-world-bean')