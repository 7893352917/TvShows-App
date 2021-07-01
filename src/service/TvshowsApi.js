import axios from 'axios';

const URL = "http://api.tvmaze.com";

export const getTvShows = async (name) => {
    return await axios.get(`${URL}/search/shows?q=${name}`)
}

export const getAllShows = () => {
    return axios.get(`${URL}/shows`)
}

export const getSingleShow = async (id) => {
    return await axios.get(`${URL}/shows/${id}`)
}