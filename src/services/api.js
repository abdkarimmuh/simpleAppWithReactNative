import apisauce from 'apisauce';

import Config from '../config';

const create = (baseURL = Config.baseUrl) => {
    const api = apisauce.create({baseURL})

    //GET
    const getData = () => api.get('/barang/')

    //POST
    const postData = (nama_barang, jumlah) => api.post(`/barang/`, {nama_barang: nama_barang, jumlah: jumlah})

    return {
        getData, postData
    }
}

export default {
    create
}