import axios from "axios";
import propTypes from 'prop-types';

axios.defaults.baseURL = 'https://api.covid19api.com/';
const MY_KEY = 'PMAK-61e5cf2d12a2c33c817f13b7-29974da44c163c85c45abda8679a5d9d20'
const oneCountry = 'live/country/south-africa/status/confirmed'


export default function FetchApi(){
    return axios
    .get('summary')
    .then(response => response.data)
}