import axios from 'axios'

let req = axios.create({
    baseURL: 'http://localhost:3000',
    // baseURL: 'http://192.168.0.101:3000',
    
    timeout: 10000
})

export function getseller(){
    return req.get('/api/seller')
}
export function getgoods(){
    return req.get('/api/goods')
}
export function getratings(){
    return req.get('/api/ratings')
}
