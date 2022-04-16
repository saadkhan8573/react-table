import api from "../config/api.config";

// 'api' is just axios
const END_POINT = "?results=500";

const fetchAll = () => {
    return api.get(`${END_POINT}`)
}

export const UserData = {
    fetchAll
}