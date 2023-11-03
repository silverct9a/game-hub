import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '84d9572a792847bab3fbc305a8a02d31'
    }
})