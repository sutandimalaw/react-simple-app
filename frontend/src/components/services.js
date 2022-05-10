import axios from "axios";

const get = (params) => {
    return axios.get(`http://localhost:8000/api?tags=${params}`)
    .then((response) => {
        return response;
    }).catch((err) => {
        console.log(err);
    })
};

const Services ={
    get
}

export default Services