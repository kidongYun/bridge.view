import axios from 'axios'

export function postObjective() {
    return axios.post('http://192.168.0.10/objective');
}