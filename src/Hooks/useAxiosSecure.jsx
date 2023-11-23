import axios from "axios";

const secureInstance = axios.create({
    baseURL: 'http://localhost:5000',
})

const useAxiosSecure = () => {
    secureInstance.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    });

    return secureInstance
};

export default useAxiosSecure;