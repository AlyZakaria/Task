import axios from "axios";
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';

export default axios.create({
    baseURL: "https://scandiweb-test-assigment.000webhostapp.com",
});