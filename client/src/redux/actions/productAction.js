import { FETCH_PRODUCTS } from '../constants/index.js';
import axios from 'axios';

export const fetchProducts = () => dispatch => {
    axios.get('https://bastilify-api.herokuapp.com/')
    .then(res => dispatch({
        type: FETCH_PRODUCTS,
        products: res.data
    }))
    .catch(err => {
        console.log(err);
    })
}