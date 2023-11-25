import axios from "axios";

const instance = axios.create({
    // baseURL: 'https://assignment12-kvx8eokkz-sh-fahims-projects.vercel.app',
    baseURL: 'http://localhost:5000',
}) 

const useAxiosPublic = () => {
    return instance
};

export default useAxiosPublic;