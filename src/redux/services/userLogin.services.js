import axios from "axios";

// 'api' is just axios
const END_POINT = "/login";

const login = (user) => {
    return axios.post(`http://localhost:4000/api/v1/${END_POINT}`,user)
}

export const UserLogin = {
    login
}