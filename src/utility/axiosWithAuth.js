import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        // baseURL: 'https://some-domain.com/api',
        baseURL: 'https://reqres.in/api',
        headers: {
            Authorization: token,
        },
    })
}

export default axiosWithAuth;

// makes axios calls and includes auth token