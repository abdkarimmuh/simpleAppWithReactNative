import apisauce from 'apisauce';

import Config from '../config';

const create = (baseURL = Config.baseUrl) => {
    const api = apisauce.create({baseURL})

    //GET
    const getData = () => api.get('/barang')

    //POST

    return {
        getData
    }
}

export default {
    create
}