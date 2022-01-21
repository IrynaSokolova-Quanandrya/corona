import axios from "axios";

axios.defaults.baseURL = 'https://api.covid19api.com/';

function FetchAllStatistics(){
    return axios
    .get('summary')
    .then(response => response.data)
}

const api = {
    FetchAllStatistics
};
export default api;