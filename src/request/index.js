const msgErro = 'Ocorreu um erro ao realizar a requisição =>'

import axios from 'axios'

export class Request {
    static get = (url, param) => {
        if (url) {
            try {
                if (param) {
                    return axios.get(url).then((response) => {
                        if (response.status === 200) {
                            return response.data
                        }
                    })
                }
                return axios.get(url).then((response) => {
                    if (response.status === 200) {
                        return response.data
                    }
                })
            } catch (error) {
                console.log(`${msgErro, error}`)
            }
        }
    }
    static post = (url, obj)  => {
        if (url) {
            try {
                return axios.post(url, {obj}).then((response) => {
                    if (response.status === 200) {
                        return response.data
                    }
                })
            }catch (error) {
                console.log(`${msgErro, error}`)
            }
        }
    }
    static put = (url, obj)  => {
        if (url) {
            try {
                return axios.put(url, {obj}).then((response) => {
                    if (response.status === 200) {
                        return response.data
                    }
                })
            }catch (error) {
                console.log(`${msgErro, error}`)
            }
        }
    }
    static deleted = (url, id)  => {
        if (url) {
            try {
                return axios.delete(url, id).then((response) => {
                    if (response.status === 200) {
                        return true
                    }
                })
            }catch (error) {
                console.log(`${msgErro, error}`)
            }
        }
    }
}

export { get, post, put, deleted }