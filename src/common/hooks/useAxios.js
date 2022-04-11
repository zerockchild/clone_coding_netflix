import axios from "axios"

const useAxios = axios.create({

    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        "Content-type": "application/x-www-form-urlencoded",
        'Accept': "application/json; charset=UTF-8"
    },
});

export default useAxios;